'use client';

import { useEffect } from 'react';

export function useScrollAnimation(className: string) {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    // Ensure elements exist before observing
    const elements = document.querySelectorAll(className);
    if (elements.length === 0) return;
    
    // Set initial state after a brief delay to ensure hydration is complete
    const timer = setTimeout(() => {
      elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    }, 100);

    elements.forEach((el) => observer.observe(el));

    // Cleanup function
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [className]);
}