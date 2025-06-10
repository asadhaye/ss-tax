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
        <div className={`container mx-auto text-center px-4 text-primary dark:text-text-light`}>
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-fade-up">
          Join Pakistan's Premier Taxation Community!
        </h2>
        <p className="text-lg mb-8">
          For taxation consultants: Stay updated with daily FBR moves and insights.
        </p>
        <AnimatedCard />
      </div>
    </section>
  );
};

export default JoinCommunity;

function AnimatedCard() {
  return (
    <div
      className={`bg-background/40 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(31,41,55,0.12)] dark:shadow-[0_8px_32px_0_rgba(16,185,129,0.12)] max-w-md mx-auto p-8 text-text-primary dark:text-text-light transition-all duration-300 scroll-fade-up`}
      style={{ '--index': 0 } as React.CSSProperties}
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
        className="bg-accent text-text-light px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-dark inline-block transition-colors duration-200 shadow-lg hover:shadow-xl"
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