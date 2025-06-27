'use client';

import { useEffect, useState } from 'react';
import { getServices } from '../lib/data';
import { Service } from '../lib/interfaces';
import ErrorMessage from './ErrorMessage';
import PillCard from './PillCard';

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'tax-planning', label: 'Tax Planning' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'business-advisory', label: 'Business Advisory' },
  { id: 'international', label: 'International Tax' },
];

interface ServicesProps {
  readonly previewCount?: number;
  readonly showHeading?: boolean;
}

export default function Services({ previewCount, showHeading = true }: ServicesProps) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const filteredServices = services.filter((service: Service) =>
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const displayedServices = previewCount
    ? filteredServices.slice(0, previewCount)
    : filteredServices;

  if (loading) {
    return (
      <section id="services" className="py-20 bg-ceo dark:bg-cfo hero-gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map(() => (
  <div
    key={crypto.randomUUID()}
    className="bg-background shadow-lg rounded-full animate-pulse h-80"
  />
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
    <section id="services" className="py-20 bg-ceo dark:bg-cfo">
      <div className="container mx-auto px-4">
        {showHeading && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary dark:text-text-light">Our Services</h2>
            <p className="mb-8 max-w-2xl mx-auto text-text-secondary dark:text-text-light">
              Comprehensive tax and business advisory services tailored to your needs
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium border transition-colors duration-200
                    ${selectedCategory === category.id
                      ? 'bg-primary text-text-light border-primary shadow-sm'
                      : 'bg-background text-text-secondary border-gray-300 hover:bg-background-light hover:border-gray-400 shadow-sm'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col items-center gap-16">
          {displayedServices.map((service, index) => (
            <PillCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
