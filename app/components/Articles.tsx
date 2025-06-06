'use client';

import { useState, useMemo, useRef, useEffect, FC } from 'react';
import Image from 'next/image';
import { Article } from '../lib/types';

interface ArticlesProps {
  previewCount?: number;
  showHeading?: boolean;
}

const Articles: FC<ArticlesProps> = ({ previewCount, showHeading = true }) => {
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

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [sortBy, setSortBy] = useState<'dateDesc' | 'dateAsc' | 'titleAsc'>('dateDesc');

  const categories = ['all', 'Tax Updates', 'Tax Strategy', 'Compliance', 'Business Tax'];

  const filteredAndSortedArticles = useMemo(() => {
    let filtered = articles.filter(article => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      return matchesCategory;
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
  }, [articles, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedArticles.length / itemsPerPage);
  const paginatedArticles = filteredAndSortedArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const displayedArticles = previewCount ? filteredAndSortedArticles.slice(0, previewCount) : paginatedArticles;

  return (
    <section id="articles" className="py-20 bg-ceo dark:bg-cfo print:bg-background">
      <div className="container mx-auto px-4">
        {showHeading && (
          <div className="text-center mb-12 text-text-primary dark:text-text-light">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-fade-up">
              Latest Articles & Blogs
            </h2>
            {/* Search, Filter, and Sort Controls */}
            <div className="bg-background p-6 rounded-lg shadow-xl max-w-3xl mx-auto mb-12 border border-background-light text-text-secondary">
              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-left text-text-primary text-sm font-medium mb-2">Filter by Category:</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`
                        px-4 py-2 rounded-full text-xs font-medium border transition-colors duration-200
                        ${selectedCategory === category
                          ? 'bg-primary text-text-light border-primary shadow-sm'
                          : 'bg-background-light text-text-secondary border-gray-200 hover:bg-background hover:border-gray-300 shadow-sm'
                        }
                        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                      `}
                      aria-pressed={selectedCategory === category}
                    >
                      {category === 'all' ? 'All Categories' : category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Sort By */}
              <div>
                <label className="block text-left text-text-primary text-sm font-medium mb-2">Sort By:</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSortBy('dateDesc')}
                    className={`
                      px-4 py-2 rounded-full text-xs font-medium border transition-colors duration-200
                      ${sortBy === 'dateDesc' ? 'bg-primary text-text-light border-primary shadow-sm' : 'bg-background-light text-text-secondary border-gray-200 hover:bg-background hover:border-gray-300 shadow-sm'}
                      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                    `}
                  >
                    Newest
                  </button>
                  <button
                    onClick={() => setSortBy('dateAsc')}
                    className={`
                      px-4 py-2 rounded-full text-xs font-medium border transition-colors duration-200
                      ${sortBy === 'dateAsc' ? 'bg-primary text-text-light border-primary shadow-sm' : 'bg-background-light text-text-secondary border-gray-200 hover:bg-background hover:border-gray-300 shadow-sm'}
                      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                    `}
                  >
                    Oldest
                  </button>
                  <button
                    onClick={() => setSortBy('titleAsc')}
                    className={`
                      px-4 py-2 rounded-full text-xs font-medium border transition-colors duration-200
                      ${sortBy === 'titleAsc' ? 'bg-primary text-text-light border-primary shadow-sm' : 'bg-background-light text-text-secondary border-gray-200 hover:bg-background hover:border-gray-300 shadow-sm'}
                      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                    `}
                  >
                    Title (A-Z)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
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
};

export default Articles;

function ArticleCard({ article, index }: { article: Article, index: number }) {
  return (
    <article
      className={`bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(31,41,55,0.12)] dark:shadow-[0_8px_32px_0_rgba(16,185,129,0.12)] hover:shadow-[0_16px_48px_0_rgba(37,99,235,0.18)] hover:scale-105 transition-all duration-300 flex flex-col scroll-fade-up p-6 min-h-[320px]`}
      style={{ '--index': index } as React.CSSProperties}
    >
      <div className="flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-semibold mb-2 text-primary dark:text-white drop-shadow-sm">{article.title}</h3>
        <p className="text-text-secondary dark:text-gray-300 text-base mb-4 opacity-80">{article.content}</p>
      </div>
      <div className="mt-auto">
        <a href="#" className="inline-block bg-accent text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-accent-dark transition-colors duration-200">Read More</a>
      </div>
    </article>
  );
}
