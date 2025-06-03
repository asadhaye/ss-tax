'use client';

import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../lib/AuthProvider';

export default function AdminPage() {
  const { user } = useContext(AuthContext)!;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null; // Optionally render a loading state or message while redirecting

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-text-primary mb-6">Admin Dashboard</h2>
      <p className="text-text-secondary">This is the admin area. Add your admin content here.</p>
      {/* Add your admin-specific components and content here */}
    </div>
  );
}