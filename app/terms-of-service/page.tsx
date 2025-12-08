import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { getMarkdownContent, parseMarkdownSections } from '@/lib/markdown';
import Link from 'next/link';
import { Mail, FileText } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  const { frontMatter } = getMarkdownContent('terms-of-service');
  
  return {
    title: frontMatter.title || 'Terms of Service | Vadim Group',
    description: frontMatter.description || 'Review the Terms of Service for Vadim Group, covering website use, estimates, liability, and service conditions.',
    keywords: frontMatter.keywords || [
      'Vadim Group Terms of Service',
      'Orlando repair service terms',
      'home repair service agreement Florida',
      'RV repair terms and conditions',
      'marine repair customer agreement',
    ],
    openGraph: {
      title: frontMatter['og:title'] || frontMatter.title,
      description: frontMatter['og:description'] || frontMatter.description,
      type: 'website',
      url: 'https://vadimgroup.com/terms-of-service',
    },
    alternates: {
      canonical: 'https://vadimgroup.com/terms-of-service',
    },
  };
}

// Helper function to process markdown titles (no HTML tags)
function processTitle(text: string, currentYear: number): string {
  return text
    .replace(/{year}/g, currentYear.toString())
    .replace(/\*\*/g, '') // Remove bold markers from titles
    .replace(/📧\s*/g, '')
    .trim();
}

// Helper function to process markdown content (with HTML)
function processMarkdownContent(text: string, currentYear: number): string {
  return text
    .replace(/{year}/g, currentYear.toString())
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/📧\s*/g, '')
    .trim();
}

// Helper function to convert markdown to HTML
function markdownToHtml(content: string, currentYear: number): string {
  const processed = processMarkdownContent(content, currentYear);
  const lines = processed.split('\n').filter(line => {
    const trimmed = line.trim();
    return trimmed && trimmed !== '---';
  });

  let html = '';
  let inList = false;
  let listItems: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('- ')) {
      if (!inList) {
        inList = true;
        listItems = [];
      }
      listItems.push(line.substring(2).trim());
    } else {
      if (inList && listItems.length > 0) {
        html += '<ul class="list-disc pl-6 space-y-2 my-4">';
        listItems.forEach(item => {
          html += `<li class="text-text-secondary leading-relaxed">${item}</li>`;
        });
        html += '</ul>';
        listItems = [];
        inList = false;
      }
      
      if (line) {
        html += `<p class="text-text-secondary leading-relaxed mb-4">${line}</p>`;
      }
    }
  }

  if (inList && listItems.length > 0) {
    html += '<ul class="list-disc pl-6 space-y-2 my-4">';
    listItems.forEach(item => {
      html += `<li class="text-text-secondary leading-relaxed">${item}</li>`;
    });
    html += '</ul>';
  }

  return html;
}

export default function TermsOfServicePage() {
  const { frontMatter, content } = getMarkdownContent('terms-of-service');
  const sections = parseMarkdownSections(content);
  const currentYear = new Date().getFullYear();

  // JSON-LD Schema for Legal Page
  const legalSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://vadimgroup.com/terms-of-service",
    "name": "Terms of Service",
    "description": frontMatter.description,
    "publisher": {
      "@type": "Organization",
      "name": "Vadim Group",
      "url": "https://vadimgroup.com"
    },
    "datePublished": `${currentYear}-01-01`,
    "dateModified": `${currentYear}-01-01`,
    "inLanguage": "en-US"
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-brand-primary to-brand-primary/90 py-16 md:py-20">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                Terms of Service
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Please review our terms and conditions for using our services
              </p>
              <p className="text-sm md:text-base text-white/70 mt-4">
                Effective Date: {currentYear} | Vadim Group — Orlando, Florida
              </p>
            </div>
          </Container>
        </Section>

        {/* Content Section */}
        <Section className="bg-surface py-12 md:py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  Welcome to the Vadim Group website. By using this site, submitting a service request, 
                  or communicating with us, you agree to the following Terms of Service.
                </p>
                <p className="text-base text-text-secondary leading-relaxed">
                  If you do not agree with these terms, please discontinue use of our website.
                </p>
              </div>

              {/* Sections */}
              {sections.map((section, index) => (
                <div 
                  key={index} 
                  className="mb-12 pb-12 border-b border-border-light last:border-b-0 last:pb-0"
                >
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-primary mb-6">
                    {processTitle(section.title, currentYear)}
                  </h2>
                  
                  {/* Subsections */}
                  {section.subsections && section.subsections.length > 0 ? (
                    <div className="space-y-8">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          <h3 className="font-heading text-xl font-semibold text-brand-primary mb-4">
                            {processTitle(subsection.title, currentYear)}
                          </h3>
                          <div 
                            className="max-w-none"
                            dangerouslySetInnerHTML={{
                              __html: markdownToHtml(subsection.content, currentYear)
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div 
                      className="max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: markdownToHtml(section.content, currentYear)
                      }}
                    />
                  )}
                </div>
              ))}

              {/* Important Notice */}
              <div className="mt-16 p-8 bg-brand-accent/5 rounded-lg border border-brand-accent/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                      Important Notice
                    </h3>
                    <p className="text-text-secondary mb-2 leading-relaxed">
                      These Terms are governed by the laws of the State of <strong>Florida</strong>.
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      We may revise these Terms at any time. Changes become effective immediately upon posting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-8 p-8 bg-surface-subtle rounded-lg border border-border-light">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                      Questions About These Terms?
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      If you have any questions regarding these Terms of Service, please contact us:
                    </p>
                    <a 
                      href="mailto:vadimgroup.repairs@gmail.com"
                      className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-accent-hover font-medium transition-colors text-lg"
                    >
                      <Mail className="h-5 w-5" />
                      vadimgroup.repairs@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Related Links */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <Link 
                  href="/privacy-policy"
                  className="text-text-secondary hover:text-brand-accent transition-colors"
                >
                  View Privacy Policy
                </Link>
                <span className="hidden sm:inline text-text-muted">•</span>
                <Link 
                  href="/"
                  className="text-text-secondary hover:text-brand-accent transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}
