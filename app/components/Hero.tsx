'use client';

import React, { useRef, useEffect, useState } from 'react';
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
		image: '/slide2.png', // Replace with your actual image path
	},
	{
		id: 3,
		title: 'Business Advisory Services',
		description: 'Grow your business with our tailored advisory and compliance solutions.',
		cta: 'Learn More',
		ctaHref: '#services',
		image: '/slide3.png', // Replace with your actual image path
	},
];

export default function Hero() {
	const [current, setCurrent] = useState(0);
	const slideCount = slides.length;
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	// Auto-play logic
	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slideCount);
		}, 5000);
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [slideCount]);

	// Manual navigation
	const goTo = (idx: number) => setCurrent(idx);

	return (
		<section
			id="home"
			className="relative bg-ceo dark:bg-cfo py-24 md:py-32 overflow-hidden min-h-[400px] md:min-h-[600px]"
		>
			{/* Background image for the current slide */}
			{slides[current].image && (
				<Image
					src={slides[current].image}
					alt=""
					fill
					className="object-cover object-center absolute inset-0 w-full h-full z-0 transition-opacity duration-700"
					style={{ opacity: 1 }}
					priority
				/>
			)}

			{/* Overlay for darkening/lightening the background */}
			<div className="absolute inset-0 bg-black/30 dark:bg-blue-950/60 z-0 pointer-events-none" />

			<div className="container mx-auto text-center relative z-10 px-4 flex flex-col items-center justify-center h-full min-h-[400px] md:min-h-[600px]">
				{slides.map((slide) => (
					<div
						key={slide.id}
						className={`
              transition-all duration-700 ease-in-out
              ${slide === slides[current] ? 'opacity-100 translate-x-0' : 'opacity-0 pointer-events-none absolute left-0 right-0'}
              bg-white/50 dark:bg-blue-900/60 rounded-lg shadow-md p-4 md:p-8 mx-auto max-w-xl
            `}
					>
						<h2 className="text-2xl md:text-4xl font-bold mb-4 scroll-fade-up text-text-primary dark:text-text-light">
							{slide.title}
						</h2>
						<p className="text-base md:text-lg mb-6 max-w-2xl mx-auto scroll-fade-up text-text-secondary dark:text-text-light">
							{slide.description}
						</p>
						<a
							href={slide.ctaHref}
							className="inline-block bg-accent text-white px-6 py-2 rounded-md font-semibold text-base shadow hover:bg-accent-dark transition-all duration-300 scroll-fade-up"
						>
							{slide.cta}
						</a>
					</div>
				))}

				{/* Dots navigation */}
				<div className="flex justify-center gap-2 mt-8">
					{slides.map((slide, idx) => (
						<button
							key={slide.id}
							onClick={() => goTo(idx)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								idx === current ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-700'
							}`}
							aria-label={`Go to slide ${idx + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}