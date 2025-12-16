/**
 * Typography System - Vadim Group
 * 
 * Unified typography system for consistent text styling across all pages
 * Optimized for mobile (< 640px), tablet (640px-1024px), and desktop (> 1024px)
 * 
 * Design Principles:
 * - Mobile-first approach with progressive enhancement
 * - Readable line heights for all text sizes
 * - Consistent visual hierarchy across pages
 * - Smooth transitions between breakpoints
 */

export const typography = {
  /**
   * H1 - Hero Titles
   * Mobile: 32px | Tablet: 42px | Desktop: 48px-60px | Large: 72px
   * Usage: Main hero sections on all pages
   */
  h1Hero: "text-[32px] sm:text-[42px] md:text-5xl lg:text-6xl xl:text-7xl leading-[1.17]",
  
  /**
   * H2 - Section Headers
   * Mobile: 30px | Tablet: 36px | Desktop: 48px
   * Usage: Main section titles (Services, About, Process, etc.)
   */
  h2Section: "text-3xl md:text-4xl lg:text-5xl leading-tight",
  
  /**
   * H3 - Card Titles & Subsection Headers
   * Mobile: 20px | Tablet: 24px | Desktop: 30px
   * Usage: Service cards, process steps, feature titles
   */
  h3Card: "text-xl md:text-2xl lg:text-3xl leading-tight",
  
  /**
   * H4 - Small Headers
   * Mobile: 18px | Desktop: 20px
   * Usage: Category labels, sub-features
   */
  h4Small: "text-lg md:text-xl leading-snug",
  
  /**
   * Eyebrow Labels (Tags)
   * Mobile: 14px | Desktop: 14px
   * Usage: Section tags (OUR SERVICES, WHY CHOOSE US, etc.)
   */
  eyebrow: "text-sm uppercase tracking-[0.08em] font-semibold md:font-bold",
  
  /**
   * Hero Subtitle
   * Mobile: 16px | Tablet: 18px | Desktop: 20px
   * Usage: Subtitle below hero title
   */
  heroSubtitle: "text-base sm:text-lg md:text-xl leading-[1.6]",
  
  /**
   * Section Description
   * Mobile: 18px | Desktop: 20px
   * Usage: Description text below section headers
   */
  sectionDescription: "text-lg md:text-xl leading-relaxed",
  
  /**
   * Body Large
   * Mobile: 16px | Desktop: 18px
   * Usage: Important paragraphs, quotes, intro text
   */
  bodyLarge: "text-base md:text-lg leading-relaxed",
  
  /**
   * Body Regular
   * Mobile: 15px | Desktop: 16px
   * Usage: Standard body text, card descriptions
   */
  body: "text-[15px] md:text-base leading-[1.65]",
  
  /**
   * Body Small
   * Mobile: 14px | Desktop: 15px
   * Usage: Service lists, feature details, secondary info
   */
  bodySmall: "text-sm md:text-[15px] leading-relaxed",
  
  /**
   * Caption / Small Text
   * Mobile: 13px | Desktop: 14px
   * Usage: Fine print, metadata, helper text
   */
  caption: "text-[13px] md:text-sm leading-normal",
  
  /**
   * CTA Button - Primary
   * Mobile: 16px | Tablet: 18px | Desktop: 20px
   * Usage: Primary call-to-action buttons
   */
  ctaPrimary: "text-base sm:text-lg md:text-xl",
  
  /**
   * CTA Button - Secondary
   * Mobile: 14px | Tablet: 16px | Desktop: 18px
   * Usage: Secondary buttons, outline buttons
   */
  ctaSecondary: "text-sm sm:text-base md:text-lg",
  
  /**
   * CTA Button - Small
   * Mobile: 14px | Desktop: 16px
   * Usage: Inline CTAs, small action buttons
   */
  ctaSmall: "text-sm md:text-base",
  
  /**
   * Process Card Title
   * Mobile: 18px | Desktop: 20px
   * Usage: Horizontal process cards (5-step cards)
   */
  processTitle: "text-lg md:text-xl leading-tight",
  
  /**
   * Process Card Description
   * Mobile: 14px | Desktop: 14px
   * Usage: Description in process cards
   */
  processDescription: "text-sm leading-relaxed",
};

/**
 * Combined Classes for Common Components
 */
export const componentTypography = {
  /**
   * Service Card
   */
  serviceCard: {
    title: typography.h3Card,
    description: typography.body,
    categoryLabel: typography.h4Small,
    listItem: typography.bodySmall,
  },
  
  /**
   * Process Card (Horizontal)
   */
  processCard: {
    number: "text-2xl", // Number badge
    title: typography.processTitle,
    description: typography.processDescription,
  },
  
  /**
   * Testimonial Card
   */
  testimonialCard: {
    quote: typography.body,
    author: typography.bodySmall,
    position: typography.caption,
  },
  
  /**
   * FAQ Accordion
   */
  faqAccordion: {
    question: "text-[17px] md:text-lg leading-snug",
    answer: typography.body,
  },
  
  /**
   * Blog Article
   */
  blogArticle: {
    title: typography.h1Hero,
    description: typography.sectionDescription,
    sectionHeader: typography.h2Section,
    subsectionHeader: typography.h3Card,
    body: typography.body,
    meta: typography.caption,
  },
};

/**
 * Mobile Optimization Utilities
 * Specific adjustments for small screens
 */
export const mobileOptimized = {
  // Tighter spacing for mobile
  heroTitle: `${typography.h1Hero} px-2`,
  heroSubtitle: `${typography.heroSubtitle} px-4`,
  sectionTitle: `${typography.h2Section} px-2`,
  
  // Full-width buttons on mobile
  ctaPrimaryButton: `${typography.ctaPrimary} w-full sm:w-auto`,
  ctaSecondaryButton: `${typography.ctaSecondary} w-full sm:w-auto`,
};

/**
 * Line Height Scale
 * Consistent line heights for better readability
 */
export const lineHeights = {
  tight: "leading-[1.17]",      // 1.17 - Large headings
  snug: "leading-tight",         // 1.25 - Headings
  normal: "leading-normal",      // 1.5  - Short text
  relaxed: "leading-relaxed",    // 1.625 - Body text
  comfortable: "leading-[1.65]", // 1.65 - Long-form content
  loose: "leading-[1.7]",        // 1.7  - Dense paragraphs
};

/**
 * Responsive Text Sizing Guide
 * 
 * MOBILE (< 640px):
 * - H1: 32px
 * - H2: 30px
 * - H3: 20px
 * - Body: 15-16px
 * - Small: 13-14px
 * 
 * TABLET (640px - 1024px):
 * - H1: 42-48px
 * - H2: 36px
 * - H3: 24px
 * - Body: 16-18px
 * - Small: 14-15px
 * 
 * DESKTOP (> 1024px):
 * - H1: 60-72px
 * - H2: 48px
 * - H3: 30px
 * - Body: 16-18px
 * - Small: 14-15px
 */

