'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: 'Your Trusted Tax and Business Partner in Pakistan',
    description: "Expert guidance for individuals and businesses navigating Pakistan's tax landscape.",
    cta: 'Get in Touch',
    ctaHref: '#contact',
    image: '/fbr-updates.png',
  },
  {
    id: 2,
    title: 'Maximize Your Tax Savings',
    description: 'Let our experts help you optimize your tax strategy and ensure compliance.',
    cta: 'Book a Consultation',
    ctaHref: '#contact',
    image: '/slide2.png',
  },
  {
    id: 3,
    title: 'Business Advisory Services',
    description: 'Grow your business with our tailored advisory and compliance solutions.',
    cta: 'Learn More',
    ctaHref: '#services',
    image: '/slide3.jpg',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = slides.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const startAutoPlay = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);
  }, [slideCount]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (!isPaused) startAutoPlay();
    return () => stopAutoPlay();
  }, [isPaused, startAutoPlay, stopAutoPlay]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    stopAutoPlay();
    if (!isPaused) startAutoPlay();
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      stopAutoPlay();
      setCurrent((prev) => {
        const next = diff > 0 ? (prev + 1) % slideCount : (prev - 1 + slideCount) % slideCount;
        return next;
      });
      if (!isPaused) startAutoPlay();
    }
  };

  return (
    <section
      id="home"
      className="relative bg-ceo dark:bg-cfo py-24 md:py-32 overflow-hidden min-h-[320px] md:min-h-[460px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero carousel"
    >
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={idx !== current}
        >
          {slide.image && (
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center w-full h-full z-0"
              priority={idx === 0}
            />
          )}
          <div className="absolute inset-0 bg-black/30 dark:bg-blue-950/60 z-0 pointer-events-none" />
          <div className="container mx-auto text-center relative z-10 px-4 flex flex-col items-center justify-center h-full min-h-[320px] md:min-h-[460px]">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 animate-slide-up">
              {slide.description}
            </p>
            <a
              href={slide.ctaHref}
              className="inline-block bg-accent text-white px-6 py-2 rounded-md font-semibold text-base shadow hover:bg-accent-dark transition-all duration-300"
              aria-label={slide.cta}
            >
              {slide.cta}
            </a>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-accent scale-125' : 'bg-gray-300 dark:bg-gray-700'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === current}
          />
        ))}
      </div>
    </section>
  );
}