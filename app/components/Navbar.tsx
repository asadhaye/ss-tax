'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthContext, signOut } from '../lib/AuthProvider'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Articles', href: '#articles' },
  { name: 'Calculators', href: '#calculators' },
  { name: 'Community', href: '#community' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const { user, setUser } = useContext(AuthContext)!;
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    setUser(null);
    router.push('/login');
  };

  return (
    <nav className="bg-background text-text-secondary py-4 px-6 shadow-md sticky top-0 z-50 print:bg-background print:text-text-primary">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-text-primary">Sirajuddin Khalid & Co.</h1>
        <div className="space-x-6 flex items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          {user ? (
            <>
              <Link
                href="/admin"
                className="hover:text-primary transition-colors duration-200"
              >
                Admin
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-primary transition-colors duration-200"
              >
                Logout
              </button>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}