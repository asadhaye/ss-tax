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
      image: "/fbr-updates.png",
      readTime: "5 min read",
      author: "Sohail Siraj"
    },
    { 
      id: 2, 
      title: "Sohail Siraj's Tax Insights", 
      content: "Expert views on tax strategies...", 
      date: "2025-05-15",
      category: "Tax Strategy",
      image: "/tax-insights.png",
      readTime: "7 min read",
      author: "Sohail Siraj"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [sortBy, setSortBy] = useState<'dateDesc' | 'dateAsc' | 'titleAsc'>('dateDesc');

  const categories = ['all', 'Tax Updates', 'Tax Strategy', 'Compliance', 'Business Tax'];

  const filteredAndSortedArticles = useMemo(() => {
    let filtered = articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === 'dateDesc') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === 'dateAsc') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === 'titleAsc') {
        return a.title.localeCompare(b.title);
      }
      return 0; // Default no sorting
    });

    return filtered;
  }, [articles, searchQuery, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedArticles.length / itemsPerPage);
  const paginatedArticles = filteredAndSortedArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="articles" className="py-20 hero-gradient-bg print:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 text-text-light">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Articles & Blogs
          </h2>
          <div className="max-w-2xl mx-auto mb-6">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
              aria-label="Search articles"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-2 rounded-md text-sm font-medium border transition-colors duration-200
                  ${selectedCategory === category
                    ? 'bg-primary text-text-light border-primary shadow-sm'
                    : 'bg-background text-text-secondary border-gray-300 hover:bg-background-light hover:border-gray-400 shadow-sm'
                  }
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                `}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Sort By */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-text-secondary">
            <span className="font-medium text-text-light">Sort By:</span>
            <button
              onClick={() => setSortBy('dateDesc')}
              className={`
                text-sm hover:text-primary transition-colors duration-200
                ${sortBy === 'dateDesc' ? 'font-semibold text-primary' : ''}
              `}
            >
              Newest
            </button>
            <button
              onClick={() => setSortBy('dateAsc')}
              className={`
                text-sm hover:text-primary transition-colors duration-200
                ${sortBy === 'dateAsc' ? 'font-semibold text-primary' : ''}
              `}
            >
              Oldest
            </button>
            <button
              onClick={() => setSortBy('titleAsc')}
              className={`
                text-sm hover:text-primary transition-colors duration-200
                ${sortBy === 'titleAsc' ? 'font-semibold text-primary' : ''}
              `}
            >
              Title (A-Z)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedArticles.map(article => (
            <article
              key={article.id}
              className="bg-background rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
                 <span className="absolute top-3 left-3 bg-primary text-text-light text-xs px-3 py-1 rounded-full shadow">
                   {article.category}
                 </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-text-primary mb-2">{article.title}</h3>
                <p className="text-text-secondary mb-2">{article.author}</p>
                <p className="text-text-secondary mb-4 line-clamp-2 flex-1">{article.content}</p>
                <div className="flex items-center justify-between mt-auto">
                  <time className="text-sm text-gray-500">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <a href={`/articles/${article.id}`} className="text-primary hover:text-primary-dark transition-colors duration-200">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8 text-text-secondary">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md bg-background text-text-secondary hover:bg-background-light disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={`page-${pageNum}`}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-4 py-2 rounded-md border transition-colors duration-200 ${
                  currentPage === pageNum
                    ? 'bg-primary text-text-light border-primary'
                    : 'bg-background text-text-secondary border-gray-300 hover:bg-background-light hover:border-gray-400'
                }`}
              >
                {pageNum}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md bg-background text-text-secondary hover:bg-background-light disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}