'use client';

import React, { useEffect, useRef } from 'react';
import styles from '../styles/animations.module.css';

export default function JoinCommunity() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add visible class after mount to trigger animation
    const timer = setTimeout(() => {
      sectionRef.current?.classList.add(styles.visible);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="community" className="py-16 bg-gray-50">
      <div
        ref={sectionRef}
        className={`container mx-auto text-center ${styles.fadeIn}`}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Join Pakistan's Premier Taxation Community!
        </h2>
        <p className="text-lg mb-6 text-gray-800">
          For taxation consultants: Stay updated with daily FBR moves and insights.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <p className="mb-4 text-gray-800">Please provide:</p>
          <ul className="text-left list-disc list-inside mb-4 text-gray-700">
            <li>Professional Identity</li>
            <li>Tax Bar Card (if applicable)</li>
            <li>Visiting Card</li>
          </ul>
          <p className="mb-4 text-gray-800">Get 24/7 taxation updates across Pakistan!</p>
          <p className="mb-4 text-gray-800">Share details with Sohail Siraj at:</p>
          <a
            href="https://wa.me/923232200100"
            className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 inline-block transition-colors duration-200"
            aria-label="Contact on WhatsApp: 0323-2200100"
          >
            WhatsApp: 0323-2200100
          </a>
          <p className="mt-4 font-semibold text-gray-900">Let's stay connected & updated!</p>
        </div>
      </div>
    </section>
  );
}