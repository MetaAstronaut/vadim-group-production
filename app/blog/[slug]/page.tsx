import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft
} from 'lucide-react';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getBlogArticle, getAllBlogSlugs } from '@/lib/markdown';

// Generate static params for all blog articles
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const keywords = Array.isArray(article.keywords) 
    ? article.keywords.join(', ')
    : article.keywords || '';

  return {
    title: `${article.title} | Vadim Group Blog`,
    description: article.description,
    keywords: keywords,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://vadimgroup.com/blog/${slug}`,
      siteName: 'Vadim Group',
      images: [{
        url: article.ogImage || article.coverImage || '/assets/blog-default.webp',
        width: 1200,
        height: 630,
        alt: article.title,
      }],
      locale: 'en_US',
      type: 'article',
      publishedTime: article.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.ogImage || article.coverImage || '/assets/blog-default.webp'],
    },
    alternates: {
      canonical: `https://vadimgroup.com/blog/${slug}`,
    },
  };
}

// Article content component with proper markdown parsing
function ArticleContent({ content }: { content: string }) {
  // Remove emojis and clean content
  let cleanContent = content
    .replace(/🛠️/g, '')
    .replace(/🧩/g, '')
    .replace(/⚠️/g, '')
    .replace(/🔧/g, '')
    .replace(/📞/g, '')
    .trim();

  // Remove ONLY the first H1 header (article title is already displayed)
  const lines = cleanContent.split('\n');
  let firstH1Found = false;
  cleanContent = lines.filter(line => {
    if (line.trim().startsWith('# ') && !firstH1Found) {
      firstH1Found = true;
      return false;
    }
    return true;
  }).join('\n');

  // Parse sections by H1 and H2 headers
  const sections: Array<{ title: string; content: string }> = [];
  const sectionRegex = /^(#{1,2})\s+(.+)$/gm;
  let lastIndex = 0;
  let match;

  while ((match = sectionRegex.exec(cleanContent)) !== null) {
    // Add content before this header (if any and not first)
    if (sections.length > 0 && lastIndex < match.index) {
      sections[sections.length - 1].content = cleanContent.substring(lastIndex, match.index).trim();
    }
    
    // Add new section
    sections.push({
      title: match[2].trim(),
      content: ''
    });
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add content for last section
  if (sections.length > 0 && lastIndex < cleanContent.length) {
    sections[sections.length - 1].content = cleanContent.substring(lastIndex).trim();
  }

  return (
    <div className="space-y-12">
      {sections.map((section, index) => {
        const titleLine = section.title;
        const sectionContent = section.content;

        // Skip if empty
        if (!titleLine) return null;

        // Check if this is the author section (only "Written by" section)
        const isAuthorSection = titleLine.toLowerCase().includes('written by');

        if (isAuthorSection) {
          // Render author card
          return (
            <AuthorSection 
              key={index} 
              title={titleLine.replace(/\*\*/g, '')} 
              content={sectionContent} 
            />
          );
        }

        // Check if this is FAQ section
        const isFAQ = titleLine.toLowerCase().includes('faq') || 
                     titleLine.toLowerCase().includes('questions');

        return (
          <section key={index} className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-brand-primary mb-8 border-b-2 border-brand-accent/30 pb-3">
              {titleLine}
            </h2>
            <div>
              {isFAQ ? (
                <FAQAccordion content={sectionContent} />
              ) : (
                <MarkdownContent content={sectionContent} />
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}

// Markdown content renderer
function MarkdownContent({ content }: { content: string }) {
  if (!content.trim()) return null;

  // Remove horizontal rules only
  content = content.replace(/^---+$/gm, '');
  
  const elements: React.ReactNode[] = [];
  const lines = content.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Skip empty lines
    if (!line) {
      i++;
      continue;
    }

    // Tables
    if (line.startsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      elements.push(<TableRenderer key={elements.length} lines={tableLines} />);
      continue;
    }

    // H3 Headers (remove all # symbols and ** bold markers)
    if (line.startsWith('###') || line.startsWith('##')) {
      const text = line.replace(/^#+\s*/, '').replace(/\*\*/g, '').trim();
      elements.push(
        <h3 key={elements.length} className="text-xl font-bold text-brand-primary mt-6 mb-3">
          {text}
        </h3>
      );
      i++;
      continue;
    }

    // Lists
    if (line.startsWith('-')) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('-')) {
        listItems.push(lines[i].trim().replace(/^-\s*/, ''));
        i++;
      }
      elements.push(
        <ul key={elements.length} className="list-disc list-inside space-y-2 my-4 text-gray-700">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">{parseInlineMarkdown(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Regular paragraphs
    elements.push(
      <p key={elements.length} className="text-gray-700 leading-relaxed mb-4">
        {parseInlineMarkdown(line)}
      </p>
    );
    i++;
  }

  return <>{elements}</>;
}

// Table renderer component with urgency colors
function TableRenderer({ lines }: { lines: string[] }) {
  if (lines.length < 2) return null;

  const rows = lines.filter(line => !line.includes('---'));
  const [headerLine, ...dataLines] = rows;
  
  const headers = headerLine.split('|').filter(Boolean).map(h => h.trim());
  const data = dataLines.map(line => 
    line.split('|').filter(Boolean).map(cell => cell.trim())
  );

  // Urgency colors
  const getUrgencyStyle = (urgency: string) => {
    const lower = urgency.toLowerCase();
    if (lower.includes('high')) {
      return 'bg-red-50 text-red-700 border border-red-200';
    }
    if (lower.includes('medium')) {
      return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
    }
    return 'bg-gray-50 text-gray-700';
  };

  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-brand-primary text-white">
            {headers.map((header, idx) => (
              <th key={idx} className="px-3 py-2.5 text-left font-semibold text-sm">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr 
              key={rowIdx} 
              className={`border-b transition-colors ${
                rowIdx % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-[#F7F9FC] hover:bg-gray-100'
              }`}
            >
              {row.map((cell, cellIdx) => {
                // Urgency column (index 1)
                if (cellIdx === 1) {
                  return (
                    <td key={cellIdx} className="px-3 py-2.5">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getUrgencyStyle(cell)}`}>
                        {cell}
                      </span>
                    </td>
                  );
                }
                return (
                  <td key={cellIdx} className="px-3 py-2.5 text-gray-800 text-sm">
                    {parseInlineMarkdown(cell)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Parse inline markdown (bold, etc.)
function parseInlineMarkdown(text: string): React.ReactNode {
  // Bold text
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="font-semibold text-brand-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

// FAQ Accordion component
function FAQAccordion({ content }: { content: string }) {
  // Parse FAQ items
  const lines = content.split('\n');
  const faqItems: Array<{ question: string; answer: string }> = [];
  
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    
    // H3 headers are questions
    if (line.startsWith('###')) {
      const question = line.replace(/^###\s*/, '').replace(/\*\*/g, '').trim();
      const answerLines: string[] = [];
      
      // Collect answer lines until next question or end
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('###')) {
        if (lines[i].trim()) {
          answerLines.push(lines[i].trim());
        }
        i++;
      }
      
      if (question && answerLines.length > 0) {
        faqItems.push({
          question,
          answer: answerLines.join(' ')
        });
      }
      continue;
    }
    i++;
  }

  if (faqItems.length === 0) return null;

  return (
    <Accordion type="single" collapsible className="space-y-3">
      {faqItems.map((item, idx) => (
        <AccordionItem 
          key={idx} 
          value={`item-${idx}`}
          className="border border-gray-200 rounded-lg px-5 bg-white hover:border-brand-accent/30 transition-colors"
        >
          <AccordionTrigger className="text-left text-[17px] font-semibold text-brand-primary hover:text-brand-accent py-5">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-[15px] text-gray-700 leading-relaxed pb-5">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// Author section component - styled like Why Choose Us quote
function AuthorSection({ content }: { title: string; content: string }) {
  return (
    <section className="scroll-mt-20 mt-16">
      {/* Author Quote Card - matching home page style */}
      <div className="max-w-[900px] mx-auto">
        <div className="
          relative 
          bg-gradient-to-br from-[#F8F9FA] via-[#F1F5F9] to-[#EFF6FF]
          rounded-xl 
          p-6 md:p-8
          border-l-4 border-l-brand-accent
          border border-brand-accent/25
          shadow-[0_4px_16px_rgba(15,23,42,0.08)]
        ">
          {/* Flex container for avatar + content */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            {/* Avatar */}
            <div className="flex justify-center md:justify-start shrink-0">
              <div className="relative">
                <Image 
                  src="/assets/vadim-portrait.jpg" 
                  alt="Vadim Shakin" 
                  width={64}
                  height={64}
                  className="
                    w-14 h-14 md:w-16 md:h-16 
                    rounded-full 
                    object-cover 
                    border-[3px] border-brand-accent
                    shadow-[0_4px_12px_rgba(15,23,42,0.1)]
                  "
                />
              </div>
            </div>
            
            {/* Quote and Attribution */}
            <div className="flex-1">
              <blockquote className="relative">
                <p className="
                  text-[15px] md:text-[16px] 
                  font-medium 
                  text-brand-primary 
                  italic 
                  leading-[1.5]
                  mb-2
                ">
                  Written by Vadim Group — Home Repair Experts in Orlando, Florida
                </p>
              </blockquote>
              
              {/* Additional description */}
              <p className="text-[14px] text-text-secondary leading-relaxed">
                {content.trim()}
              </p>
            </div>
          </div>
        </div>

        {/* Link below */}
        <div className="mt-6 text-center">
          <Link
            href="/about"
            className="inline-block text-brand-accent hover:text-brand-accent-hover font-medium transition-colors text-sm"
          >
            Learn more about our services →
          </Link>
        </div>
      </div>

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Vadim Group",
            "description": "Home Repair Experts in Orlando, Florida",
            "url": "https://vadimgroup.com",
            "logo": "https://vadimgroup.com/assets/VG_logo_main.webp",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "FL",
              "addressLocality": "Orlando"
            },
            "areaServed": [
              "Orlando",
              "Lake Nona",
              "Daytona Beach",
              "Cocoa Beach",
              "Winter Park",
              "Lake Mary",
              "Kissimmee"
            ],
            "serviceType": [
              "Home Repairs",
              "Marine Repairs",
              "RV Repairs"
            ]
          })
        }}
      />
    </section>
  );
}

export default async function BlogArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Back to Blog */}
      <Section className="bg-gray-50 py-3 md:py-2">
        <Container>
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-accent transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>
        </Container>
      </Section>

      {/* Article Header */}
      <Section className="bg-white py-12 md:py-16">
        <Container className="max-w-4xl">
          {/* Category Badge */}
          <div className="mb-4">
            <Badge variant="secondary" className="text-sm">
              {article.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-brand-primary mb-6">
            {article.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {article.description}
          </p>

          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-5 text-[15px] text-gray-600 border-t border-b border-gray-200 py-4">
            <div className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-default">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-default">
              <Calendar className="h-4 w-4" />
              <span>Updated Dec 2024</span>
            </div>
            <div className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-default">
              <Clock className="h-4 w-4" />
              <span>{article.readingTime}</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Hero Image */}
      {article.heroImage && (
        <Section className="py-4 md:py-6">
          <Container className="max-w-5xl">
            <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden border border-gray-200 shadow-[0_4px_16px_rgba(15,23,42,0.08)]">
              <Image
                src={article.heroImage}
                alt={article.title}
                fill
                className="object-cover"
                priority
                quality={90}
              />
            </div>
          </Container>
        </Section>
      )}

      {/* Article Content */}
      <Section className="py-12 md:py-16">
        <Container className="max-w-4xl">
          <ArticleContent content={article.content} />
        </Container>
      </Section>

      {/* Call to Action */}
      <Section className="bg-brand-primary py-12">
        <Container className="max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help With Home Repairs?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Vadim Group provides expert home repair services throughout Central Florida
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-14 px-8 min-w-[200px] rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-all duration-300 text-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/home-repairs"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white/90 font-semibold h-14 px-8 min-w-[200px] rounded-md transition-all duration-300 text-lg"
            >
              View Our Services
            </Link>
          </div>
        </Container>
      </Section>

      {/* Related Articles / Back to Blog */}
      <Section className="py-12 bg-gray-50">
        <Container className="max-w-4xl text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-accent transition-colors text-lg font-semibold"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>See More Articles</span>
          </Link>
        </Container>
      </Section>
    </>
  );
}

