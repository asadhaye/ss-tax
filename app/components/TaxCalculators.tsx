'use client';

import { Calculator } from '../lib/interfaces';
import styles from '../styles/animations.module.css';
import { useRef, useEffect, useState } from 'react';

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
    <section id="calculators" className="py-20 bg-gradient-to-br from-orange-400 via-yellow-300 to-pink-500">
      <div className="container mx-auto text-center px-4 text-white">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${styles.fadeIn}`}>Tax Calculators</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Our comprehensive tax calculators are currently under development and will be available soon to assist you.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 opacity-50 cursor-not-allowed">
          {calculators.map((calc, index) => (
            <CalculatorCard key={calc.id} calc={calc} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CalculatorCard({ calc, index }: { calc: Calculator, index: number }) {
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
    <div
      ref={ref}
      className={`bg-white/30 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl hover:shadow-[0_8px_32px_0_rgba(255,140,0,0.37)] hover:scale-105 hover:border-orange-400/60 transition-all duration-300 flex flex-col justify-between ${styles.slideIn} ${visible ? 'animate-fadeUp' : 'opacity-0 translate-y-8'}`}
      style={{ '--index': index } as React.CSSProperties}
    >
      <h3 className="text-xl font-bold mb-2 text-white drop-shadow-md">{calc.title}</h3>
      <p className="text-white/90 mb-4 flex-1">{calc.description}</p>
      <button
        className="mt-auto bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 disabled"
        onClick={() => {}}
        disabled={true}
      >
        {calc.buttonText}
      </button>
    </div>
  );
}