'use client';

import { useState, useEffect } from 'react';
import { getServices, Service } from '../lib/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/animations.module.css';

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await getServices();
        setServices(data);
        setLoading(false);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load services';
        setError(errorMessage);
        setLoading(false);
        console.error('Error loading services:', err);
      }
    }

    fetchServices();
  }, []);

  useScrollAnimation(`.${styles.fadeIn}`);

  if (loading) return <div>Loading services...</div>;
  if (error) return <div>Error: {error}</div>;

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
              className={`bg-white shadow-lg rounded-lg overflow-hidden ${styles.fadeIn} ${styles.stagger}`}
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
                <a href={service.link} className="text-blue-600 hover:underline">
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