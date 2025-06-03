'use client';

import { Calculator } from '../lib/interfaces';
import styles from '../styles/animations.module.css';

export default function TaxCalculators() {
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

  return (
    <section id="calculators" className="py-20 hero-gradient-bg">
      <div className="container mx-auto text-center px-4 text-text-light">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${styles.fadeIn}`}>
          Tax Calculators
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Our comprehensive tax calculators are currently under development and will be available soon to assist you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 opacity-50 cursor-not-allowed">
          {calculators.map((calc, index) => (
            <div
              key={calc.id}
              className={`
                bg-background p-6 rounded-lg shadow-xl 
                hover:shadow-2xl hover:scale-105 transition-all duration-300 
                flex flex-col justify-between
                ${styles.slideIn}
              `}
              style={{ '--index': index } as React.CSSProperties}
            >
              <h3 className="text-xl font-semibold mb-2 text-text-primary">
                {calc.title}
              </h3>
              <p className="text-text-secondary mb-4 flex-1">{calc.description}</p>
              <button
                className="
                  mt-auto // Push button to bottom
                  bg-primary
                  text-text-light
                  px-6 // Increased padding
                  py-3 // Increased padding
                  rounded-full // More rounded
                  font-semibold
                  hover:bg-primary-dark
                  transition-colors
                  duration-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary
                  focus:ring-offset-2
                  disabled
                "
                onClick={() => console.log(`Calculator ${calc.id} clicked`)}
                disabled={true}
              >
                {calc.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}