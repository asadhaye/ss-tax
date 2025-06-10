'use client';

import { Calculator } from '../lib/interfaces';
import styles from '../styles/animations.module.css';
import { useRef, useEffect, useState, FC } from 'react';

interface TaxCalculatorsProps {
  previewCount?: number;
  showHeading?: boolean;
}

const TaxCalculators: FC<TaxCalculatorsProps> = ({ previewCount, showHeading = true }) => {
  const calculators: Calculator[] = [
    {
      id: '1',
      title: 'Income Tax Calculator',
      description: 'Calculate your income tax based on FBR rates.',
      buttonText: 'Coming Soon'
    },
    {
      id: '2',
      title: 'Sales Tax Calculator',
      description: 'Estimate sales tax for your business.',
      buttonText: 'Coming Soon'
    }
  ];

  const displayedCalculators = previewCount ? calculators.slice(0, previewCount) : calculators;

  return (
    <section id="calculators" className="py-20 bg-ceo dark:bg-cfo">
      <div className="container mx-auto text-center px-4">
        {showHeading && (
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 scroll-fade-up text-primary dark:text-text-light">Tax Calculators</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-text-secondary dark:text-text-light">Our comprehensive tax calculators are currently under development and will be available soon to assist you.</p>
          </>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 opacity-70 cursor-not-allowed">
          {displayedCalculators.map((calc, index) => (
            <CalculatorCard key={calc.id} calc={calc} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaxCalculators;

function CalculatorCard({ calc, index }: { calc: Calculator, index: number }) {
  return (
    <div
      className={`bg-background/40 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(31,41,55,0.12)] dark:shadow-[0_8px_32px_0_rgba(16,185,129,0.12)] transition-all duration-300 flex flex-col justify-between scroll-fade-up p-8 min-h-[220px]`}
      style={{ '--index': index } as React.CSSProperties}
    >
      <h3 className="text-xl font-semibold mb-2 text-primary dark:text-text-light drop-shadow-sm">{calc.title}</h3>
      <p className="text-text-secondary dark:text-text-light mb-4 flex-1 opacity-80">{calc.description}</p>
      <button
        className="mt-auto bg-accent text-text-light px-6 py-3 rounded-lg font-semibold opacity-80 cursor-not-allowed"
        disabled={true}
      >
        {calc.buttonText}
      </button>
    </div>
  );
}