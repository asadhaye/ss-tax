'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthContext, signOut } from '../lib/AuthProvider'
import styles from '../styles/animations.module.css';


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
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Sirajuddin Khalid & Co.</h1>
        <div className="space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          {user ? (
            <>
              <Link href="/admin" className="hover:text-gray-300">
                Admin
              </Link>
              <button onClick={handleLogout} className="hover:text-gray-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link href="/signup" className="hover:text-gray-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}