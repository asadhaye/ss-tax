'use client';

import { useState } from 'react';
import { Article } from '../lib/types';

export default function Articles() {
  const [articles] = useState<Article[]>([
    { 
      id: 1, 
      title: "New FBR Tax Law Updates", 
      content: "Overview of recent FBR changes...", 
      date: "2025-05-20" 
    },
    { 
      id: 2, 
      title: "Sohail Siraj's Tax Insights", 
      content: "Expert views on tax strategies...", 
      date: "2025-05-15" 
    }
  ]);

  return (
    <section id="articles" className="py-16 bg-background print:bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-text-primary">
          Latest Articles & Blogs
        </h2>
        <div className="space-y-6">
          {articles.map(article => (
            <div 
              key={article.id} 
              className={`
                bg-background 
                p-6 
                rounded-lg 
                shadow-md 
                print:border 
                print:border-gray-200
                fadeIn
              `}
            >
              <h3 className="text-xl font-semibold text-text-primary">{article.title}</h3>
              <p className="text-text-muted">{article.date}</p>
              <p className="mt-2 text-text-secondary">{article.content}</p>
              <a href="#articles" className="text-primary hover:text-primary-dark transition-colors duration-200">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}