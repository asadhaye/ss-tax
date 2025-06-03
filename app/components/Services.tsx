'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getServices } from '../lib/data';
import { Service } from '../lib/interfaces';
import styles from '../styles/animations.module.css';
import ErrorMessage from './ErrorMessage';

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'tax-planning', label: 'Tax Planning' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'business-advisory', label: 'Business Advisory' },
    { id: 'international', label: 'International Tax' }
  ] as const;

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getServices();
      setServices(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load services';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <section id="services" className="py-20 hero-gradient-bg" aria-label="Services">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, i) => (
              <output 
                key={`loading-${i}`}
                className="bg-background shadow-lg rounded-lg overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-200" />
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              </output>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchServices} />;
  }

  return (
    <section id="services" className="py-20 hero-gradient-bg" aria-label="Services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 text-text-light">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${styles.fadeIn}`}>
            Our Services
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Comprehensive tax and business advisory services tailored to your needs
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                aria-label="Search services"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-6 py-2 rounded-full text-sm font-medium border transition-colors duration-200
                  ${selectedCategory === category.id
                    ? 'bg-primary text-text-light border-primary shadow-md'
                    : 'bg-background text-text-secondary border-gray-300 hover:bg-background-light hover:border-gray-400'
                  }
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                `}
                aria-pressed={selectedCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {filteredServices.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-text-secondary">No services found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredServices.map((service, index) => (
              <article
                key={service.id}
                className={`
                  bg-background border border-background-light rounded-2xl shadow-xl
                  hover:shadow-2xl hover:scale-105 transition-all duration-300
                  overflow-hidden flex flex-col
                  ${styles.fadeIn}
                  animate-in
                `}
                style={{ '--index': index } as React.CSSProperties}
              >
                <div className="relative h-48">
                  <Image
                    src={service.img}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-text-light text-xs px-3 py-1 rounded-full shadow">
                     {service.category.replace('-', ' ')}
                   </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-text-primary">{service.name}</h3>
                  <p className="text-text-secondary mb-4 line-clamp-2 flex-1">{service.description}</p>
                  <a
                    href={service.link}
                    className="
                      inline-block
                      mt-auto
                      px-5
                      py-2
                      text-primary
                      hover:text-primary-dark
                      hover:bg-blue-50
                      rounded-md
                      transition-colors
                      duration-200
                      focus:outline-none
                      focus:ring-2
                      focus:ring-primary
                      focus:ring-offset-2
                    "
                    aria-label={`Learn more about ${service.name}`}
                  >
                    View Details
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}