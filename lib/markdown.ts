import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

// ==================== TYPES ====================

export interface FrontMatter {
  title: string;
  description: string;
  headline?: string;
  subheadline?: string;
  keywords?: string | string[];
  'og:title'?: string;
  'og:description'?: string;
  'og:image'?: string;
  'og:type'?: string;
  canonical?: string;
}

export interface BlogArticleMeta {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  keywords?: string[];
  readingTime?: string;
  coverImage?: string;
  heroImage?: string;
  ogImage?: string;
  featured?: boolean;
  status?: string;
}

export interface BlogArticle extends BlogArticleMeta {
  content: string;
}

export interface Section {
  title: string;
  content: string;
  subsections?: Section[];
  tag?: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  items: string[];
  features?: Array<{ category?: string; items: string[] }>;
  linkText?: string;
  linkHref?: string;
}

export interface ServiceCategory {
  title: string;
  brief?: string;
  preview?: string;
  subcategories: Array<{
    title: string;
    items: string[];
  }>;
}

export interface FAQ {
  question: string;
  answer: string;
  id?: string;
}

export interface Testimonial {
  text: string;
  author: string;
  location?: string;
  rating?: number;
}

export interface ProcessStep {
  title: string;
  description: string;
  number?: number;
}

// ==================== CACHING ====================

const contentCache = new Map<string, { content: string; frontMatter: FrontMatter; mtime: number }>();

function getCacheKey(slug: string): string {
  return `content-${slug}`;
}

function isCacheValid(filePath: string, cachedMtime: number): boolean {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtimeMs === cachedMtime;
  } catch {
    return false;
  }
}

// ==================== CORE FUNCTIONS ====================

/**
 * Get markdown content from a file with frontmatter
 */
export function getMarkdownContent(slug: string): { frontMatter: FrontMatter; content: string } {
  const cacheKey = getCacheKey(slug);
  const fullPath = path.join(contentDirectory, 'pages', `${slug}.md`);

  try {
    // Check cache
    const cached = contentCache.get(cacheKey);
    if (cached && isCacheValid(fullPath, cached.mtime)) {
      return { frontMatter: cached.frontMatter, content: cached.content };
    }

    // Read and parse file
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Validate frontmatter
    if (!validateFrontmatter(data)) {
      console.warn(`[Markdown] Missing required frontmatter fields in ${slug}.md`);
    }

    // Cache the result
    const stats = fs.statSync(fullPath);
    contentCache.set(cacheKey, {
      frontMatter: data as FrontMatter,
      content,
      mtime: stats.mtimeMs,
    });

    return {
      frontMatter: data as FrontMatter,
      content,
    };
  } catch (error) {
    console.error(`[Markdown] Error reading ${slug}.md:`, error);
    return {
      frontMatter: {
        title: `Error loading ${slug}`,
        description: 'Content could not be loaded',
      },
      content: '',
    };
  }
}

/**
 * Get all markdown file slugs
 */
export function getAllMarkdownSlugs(): string[] {
  try {
    const pagesDirectory = path.join(contentDirectory, 'pages');
    if (!fs.existsSync(pagesDirectory)) {
      console.warn('[Markdown] Pages directory does not exist:', pagesDirectory);
      return [];
    }

    const fileNames = fs.readdirSync(pagesDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''));
  } catch (error) {
    console.error('[Markdown] Error reading directory:', error);
    return [];
  }
}

// ==================== VALIDATION ====================

/**
 * Validate frontmatter has required fields
 */
export function validateFrontmatter(frontmatter: Record<string, unknown>): boolean {
  const required = ['title', 'description'];
  return required.every((field) => {
    const value = frontmatter[field];
    return typeof value === 'string' && value.length > 0;
  });
}

// ==================== HELPER FUNCTIONS ====================

function extractSections(content: string): string[] {
  return content.split(/^---$/m).map((s) => s.trim()).filter(Boolean);
}

function parseList(content: string): string[] {
  return content.match(/^- (.*)/gm)?.map((line) => line.replace(/^- /, '').trim()) || [];
}

// ==================== SECTION PARSERS ====================

/**
 * Parse markdown content by headers into structured sections
 */
export function parseMarkdownSections(content: string): Section[] {
  const sections: Section[] = [];
  const lines = content.split('\n');
  let currentSection: Section | null = null;
  let currentSubsection: Section | null = null;
  let currentContent: string[] = [];

  for (const line of lines) {
    if (line.startsWith('## ')) {
      // Save previous section
      if (currentSection) {
        if (currentSubsection) {
          currentSubsection.content = currentContent.join('\n').trim();
          currentSection.subsections = currentSection.subsections || [];
          currentSection.subsections.push(currentSubsection);
        } else {
          currentSection.content = currentContent.join('\n').trim();
        }
        sections.push(currentSection);
      }
      
      // Start new section
      currentSection = {
        title: line.replace('## ', '').trim(),
        content: '',
        subsections: [],
      };
      currentSubsection = null;
      currentContent = [];
    } else if (line.startsWith('### ')) {
      // Save previous subsection
      if (currentSubsection) {
        currentSubsection.content = currentContent.join('\n').trim();
        currentSection!.subsections = currentSection!.subsections || [];
        currentSection!.subsections.push(currentSubsection);
      }
      
      // Start new subsection
      currentSubsection = {
        title: line.replace('### ', '').trim(),
        content: '',
      };
      currentContent = [];
    } else {
      currentContent.push(line);
    }
  }

  // Save last section
  if (currentSection) {
    if (currentSubsection) {
      currentSubsection.content = currentContent.join('\n').trim();
      currentSection.subsections = currentSection.subsections || [];
      currentSection.subsections.push(currentSubsection);
    } else {
      currentSection.content = currentContent.join('\n').trim();
    }
    sections.push(currentSection);
  }

  return sections;
}

/**
 * Parse service cards from markdown content
 */
export function parseServiceCards(content: string): ServiceCard[] {
  const serviceItems: ServiceCard[] = [];
  const serviceBlocks = content.split(/^## /m).slice(1);

  for (const block of serviceBlocks) {
    const lines = block.split('\n');
    const title = lines[0].trim();
    const description = lines.find(
      (l) => !l.startsWith('[') && !l.startsWith('-') && !l.startsWith('**') && l.trim().length > 0 && l !== title
    )?.trim() || '';

    // Parse items (simple list)
    const items = parseList(block);

    // Parse features with categories
    const features: Array<{ category?: string; items: string[] }> = [];
    let currentCategory: string | undefined;
    let currentItems: string[] = [];

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        // Save previous category
        if (currentCategory || currentItems.length > 0) {
          features.push({ category: currentCategory, items: currentItems });
        }
        // Start new category
        currentCategory = trimmed.replace(/\*\*/g, '').trim();
        currentItems = [];
      } else if (trimmed.startsWith('-')) {
        currentItems.push(trimmed.replace(/^- /, '').trim());
      }
    }
    
    // Save last category
    if (currentCategory || currentItems.length > 0) {
      features.push({ category: currentCategory, items: currentItems });
    }

    // Parse link if exists
    const linkLine = lines.find((l) => l.trim().startsWith('['));
    const linkText = linkLine?.match(/\[(.*?)\]/)?.[1] || '';
    const linkHref = linkLine?.match(/\((.*?)\)/)?.[1] || '';

    serviceItems.push({
      title,
      description,
      items,
      features: features.length > 0 ? features : undefined,
      linkText: linkText || undefined,
      linkHref: linkHref || undefined,
    });
  }

  return serviceItems;
}

/**
 * Parse FAQ items from markdown content
 */
export function parseFAQs(content: string): FAQ[] {
  const faqs: FAQ[] = [];

  // Method 1: Parse ## Question {#id} format
  const h2Matches = content.match(/## (.*?) \{#(.*?)\}\n\n([\s\S]*?)(?=\n##|\n---|\n\n\n|$)/g);
  if (h2Matches) {
    for (const match of h2Matches) {
      const [, question, id, answer] = match.match(/## (.*?) \{#(.*?)\}\n\n([\s\S]*)/) || [];
      if (question && answer) {
        faqs.push({
          question: question.trim(),
          answer: answer.trim().replace(/\n+$/, ''),
          id: id?.trim(),
        });
      }
    }
  }

  // Method 2: Parse **Question** format (if no h2 matches found)
  if (faqs.length === 0) {
    const boldMatches = content.match(/\*\*(.*?)\*\*\n([\s\S]*?)(?=(?:\*\*|$))/g);
    if (boldMatches) {
      for (const match of boldMatches) {
        const lines = match.split('\n');
        const question = lines[0].replace(/\*\*/g, '').trim();
        const answer = lines.slice(1).join(' ').trim();
        if (question && answer) {
          faqs.push({ question, answer });
        }
      }
    }
  }

  return faqs;
}

/**
 * Parse testimonials from markdown blockquotes
 */
export function parseTestimonials(content: string): Testimonial[] {
  const testimonials: Testimonial[] = [];
  
  // Format: "Quote" - **Author**
  const matches = content.match(/"([\s\S]*?)"\s+[-—]\s+\*\*(.*?)\*\*/g);
  if (matches) {
    for (const match of matches) {
      const [, text, author] = match.match(/"([\s\S]*?)"\s+[-—]\s+\*\*(.*?)\*\*/) || [];
      if (text && author) {
        testimonials.push({
          text: text.trim().replace(/\n/g, ' '),
          author: author.trim(),
        });
      }
    }
  }

  return testimonials;
}

/**
 * Parse process steps (numbered list with bold titles)
 */
export function parseProcessSteps(content: string): ProcessStep[] {
  const steps: ProcessStep[] = [];
  
  const matches = content.match(/\d+\.\s\*\*(.*?)\*\*\s+([\s\S]*?)(?=(?:\d+\.\s\*\*|$))/g);
  if (matches) {
    for (const match of matches) {
      const [, title, description] = match.match(/\d+\.\s\*\*(.*?)\*\*\s+([\s\S]*)/) || [];
      if (title) {
        steps.push({
          title: title.trim(),
          description: description?.trim() || '',
        });
      }
    }
  }

  return steps;
}

// ==================== PAGE-SPECIFIC PARSERS ====================

/**
 * Parse home page structure
 */
export function getHomePageData() {
  const { frontMatter, content } = getMarkdownContent('home');
  const sections = extractSections(content);

  try {
    // Services (section 2)
    const servicesSection = sections[2] || '';
    const serviceItems = parseServiceCards(servicesSection);

    // Reviews (section 4 or find by marker)
    const reviewsSection = sections.find((s) => s.includes('### REVIEWS')) || '';
    const reviewsItems = parseTestimonials(reviewsSection);

    // FAQ (section 6 or find by marker)
    const faqSection = sections.find((s) => s.includes('### FAQ') || s.includes('### COMMON QUESTIONS')) || '';
    const faqItems = parseFAQs(faqSection);

    return {
      frontMatter,
      services: serviceItems,
      testimonials: reviewsItems,
      faqs: faqItems,
    };
  } catch (error) {
    console.error('[Markdown] Error parsing home page:', error);
    return {
      frontMatter: { title: '', description: '' } as FrontMatter,
      services: [],
      testimonials: [],
      faqs: [],
    };
  }
}

/**
 * Parse home repairs page structure
 */
export function getHomeRepairsPageData() {
  const { frontMatter, content } = getMarkdownContent('home-repairs');
  const sections = extractSections(content);

  try {
    // Services
    const servicesSection = sections.find((s) => s.includes('### OUR SERVICES')) || sections[1] || '';

    // Parse service categories with subcategories
    const categoryBlocks = servicesSection.split(/^## /m).slice(1);
    const categories: ServiceCategory[] = [];

    for (const block of categoryBlocks) {
      const lines = block.split('\n');
      const title = lines[0].trim();
      const brief = lines.find((l) => !l.startsWith('###') && !l.startsWith('-') && l.trim().length > 0)?.trim() || '';

      const subcategories: Array<{ title: string; items: string[] }> = [];
      const subcategoryBlocks = block.split(/^### /m).slice(1);

      for (const subBlock of subcategoryBlocks) {
        const subLines = subBlock.split('\n');
        const subTitle = subLines[0].trim();
        const items = parseList(subBlock);
        if (items.length > 0) {
          subcategories.push({ title: subTitle, items });
        }
      }

      categories.push({
        title,
        brief,
        subcategories,
      });
    }

    // FAQ
    const faqSection = sections.find((s) => s.includes('### FAQ') || s.includes('FREQUENTLY ASKED')) || '';
    const faqItems = parseFAQs(faqSection);

    return {
      frontMatter,
      serviceCategories: categories,
      emergencyServices: [],
      faqs: faqItems,
    };
  } catch (error) {
    console.error('[Markdown] Error parsing home repairs page:', error);
    return {
      frontMatter: { title: '', description: '' } as FrontMatter,
      serviceCategories: [],
      emergencyServices: [],
      faqs: [],
    };
  }
}

/**
 * Parse marine RV page structure
 */
export function getMarineRVPageData() {
  const { frontMatter, content } = getMarkdownContent('marine-rv');

  try {
    // Parse service categories from sections
    const categoryBlocks = content.split(/^## /m).slice(1);
    const categories: ServiceCategory[] = [];

    for (const block of categoryBlocks) {
      const lines = block.split('\n');
      const title = lines[0].trim();
      const brief = lines.find((l) => !l.startsWith('###') && !l.startsWith('-') && l.trim().length > 0)?.trim() || '';

      const subcategories: Array<{ title: string; items: string[] }> = [];
      const subcategoryBlocks = block.split(/^### /m).slice(1);

      for (const subBlock of subcategoryBlocks) {
        const subLines = subBlock.split('\n');
        const subTitle = subLines[0].trim();
        const items = parseList(subBlock);
        if (items.length > 0) {
          subcategories.push({ title: subTitle, items });
        }
      }

      if (subcategories.length > 0) {
        categories.push({
          title,
          brief,
          subcategories,
        });
      }
    }
    
    // Parse FAQs
    const faqs = parseFAQs(content);

    return {
      frontMatter,
      serviceCategories: categories,
      emergencyServices: [],
      faqs,
    };
  } catch (error) {
    console.error('[Markdown] Error parsing marine RV page:', error);
    return {
      frontMatter: { title: '', description: '' } as FrontMatter,
      serviceCategories: [],
      emergencyServices: [],
      faqs: [],
    };
  }
}

/**
 * Parse FAQ page structure
 */
export function getFAQPageData() {
  const { frontMatter, content } = getMarkdownContent('faq');
  const sections = extractSections(content);

  try {
    // Parse all FAQs from content
    const allFAQs = parseFAQs(content);

    // Try to categorize FAQs by sections
    const generalFAQs: FAQ[] = [];
    const servicesFAQs: FAQ[] = [];
    const pricingFAQs: FAQ[] = [];
    const bookingFAQs: FAQ[] = [];

    // If we can find sections, categorize; otherwise put all in general
    if (sections.length > 1) {
      sections.forEach(section => {
        const sectionFAQs = parseFAQs(section);
        const sectionLower = section.toLowerCase();
        
        if (sectionLower.includes('service') || sectionLower.includes('work')) {
          servicesFAQs.push(...sectionFAQs);
        } else if (sectionLower.includes('price') || sectionLower.includes('cost') || sectionLower.includes('payment')) {
          pricingFAQs.push(...sectionFAQs);
        } else if (sectionLower.includes('book') || sectionLower.includes('schedule') || sectionLower.includes('appointment')) {
          bookingFAQs.push(...sectionFAQs);
        } else {
          generalFAQs.push(...sectionFAQs);
        }
      });
    } else {
      // Put all FAQs in general if no clear sections
      generalFAQs.push(...allFAQs);
    }

    return {
      frontMatter,
      generalFAQs: generalFAQs.length > 0 ? generalFAQs : allFAQs,
      servicesFAQs,
      pricingFAQs,
      bookingFAQs,
    };
  } catch (error) {
    console.error('[Markdown] Error parsing FAQ page:', error);
    return {
      frontMatter,
      generalFAQs: parseFAQs(content),
      servicesFAQs: [],
      pricingFAQs: [],
      bookingFAQs: [],
    };
  }
}

/**
 * Clear content cache (useful for development)
 */
export function clearCache() {
  contentCache.clear();
}

// ==================== BLOG FUNCTIONS ====================

const blogDirectory = path.join(process.cwd(), 'content', 'blog');

/**
 * Get all blog article slugs
 */
export function getAllBlogSlugs(): string[] {
  try {
    if (!fs.existsSync(blogDirectory)) {
      console.warn('[Blog] Blog directory does not exist:', blogDirectory);
      return [];
    }

    const entries = fs.readdirSync(blogDirectory, { withFileTypes: true });
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);
  } catch (error) {
    console.error('[Blog] Error reading blog directory:', error);
    return [];
  }
}

/**
 * Get blog article metadata by slug
 */
export function getBlogArticleMeta(slug: string): BlogArticleMeta | null {
  try {
    const articlePath = path.join(blogDirectory, slug, 'index.md');
    if (!fs.existsSync(articlePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(articlePath, 'utf8');
    const { data } = matter(fileContents);

    // Calculate reading time from content
    const wordsPerMinute = 200;
    const wordCount = fileContents.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      author: data.author || 'Vadim Group',
      date: data.date || new Date().toISOString(),
      category: data.category || 'General',
      keywords: Array.isArray(data.keywords) ? data.keywords : [],
      readingTime: `${readingTime} min read`,
      coverImage: data.coverImage || `/assets/blog/${slug}/cover.webp`,
      heroImage: data.heroImage || `/assets/blog/${slug}/hero.webp`,
      ogImage: data.ogImage || `/assets/blog/${slug}/cover.webp`,
      featured: data.featured || false,
      status: data.status || 'published',
    };
  } catch (error) {
    console.error(`[Blog] Error reading article metadata for ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog articles metadata
 */
export function getAllBlogArticles(): BlogArticleMeta[] {
  const slugs = getAllBlogSlugs();
  const articles = slugs
    .map(slug => getBlogArticleMeta(slug))
    .filter((article): article is BlogArticleMeta => article !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return articles;
}

/**
 * Get full blog article with content
 */
export function getBlogArticle(slug: string): BlogArticle | null {
  try {
    const meta = getBlogArticleMeta(slug);
    if (!meta) {
      return null;
    }

    const articlePath = path.join(blogDirectory, slug, 'index.md');
    const fileContents = fs.readFileSync(articlePath, 'utf8');
    const { content } = matter(fileContents);

    return {
      ...meta,
      content,
    };
  } catch (error) {
    console.error(`[Blog] Error reading article ${slug}:`, error);
    return null;
  }
}
