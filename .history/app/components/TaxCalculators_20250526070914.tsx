'use client';

import { Calculator } from '../lib/interfaces';
import styles from '../styles/animations.module.css';

export default function TaxCalculators() {
  const calculators: Calculator[] = [
    {
      id: '1',
      title: 'Income Tax Calculator',
      description: 'Calculate your income tax based on FBR rates.',
      buttonText: 'Try Now'
    },
    {
      id: '2',
      title: 'Sales Tax Calculator',
      description: 'Estimate sales tax for your business.',
      buttonText: 'Try Now'
    }
  ];

  return (
    <section id="calculators" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className={`text-3xl font-bold mb-8 ${styles.fadeIn}`}>
          Tax Calculators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {calculators.map((calc, index) => (
            <div
              key={calc.id}
              className={`bg-white p-6 rounded-lg shadow-md ${styles.slideIn}`}
              style={{ '--index': index } as React.CSSProperties}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {calc.title}
              </h3>
              <p className="text-gray-700">{calc.description}</p>
              <button 
                className="
                  mt-4 
                  bg-blue-600 
                  text-white 
                  px-4 
                  py-2 
                  rounded 
                  hover:bg-blue-700
                  transition-colors 
                  duration-200
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-blue-500
                  focus:ring-offset-2
                "
                onClick={() => console.log(`Calculator ${calc.id} clicked`)}
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