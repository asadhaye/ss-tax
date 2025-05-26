'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthContext, signOut } from '../lib/ AuthProvider  /app/lib/AuthProvider';

export default function Navbar() {
  const { user, setUser } = useContext(AuthContext)!;
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    setUser(null);
    router.push('/login');
  };

  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Sohail Siraj
        </Link>
        <div className="flex items-center space-x-6">
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