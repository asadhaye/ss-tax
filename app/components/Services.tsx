'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { getServices } from '../lib/data';
import { Service } from '../lib/interfaces';
import styles from '../styles/animations.module.css';
import ErrorMessage from './ErrorMessage';
import { BriefcaseIcon, DocumentTextIcon, ScaleIcon, BuildingOffice2Icon, CalculatorIcon, CurrencyDollarIcon, ShieldCheckIcon, ChartBarIcon, UserGroupIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

// Icon mapping based on service category or name
const iconMap: Record<string, any> = {
  'business-setup': BuildingOffice2Icon,
  'tax-compliance': ClipboardDocumentCheckIcon,
  'tax-litigation': ScaleIcon,
  'legal-services': DocumentTextIcon,
  'tax-planning': CalculatorIcon,
  'business-advisory': ChartBarIcon,
  'compliance': ShieldCheckIcon,
  'international': UserGroupIcon,
  'default': BriefcaseIcon,
};

function getServiceIcon(service: Service) {
  // Try category first, fallback to default
  return iconMap[service.category] || iconMap['default'];
}

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
    <section id="services" className="py-20 bg-gradient-to-br from-orange-400 via-yellow-300 to-pink-500" aria-label="Services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 text-white">
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
                  px-6 py-2 rounded-md text-sm font-medium border transition-colors duration-200
                  ${selectedCategory === category.id
                    ? 'bg-primary text-text-light border-primary shadow-sm'
                    : 'bg-background text-text-secondary border-gray-300 hover:bg-background-light hover:border-gray-400 shadow-sm'
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
            <p className="text-white/90">No services found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredServices.map((service, index) => {
              const Icon = getServiceIcon(service);
              return (
                <ServiceCard key={service.id} service={service} Icon={Icon} index={index} />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

// ServiceCard component with scroll-in animation
function ServiceCard({ service, Icon, index }: { service: Service, Icon: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`
        bg-white/30 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl
        hover:shadow-[0_8px_32px_0_rgba(255,140,0,0.37)] hover:scale-105 hover:border-orange-400/60
        transition-all duration-300 overflow-hidden flex flex-col items-center text-center
        ${visible ? 'animate-fadeUp' : 'opacity-0 translate-y-8'}
      `}
      style={{ '--index': index } as React.CSSProperties}
    >
      <div className="relative w-full h-40 flex items-center justify-center bg-gradient-to-tr from-orange-300/40 via-yellow-200/30 to-pink-300/40">
        {service.img && (
          <Image
            src={service.img}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover rounded-t-2xl opacity-70"
            loading="lazy"
          />
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500/90 text-white text-xs px-3 py-1 rounded-full shadow">
            {service.category.replace('-', ' ')}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-12 h-12 text-white drop-shadow-lg" />
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col items-center">
        <h3 className="text-xl font-bold mb-2 text-white drop-shadow-md">{service.name}</h3>
        <p className="text-white/90 mb-4 line-clamp-2 flex-1">{service.description}</p>
        <a
          href={service.link}
          className="inline-block mt-auto bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 text-white px-8 py-3 rounded-md font-semibold shadow-lg hover:from-orange-600 hover:to-pink-600 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          aria-label={`Learn more about ${service.name}`}
        >
          View Details
        </a>
      </div>
    </article>
  );
}