'use client';

import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthContext, signOut } from '../lib/AuthProvider'
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Articles', href: '/articles' },
  { name: 'Calculators', href: '/calculators' },
  { name: 'Community', href: '/community' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const { user, setUser } = useContext(AuthContext)!;
  const router = useRouter();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'));
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
    <nav className="bg-background-light dark:bg-background-dark shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <a href="/" className="flex items-center gap-2">
          <Image src="/Sohail-Siraj-logo.svg" alt="Sohail Siraj Logo" width={40} height={40} className="h-10 w-10 object-contain" priority />
          <span className="font-bold text-xl text-primary dark:text-white">Sohail Siraj</span>
        </a>
        <div className="space-x-6 flex items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-primary dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          {user ? (
            <>
              <Link
                href="/admin"
                className="text-primary dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-200"
              >
                Admin
              </Link>
              <button
                onClick={handleLogout}
                className="text-primary dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-200"
              >
                Logout
              </button>
            </>
          ) : null}
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full bg-background-light dark:bg-background-dark text-primary dark:text-accent hover:bg-primary/10 dark:hover:bg-accent/10 transition-colors"
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