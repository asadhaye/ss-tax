'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Article } from '../lib/types';

export default function Articles() {
  const [articles] = useState<Article[]>([
    { 
      id: 1, 
      title: "New FBR Tax Law Updates", 
      content: "Overview of recent FBR changes...", 
      date: "2025-05-20",
      category: "Tax Updates",
      image: "/images/articles/fbr-updates.jpg",
      readTime: "5 min read",
      author: "Sohail Siraj"
    },
    { 
      id: 2, 
      title: "Sohail Siraj's Tax Insights", 
      content: "Expert views on tax strategies...", 
      date: "2025-05-15",
      category: "Tax Strategy",
      image: "/images/articles/tax-insights.jpg",
      readTime: "7 min read",
      author: "Sohail Siraj"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = ['all', 'Tax Updates', 'Tax Strategy', 'Compliance', 'Business Tax'];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [articles, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="articles" className="py-16 bg-background print:bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Latest Articles & Blogs
          </h2>
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium
                  ${selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                  }
                  transition-colors duration-200
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedArticles.map(article => (
            <article 
              key={article.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{article.title}</h3>
                <p className="text-text-muted mb-2">{article.author}</p>
                <p className="text-text-secondary mb-4 line-clamp-2">{article.content}</p>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <a href={`/articles/${article.id}`} className="text-blue-600 hover:text-blue-800">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={`page-${pageNum}`}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === pageNum
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {pageNum}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}