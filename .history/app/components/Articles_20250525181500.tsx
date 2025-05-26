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
    <section id="articles" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Articles & Blogs</h2>
        <div className="space-y-6">
          {articles.map(article => (
            <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="text-gray-600">{article.date}</p>
              <p className="mt-2">{article.content}</p>
              <a href="/articles" className="text-blue-600 hover:underline">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}