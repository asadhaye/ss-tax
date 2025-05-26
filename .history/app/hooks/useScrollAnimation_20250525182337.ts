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
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [className]);
}