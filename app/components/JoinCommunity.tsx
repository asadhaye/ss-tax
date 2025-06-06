'use client';

import styles from '../styles/animations.module.css';
import { useRef, useEffect, useState } from 'react';

export default function JoinCommunity() {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-orange-400 via-yellow-300 to-pink-500">
      <div className={`container mx-auto text-center px-4 text-white ${styles.fadeIn}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Pakistan's Premier Taxation Community!
        </h2>
        <p className="text-lg mb-8">
          For taxation consultants: Stay updated with daily FBR moves and insights.
        </p>
        <AnimatedCard />
      </div>
    </section>
  );
}

function AnimatedCard() {
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
    <div
      ref={ref}
      className={`bg-white/30 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl max-w-md mx-auto p-8 text-text-secondary hover:shadow-[0_8px_32px_0_rgba(255,140,0,0.37)] hover:scale-105 hover:border-orange-400/60 transition-all duration-300 ${visible ? 'animate-fadeUp' : 'opacity-0 translate-y-8'}`}
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
        className="bg-secondary text-text-light px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-dark inline-block transition-colors duration-200 shadow-lg hover:shadow-xl"
        aria-label="Contact on WhatsApp: 0323-2200100"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp: 0323-2200100
      </a>
      <p className="mt-6 font-semibold text-text-primary text-lg">Let's stay connected & updated!</p>
    </div>
  );
}