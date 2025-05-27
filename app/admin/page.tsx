'use client';

import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../lib/AuthProvider';
import Navbar from '../components/Navbar';

export default function AdminPage() {
  const { user } = useContext(AuthContext)!;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <>
      <Navbar />
      <AdminPage />
    </>
  );
}