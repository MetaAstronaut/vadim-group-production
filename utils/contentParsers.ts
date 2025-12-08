import yaml from 'js-yaml';

// Import markdown files directly
import headerContent from '@/content/partials/header.md';
import footerContent from '@/content/partials/footer.md';
import blogContent from '@/content/pages/blog.md';

// Import blog functions
import { getAllBlogArticles, type BlogArticleMeta } from '@/lib/markdown';

// --- HELPER FUNCTIONS ---

function extractSection(content: string, marker: string): string {
  const parts = content.split('---');
  const section = parts.find(p => p.includes(marker));
  return section ? section.trim() : '';
}

function parseList(content: string): string[] {
  return content.match(/^- (.*)/gm)?.map(line => line.replace(/^- /, '').trim()) || [];
}

function findLine(text: string, start: string) {
  return text.split('\n').find(l => l.startsWith(start))?.replace(start, '').trim() || '';
}

function findParagraph(text: string) {
  return text.split('\n').find(l => !l.startsWith('#') && !l.startsWith('-') && l.trim().length > 0 && !l.startsWith('>'))?.trim() || '';
}

// --- HEADER TYPES & PARSER ---

export interface HeaderData {
  brand: {
    name: string;
    logoAlt: string;
    href: string;
  };
  nav: Array<{
    name: string;
    href: string;
  }>;
  cta: {
    label: string;
    subLabel: string;
    href: string;
    type: string;
    sticky: boolean;
    showOnScroll: boolean;
    showMessengerIcon: boolean;
  };
  mobileMenu: {
    enabled: boolean;
    hamburgerIcon: boolean;
    closeIcon: boolean;
    overlay: boolean;
  };
}

export function getHeaderData(): HeaderData {
  const parts = headerContent.split(/^## \[(.*?)\]/m);
  const data: any = {};
  
  for (let i = 1; i < parts.length; i += 2) {
    const key = parts[i];
    const rawYaml = parts[i+1].replace(/---/g, '');
    try {
        data[key] = yaml.load(rawYaml);
    } catch (e) {
        console.error(`Failed to parse header section ${key}`, e);
    }
  }
  
  return {
    brand: {
        name: data.brand?.name || "The Vadim Group",
        logoAlt: data.brand?.['logo-alt'] || "Logo",
        href: data.brand?.href || "/",
    },
    nav: data.nav?.items || [],
    cta: {
        label: data.cta?.label || "Contact",
        subLabel: data.cta?.subLabel || "",
        href: data.cta?.href || "#",
        type: data.cta?.type || "button",
        sticky: data.cta?.sticky ?? true,
        showOnScroll: data.cta?.['show-on-scroll'] ?? true,
        showMessengerIcon: data.cta?.['show-messenger-icon'] ?? false,
    },
    mobileMenu: {
        enabled: data['mobile-menu']?.enabled ?? true,
        hamburgerIcon: data['mobile-menu']?.['hamburger-icon'] ?? true,
        closeIcon: data['mobile-menu']?.['close-icon'] ?? true,
        overlay: data['mobile-menu']?.overlay ?? true,
    }
  };
}

// --- FOOTER TYPES & PARSER ---

export interface FooterData {
  brand: {
    logoAlt: string;
    tagline: string;
  };
  quickLinks: {
    title: string;
    items: Array<{ name: string; href: string }>;
  };
  contact: {
    title: string;
    messengerLabel: string;
    messengerHref: string;
    emailLabel: string;
    emailHref: string;
    serviceArea: string[];
    hours: string;
  };
  social: {
    title: string;
    items: Array<{ name: string; href: string; icon: string }>;
  };
  legal: {
    title: string;
    items: Array<{ name: string; href: string }>;
    copyrightTemplate: string;
  };
}

export function getFooterData(): FooterData {
  const parts = footerContent.split(/^## \[(.*?)\]/m);
  const data: any = {};
  
  for (let i = 1; i < parts.length; i += 2) {
    const key = parts[i];
    const rawYaml = parts[i+1].replace(/---/g, '');
    try {
        data[key] = yaml.load(rawYaml);
    } catch (e) {
        console.error(`Failed to parse footer section ${key}`, e);
    }
  }

  return {
    brand: {
      logoAlt: data.brand?.['logo-alt'] || "The Vadim Group",
      tagline: data.brand?.tagline || "",
    },
    quickLinks: {
      title: data['quick-links']?.title || "Quick Links",
      items: data['quick-links']?.items || [],
    },
    contact: {
      title: data.contact?.title || "Contact",
      messengerLabel: data.contact?.['messenger-label'] || "Facebook Messenger",
      messengerHref: data.contact?.['messenger-href'] || "https://m.me/vadimgroup",
      emailLabel: data.contact?.['email-label'] || "Email",
      emailHref: data.contact?.['email-href'] || "#",
      serviceArea: data.contact?.['service-area'] || [],
      hours: data.contact?.hours || "",
    },
    social: {
      title: data.social?.title || "Follow Us",
      items: data.social?.items || [],
    },
    legal: {
      title: data.legal?.title || "Legal",
      items: data.legal?.items || [],
      copyrightTemplate: data.legal?.['copyright-template'] || "© The Vadim Group",
    },
  };
}

// --- BLOG PAGE PARSER ---

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  status: string;
  category: string;
  author?: string;
  date?: string;
  coverImage?: string;
  featured?: boolean;
}

export interface BlogPageData {
  seo: { 
    title: string; 
    description: string; 
    keywords: string; 
    ogTitle: string; 
    ogDescription: string; 
    ogImage: string; 
    canonical: string;
  };
  hero: { 
    title: string; 
    subtitle: string; 
    description: string; 
  };
  comingSoonTitle: string;
  comingSoonDescription: string;
  articles: BlogArticle[];
  contactEmail: string;
  contactInfo: string;
  subscribeTitle: string;
  subscribeInfo: string;
}

export function getBlogPageData(): BlogPageData {
  const parts = blogContent.split(/^---$/m);
  const attributes = yaml.load(parts[1]) as any;
  const body = parts.slice(2).join('---');
  
  // Parse main sections
  const lines = body.split('\n');
  
  // Hero section
  const heroTitle = lines.find(l => l.startsWith('# '))?.replace('# ', '').trim() || '';
  const heroSubtitle = lines.find(l => l.startsWith('## Expert'))?.replace('## ', '').trim() || '';
  const heroDescription = lines.find(l => l.startsWith('This blog'))?.trim() || '';
  
  // Coming Soon section
  const comingSoonTitle = lines.find(l => l.startsWith('## Coming Soon'))?.replace('## ', '').trim() || '';
  const comingSoonDescription = lines.find(l => l.includes('preparing comprehensive'))?.trim() || '';
  
  // Get real blog articles from markdown files
  const blogArticles = getAllBlogArticles();
  
  // Convert to BlogArticle format
  const articles: BlogArticle[] = blogArticles.map((article: BlogArticleMeta) => ({
    slug: article.slug,
    title: article.title,
    description: article.description,
    readingTime: article.readingTime || '5 min read',
    status: article.status || 'published',
    category: article.category,
    author: article.author,
    date: article.date,
    coverImage: article.coverImage,
    featured: article.featured,
  }));
  
  // Parse coming soon articles from markdown (if any)
  const comingSoonArticles: BlogArticle[] = [];
  let currentCategory = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Detect category header (### Category Name)
    if (line.startsWith('### ') && !line.includes('Have a Specific') && !line.includes('Subscribe')) {
      currentCategory = line.replace('### ', '').trim();
      continue;
    }
    
    // Detect article title (starts with **)
    if (line.startsWith('**') && line.endsWith('**') && currentCategory) {
      const title = line.replace(/\*\*/g, '').trim();
      
      // Get description (next line)
      const description = lines[i + 1]?.trim() || '';
      
      // Get reading time (line with "Estimated reading time:")
      let readingTime = '';
      let status = 'Coming Soon';
      
      for (let j = i + 1; j < i + 5 && j < lines.length; j++) {
        if (lines[j].includes('Estimated reading time:')) {
          readingTime = lines[j].replace(/\*Estimated reading time:\s*/i, '').replace('*', '').trim();
        }
        if (lines[j].includes('Status:')) {
          status = lines[j].replace(/Status:\s*/i, '').replace(/\*/g, '').trim();
        }
      }
      
      comingSoonArticles.push({
        slug: '',
        title,
        description,
        readingTime,
        status,
        category: currentCategory,
      });
    }
  }
  
  // Combine published and coming soon articles
  const allArticles = [...articles, ...comingSoonArticles];
  
  // Contact section
  const contactEmail = 'info@thevadimgroup.com';
  const contactInfo = lines.find(l => l.includes('typically respond'))?.trim() || '';
  
  // Subscribe section
  const subscribeTitle = lines.find(l => l.startsWith('## Subscribe'))?.replace('## ', '').trim() || '';
  const subscribeInfo = lines.find(l => l.includes('Want to be notified'))?.trim() || '';
  
  return {
    seo: {
      title: attributes.title || '',
      description: attributes.description || '',
      keywords: attributes.keywords || '',
      ogTitle: attributes['og:title'] || '',
      ogDescription: attributes['og:description'] || '',
      ogImage: attributes['og:image'] || '',
      canonical: attributes.canonical || '',
    },
    hero: { 
      title: heroTitle, 
      subtitle: heroSubtitle, 
      description: heroDescription 
    },
    comingSoonTitle,
    comingSoonDescription,
    articles: allArticles,
    contactEmail,
    contactInfo,
    subscribeTitle,
    subscribeInfo,
  };
}

