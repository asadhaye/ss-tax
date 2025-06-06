'use client';

import { useState, useEffect, useRef, FC } from 'react';
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

interface ServicesProps {
  previewCount?: number;
  showHeading?: boolean;
}

const Services: FC<ServicesProps> = ({ previewCount, showHeading = true }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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
    return selectedCategory === 'all' || service.category === selectedCategory;
  });

  const displayedServices = previewCount ? filteredServices.slice(0, previewCount) : filteredServices;

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
    <section id="services" className="py-20 bg-ceo dark:bg-cfo" aria-label="Services">
      <div className="container mx-auto px-4">
        {showHeading && (
          <div className="text-center mb-12 text-text-primary dark:text-text-light">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-fade-up">Our Services</h2>
            <p className="mb-8 max-w-2xl mx-auto text-text-secondary dark:text-text-light">
              Comprehensive tax and business advisory services tailored to your needs
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    `px-6 py-2 rounded-md text-sm font-medium border transition-colors duration-200
                    ${selectedCategory === category.id
                      ? 'bg-primary text-text-light border-primary shadow-sm'
                      : 'bg-background text-text-secondary border-gray-300 hover:bg-background-light hover:border-gray-400 shadow-sm'
                    }
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`
                  }
                  aria-pressed={selectedCategory === category.id}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        )}
        {displayedServices.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-text-secondary dark:text-text-light">No services found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedServices.map((service, index) => {
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
};

export default Services;

// ServiceCard component with scroll-in animation
function ServiceCard({ service, Icon, index }: { service: Service, Icon: any, index: number }) {
  return (
    <article
      className={`relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,41,55,0.18)] hover:shadow-[0_16px_48px_0_rgba(37,99,235,0.22)] hover:scale-[1.04] transition-all duration-300 overflow-hidden flex flex-col items-center text-center scroll-fade-up group p-8 min-h-[340px]
        dark:bg-[#23272f]/60 dark:backdrop-blur-2xl dark:border-white/20 dark:shadow-[0_8px_32px_0_rgba(16,185,129,0.22)]
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1/3 before:bg-white/40 before:rounded-t-[2rem] before:pointer-events-none
        dark:before:bg-white/10`}
      style={{ '--index': index } as React.CSSProperties}
    >
      {/* Dark mode: pronounced glassy gradient overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] z-0 hidden dark:block dark:bg-gradient-to-br dark:from-white/5 dark:via-primary-dark/20 dark:to-black/40" />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-primary-light dark:bg-primary-dark text-white rounded-full p-5 shadow-xl border-4 border-white/80 dark:border-background-dark group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-9 h-9" />
        </div>
      </div>
      <div className="pt-14 pb-4 px-2 flex-1 flex flex-col justify-between z-10">
        <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary-light drop-shadow-sm">{service.name}</h3>
        <p className="text-text-secondary dark:text-text-light text-base mb-2 opacity-80">{service.description}</p>
        <span className="inline-block bg-primary/10 dark:bg-primary-dark/30 text-primary dark:text-primary-light font-semibold px-3 py-1 rounded-full text-sm mb-2 mt-1 border border-primary/20 dark:border-primary-dark/30">
          {service.pricing}
        </span>
      </div>
      <div className="mt-auto z-10">
        <a href={service.link} className="inline-block bg-accent text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-accent-dark transition-colors duration-200">Learn More</a>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[2rem] border border-white/60 dark:border-white/20 shadow-inner" style={{boxShadow: 'inset 0 1.5px 12px 0 rgba(16,185,129,0.10)'}} />
    </article>
  );
}