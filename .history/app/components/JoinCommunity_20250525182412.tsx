'use client';

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/animations.module.css';

export default function JoinCommunity() {
  useScrollAnimation(`.${styles.fadeIn}`);

  return (
    <section id="community" className="py-16">
      <div className={`container mx-auto text-center ${styles.scaleIn}`}>
        <h2 className="text-3xl font-bold mb-4">Join Pakistan's Premier Taxation Community!</h2>
        <p className="text-lg mb-6">For taxation consultants: Stay updated with daily FBR moves and insights.</p>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <p className="mb-4">Please provide:</p>
          <ul className="text-left list-disc list-inside mb-4">
            <li>Professional Identity</li>
            <li>Tax Bar Card (if applicable)</li>
            <li>Visiting Card</li>
          </ul>
          <p className="mb-4">Get 24/7 taxation updates across Pakistan!</p>
          <p className="mb-4">Share details with Sohail Siraj at:</p>
          <a
            href="https://wa.me/923232200100"
            className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 inline-block"
          >
            WhatsApp: 0323-2200100
          </a>
          <p className="mt-4 font-semibold">Let's stay connected & updated!</p>
        </div>
      </div>
    </section>
  );
}