import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sohailsiraj.esq';
  
  // Static routes
  const routes = [
    '', // Home page
    '/services',
    '/about',
    '/articles',
    '/contact',
    '/login',
    '/signup',
    '/services/company-registration',
    '/services/tax-filing',
    '/services/tax-appeals',
    '/services/legal-agreements',
    '/services/tax-planning',
    '/services/business-advisory',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 
             route.startsWith('/services') ? 0.9 : 0.8,
  }));

  // Dynamic routes for articles
  const articles = [
    {
      slug: 'understanding-pakistan-latest-tax-reforms',
      lastModified: new Date('2024-03-15'),
    },
    {
      slug: 'tax-planning-strategies-small-businesses',
      lastModified: new Date('2024-03-10'),
    },
    {
      slug: 'international-tax-considerations-pakistani-companies',
      lastModified: new Date('2024-03-05'),
    },
    {
      slug: 'guide-to-company-registration-in-pakistan',
      lastModified: new Date('2024-03-20'),
    },
    {
      slug: 'tax-compliance-checklist-2024',
      lastModified: new Date('2024-03-18'),
    },
    {
      slug: 'understanding-tax-appeals-process',
      lastModified: new Date('2024-03-12'),
    },
  ].map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: article.lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...articles];
} 