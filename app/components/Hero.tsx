import React from 'react';
import styles from '../styles/animations.module.css';

export default function Hero() {
  return (
    <section id="home" className={`relative text-text-light py-24 md:py-32 ${styles.heroGradient}`}>
      <div className="container mx-auto text-center relative z-10 px-4">
        <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${styles.fadeIn}`}>
          Your Trusted Tax and Business Partner in Pakistan
        </h2>
        <p className={`text-lg md:text-xl mb-10 max-w-3xl mx-auto ${styles.fadeIn}`} style={{ '--index': 1 } as React.CSSProperties}>
          Expert guidance for individuals and businesses navigating Pakistan's tax landscape.
        </p>
        <a
          href="#contact"
          className={`
            inline-block bg-primary text-text-light px-8 py-3 rounded-md font-semibold text-lg shadow-lg
            hover:bg-primary-dark hover:shadow-xl transition-all duration-300
            ${styles.fadeIn}
          `}
          style={{ '--index': 2 } as React.CSSProperties}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
} 