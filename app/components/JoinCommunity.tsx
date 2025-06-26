'use client';

import styles from '../styles/animations.module.css';
import { useRef, useEffect, useState, FC } from 'react';

interface JoinCommunityProps {
  previewOnly?: boolean;
  showHeading?: boolean;
}

const JoinCommunity: FC<JoinCommunityProps> = ({ previewOnly, showHeading = true }) => {
  if (previewOnly) {
    return (
      <section id="community" className="py-12 bg-ceo dark:bg-cfo">
        <div className="container mx-auto text-center px-4 text-primary dark:text-text-light">
          {showHeading && (
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Pakistan's Premier Taxation Community!</h2>
          )}
          <p className="text-lg mb-8">For taxation consultants: Stay updated with daily FBR moves and insights.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="community" className="py-20 bg-ceo dark:bg-cfo">
      <div className={`container mx-auto text-center px-4 text-primary dark:text-text-light ${styles.fadeIn}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-fade-up" style={{ '--delay': '0s' } as React.CSSProperties}>
          Join Pakistan's Premier Taxation Community!
        </h2>
        <p className="text-lg mb-8 scroll-fade-up" style={{ '--delay': '0.2s' } as React.CSSProperties}>
          For taxation consultants: Stay updated with daily FBR moves and insights.
        </p>
        <AnimatedCard />
        <p className="mt-6 text-sm text-text-secondary dark:text-text-light scroll-fade-up" style={{ '--delay': '0.4s' } as React.CSSProperties}>
          Last updated: June 26, 2025, 10:09 AM PKT
        </p>
      </div>
    </section>
  );
};

export default JoinCommunity;

function AnimatedCard() {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`ss-card scroll-fade-up max-w-md mx-auto p-6 border-2 border-gray-200 dark:border-gray-700 rounded-2xl text-text-primary dark:text-text-light shadow-md ${isVisible ? 'visible' : ''}`}
      style={{ '--index': 0, '--delay': '0.3s' } as React.CSSProperties}
    >
      <p className="mb-4 font-semibold">Please provide:</p>
      <ul className="text-left list-disc list-inside mb-6 space-y-2">
        <li>Professional Identity</li>
        <li>Tax Bar Card (if applicable)</li>
        <li>Visiting Card</li>
      </ul>
      <p className="mb-6 font-semibold">Get 24/7 taxation updates across Pakistan!</p>
      <p className="mb-4">Share details with Sohail Siraj at:</p>
      <a
        href="https://wa.me/923232200100"
        className="bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-700 inline-block transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        aria-label="Contact on WhatsApp: 0323-2200100"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp: 0323-2200100
      </a>
      <p className="mt-6 font-semibold text-text-primary dark:text-text-light text-lg">Let's stay connected & updated!</p>
    </div>
  );
}