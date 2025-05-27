'use client';

import { useState, useEffect } from 'react';
import { getServices } from '../lib/data';
import { Service } from '../lib/interfaces';
import styles from '../styles/animations.module.css';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) return <LoadingSpinner size="large" />;
  if (error) return <ErrorMessage message={error} onRetry={fetchServices} />;

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className={`text-3xl font-bold mb-8 ${styles.fadeIn}`}>
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`
                bg-white 
                shadow-lg 
                rounded-lg 
                overflow-hidden 
                ${styles.fadeIn}
                animate-in
                hover:shadow-xl
                transition-shadow
                duration-300
              `}
              style={{ '--index': index } as React.CSSProperties}
            >
              <img 
                src={service.img} 
                alt={service.name} 
                className="w-full h-48 object-cover" 
                loading="lazy" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <a 
                  href={service.link} 
                  className="
                    inline-block
                    px-4 
                    py-2 
                    text-blue-600 
                    hover:text-blue-800 
                    hover:bg-blue-50 
                    rounded-md 
                    transition-colors 
                    duration-200
                  "
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}