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
    <section id="home" className="relative text-white py-24 md:py-32 bg-gradient-to-br from-orange-400 via-yellow-300 to-pink-500">
      <div ref={ref} className="container mx-auto text-center relative z-10 px-4">
        <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${visible ? 'animate-fadeUp' : 'opacity-0 translate-y-8'}`}>Your Trusted Tax and Business Partner in Pakistan</h2>
        <p className={`text-lg md:text-xl mb-10 max-w-3xl mx-auto ${visible ? 'animate-fadeUp' : 'opacity-0 translate-y-8'}`} style={{ '--index': 1 } as React.CSSProperties}>
          Expert guidance for individuals and businesses navigating Pakistan's tax landscape.
        </p>
        <a
          href="#contact"
          className={`inline-block bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 text-white px-8 py-3 rounded-md font-semibold text-lg shadow-lg hover:from-orange-600 hover:to-pink-600 hover:shadow-xl transition-all duration-300 ${visible ? 'animate-fadeUp' : 'opacity-0 translate-y-8'}`}
          style={{ '--index': 2 } as React.CSSProperties}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
} 