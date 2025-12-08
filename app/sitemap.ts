import { MetadataRoute } from 'next'
import { getAllBlogArticles } from '@/lib/markdown'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  // Get all blog articles
  const blogArticles = getAllBlogArticles();
  
  // Generate sitemap entries for blog articles
  const blogEntries: MetadataRoute.Sitemap = blogArticles
    .filter(article => article.status === 'published')
    .map(article => ({
      url: `https://vadimgroup.com/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: 'https://vadimgroup.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://vadimgroup.com/home-repairs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://vadimgroup.com/marine-rv',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://vadimgroup.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://vadimgroup.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://vadimgroup.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://vadimgroup.com/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://vadimgroup.com/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://vadimgroup.com/terms-of-service',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [...staticPages, ...blogEntries];
}

