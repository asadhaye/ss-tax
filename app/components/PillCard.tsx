'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Service } from '../lib/interfaces';

interface PillCardProps {
  readonly service: Service;
  readonly index: number;
}

export default function PillCard({ service, index }: PillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const getImageSrc = (src: string): string => {
    if (src.includes('dynamicmedia') && !src.includes('quality=')) {
      const separator = src.includes('?') ? '&' : '?';
      return `${src}${separator}quality=82`;
    }
    return src;
  };

  const pillDirection = index % 2 === 0 ? 'left' : 'right';

  return (
    <div
      ref={cardRef}
      className={`teaser sstax-horizontal-pill-${pillDirection} ${inViewport ? 'in-viewport' : ''}`}
      aria-labelledby={`service-${service.id}`}
      data-cmp-data-layer={JSON.stringify({
        [`teaser-${service.id}`]: {
          '@type': 'sstax/components/teaser',
          'dc:title': service.name,
          'dc:description': service.description,
        },
      })}
    >
      <div id={`teaser-${service.id}`} className={`sstax-teaser`}>
        <div className="sstax-teaser__image">
          {service.image ? (
            <Image
              src={getImageSrc(service.image)}
              alt={service.name}
              width={240}
              height={240}
              className="object-cover rounded-full w-full h-full"
            />
          ) : (
            <div className="w-[120px] h-[120px] rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
              No Image
            </div>
          )}
        </div>

        <div className="sstax-teaser__content">
          <h3
            className="sstax-teaser__title text-3xl font-bold text-text-primary dark:text-text-light mb-4"
            id={`service-${service.id}`}
          >
            {service.name}
          </h3>
          <div className="sstax-teaser__description text-text-secondary dark:text-text-light text-lg mb-6">
            <p>{service.description}</p>
          </div>
          <div className="sstax-teaser__action-container">
            <a
              className="sstax-teaser__action-link inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-accent-dark transition duration-300"
              href={service.link}
              aria-label={`Learn more about ${service.name}.`}
              id={`teaser-${service.id}-cta`}
              data-cmp-clickable
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
