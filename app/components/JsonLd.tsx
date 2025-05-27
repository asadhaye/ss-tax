'use client';

import { useEffect } from 'react';

interface OrganizationJsonLdProps {
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    telephone: string;
    contactType: string;
    email: string;
  };
}

interface Service {
  name: string;
  description: string;
  category: string;
}

interface ServiceJsonLdProps {
  services: Service[];
}

export default function OrganizationJsonLd({
  name,
  url,
  logo,
  description,
  address,
  contactPoint,
}: OrganizationJsonLdProps) {
  useEffect(() => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name,
      url,
      logo,
      description,
      address: {
        '@type': 'PostalAddress',
        ...address,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        ...contactPoint,
      },
      sameAs: [
        'https://www.facebook.com/sstax',
        'https://twitter.com/sstax',
        'https://www.linkedin.com/company/sstax',
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [name, url, logo, description, address, contactPoint]);

  return null;
}

export function ServiceJsonLd({ services }: ServiceJsonLdProps) {
  useEffect(() => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          category: service.category,
          provider: {
            '@type': 'Organization',
            name: 'SIRAJUDDIN KHALID & COMPANY',
            url: 'https://sohailsiraj.esq',
          },
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [services]);

  return null;
} 