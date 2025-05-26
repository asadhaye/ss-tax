'use client';

import { useEffect } from 'react';

export function useScrollAnimation(className: string) {
  useEffect(() => {
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

    const elements = document.querySelectorAll(className);
    
    // Set initial state after a brief delay to ensure hydration is complete
    const timer = setTimeout(() => {
      elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    }, 100);

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [className]);
}