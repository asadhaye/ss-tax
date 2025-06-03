import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Assuming Article type exists

interface ArticleDetailProps {
  params: { slug: string };
}

// In a real app with dynamic data, you would fetch and generate static params here
// export async function generateStaticParams() {
//   const articles = await getArticles(); // Assuming getArticles fetches all articles
//   return articles.map((article) => ({
//     slug: article.id.toString(), // Or use a title slug if available
//   }));
// }

export default async function ArticleDetail({ params }: ArticleDetailProps) {
  // For now, we use mock data client-side in the Articles component.
  // In a real application, you would fetch data server-side here.
  // We will simulate fetching by looking up in the mock data for now.
  const mockArticles = [
    {
      id: 1,
      title: "New FBR Tax Law Updates",
      content: "Overview of recent FBR changes and their impact on taxpayers. This article provides a summary of the key updates and what you need to know to stay compliant. It covers changes related to filing deadlines, new tax rates, and important regulatory announcements from the Federal Board of Revenue.",
      date: "2025-05-20",
      category: "Tax Updates",
      image: "/fbr-updates.png",
      readTime: "5 min read",
      author: "Sohail Siraj"
    },
    {
      id: 2,
      title: "Sohail Siraj's Tax Insights",
      content: "Expert views and analysis on effective tax strategies for individuals and businesses in the current economic climate. This article delves into various tax planning techniques, highlighting legal ways to minimize your tax liability and optimize your financial position. It offers practical tips and considerations for navigating complex tax scenarios.",
      date: "2025-05-15",
      category: "Tax Strategy",
      image: "/tax-insights.png",
      readTime: "7 min read",
      author: "Sohail Siraj"
    }
    // Add more mock articles as they are added to Articles.tsx
  ];

  // Simulate fetching a single article by finding it in the mock data
  const article = mockArticles.find(a => a.id.toString() === params.slug);

  if (!article) {
    notFound(); // Show 404 page if article not found
  }

  return (
    <div className="hero-gradient-bg py-20">
      <div className="container mx-auto px-4 text-text-light">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex items-center space-x-2">
            <li>
              <Link href="/" className="text-text-light hover:underline">
                Home
              </Link>
            </li>
            <li>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 79.225c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li>
              <Link href="/#articles" className="text-text-light hover:underline">
                Articles
              </Link>
            </li>
            <li>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 79.225c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li>
              <span className="text-gray-300" aria-current="page">{article.title}</span>
            </li>
          </ol>
        </nav>

        <div className="max-w-4xl mx-auto bg-background p-8 md:p-12 rounded-lg shadow-xl text-text-secondary">
          {/* Article Image */}
          {article.image && (
            <div className="relative w-full h-64 md:h-80 mb-8 rounded-md overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Details */}
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{article.title}</h1>
          <div className="text-sm text-text-muted mb-6 flex items-center space-x-4">
            <span>By {article.author}</span>
            <span>•</span>
            <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          {/* Article Content */}
          <div className="prose max-w-none leading-relaxed mb-8">
            <p>{article.content}</p>
            {/* Add more detailed content here */}
          </div>

          {/* Back to Articles Link */}
          <div className="mt-8">
            <Link href="/#articles" className="text-primary hover:underline">
              ← Back to Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 