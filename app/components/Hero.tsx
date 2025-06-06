'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/animations.module.css';

export default function Hero() {
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
    <section id="home" className="relative bg-ceo dark:bg-cfo py-24 md:py-32">
      <div ref={ref} className="container mx-auto text-center relative z-10 px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 scroll-fade-up text-text-primary dark:text-text-light">Your Trusted Tax and Business Partner in Pakistan</h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto scroll-fade-up text-text-secondary dark:text-text-light" style={{ '--index': 1 } as React.CSSProperties}>
          Expert guidance for individuals and businesses navigating Pakistan's tax landscape.
        </p>
        <a
          href="#contact"
          className="inline-block bg-accent text-white px-8 py-3 rounded-md font-semibold text-lg shadow-lg hover:bg-accent-dark transition-all duration-300 scroll-fade-up"
          style={{ '--index': 2 } as React.CSSProperties}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
} 