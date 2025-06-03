'use client';

import styles from '../styles/animations.module.css';

export default function JoinCommunity() {
  return (
    <section id="community" className="py-20 hero-gradient-bg">
      <div className={`container mx-auto text-center px-4 text-text-light ${styles.fadeIn}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Pakistan's Premier Taxation Community!
        </h2>
        <p className="text-lg mb-8">
          For taxation consultants: Stay updated with daily FBR moves and insights.
        </p>
        <div className="bg-background p-8 rounded-lg shadow-xl max-w-md mx-auto border border-background-light text-text-secondary">
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
      </div>
    </section>
  );
}