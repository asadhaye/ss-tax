'use client';

import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthContext, signOut } from '../lib/AuthProvider';
import Image from 'next/image';

const leftLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Articles', href: '/articles' },
  { name: 'Calculators', href: '/calculators' },
];

const rightLinks = [
  { name: 'Community', href: '/community' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { user, setUser } = useContext(AuthContext)!;
  const router = useRouter();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        setIsDark(false);
      } else {
        html.classList.add('dark');
        setIsDark(true);
      }
    }
  };

  const handleLogout = async () => {
    await signOut();
    setUser(null);
    router.push('/login');
  };

  return (
    <nav className="bg-blue-700 dark:bg-blue-950 shadow-md sticky top-0 z-50">
      <div
        className="
          container mx-auto
          grid grid-cols-3 items-center
          px-6 md:px-12 py-2
        "
      >
        {/* Left links */}
        <div className="flex items-center gap-3 md:gap-8 justify-start">
          {leftLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-accent transition-colors duration-200 px-1 md:px-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Centered logo */}
        <div className="flex justify-center">
          <a href="/" className="flex items-center justify-center">
            <Image
              src="/Sohail-Siraj-Tax.png"
              alt="Sohail Siraj Logo"
              width={100}
              height={100}
              className="h-25 w-25 object-contain"
              priority
            />
          </a>
        </div>
        {/* Right links and dark mode toggle */}
        <div className="flex items-center gap-3 md:gap-8 justify-end">
          {rightLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-accent transition-colors duration-200 px-1 md:px-2"
            >
              {item.name}
            </Link>
          ))}
          {user && (
            <>
              <Link
                href="/admin"
                className="text-white hover:text-accent transition-colors duration-200"
              >
                Admin
              </Link>
              <button
                onClick={handleLogout}
                className="text-white hover:text-accent transition-colors duration-200"
              >
                Logout
              </button>
            </>
          )}
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full bg-blue-700 dark:bg-blue-900 text-white hover:bg-blue-800 dark:hover:bg-blue-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <span title="Switch to CEO (Light) mode">🌞</span>
            ) : (
              <span title="Switch to CFO (Dark) mode">🌙</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}