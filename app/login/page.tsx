'use client';

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthContext, signIn } from '../lib/AuthProvider';
import { User } from '../lib/interfaces';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

// Define error types
type AuthErrorCode = 'invalid-credential' | 'too-many-requests';

interface AuthError extends Error {
  code: AuthErrorCode;
}

const errorMessages: Record<AuthErrorCode, string> = {
  'invalid-credential': 'Invalid email or password',
  'too-many-requests': 'Too many attempts, try again later',
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext)!;
  const router = useRouter();

  const validateForm = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email format');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    setError(null);
    setLoading(true);
    try {
      const userCredential = await signIn(email, password);
      setUser({
        id: userCredential.userId,
        email: userCredential.email ?? undefined,
        name: userCredential.name,
        createdAt: new Date()
      } as User);
      router.push('/');
    } catch (err) {
      console.error('Authentication error:', err);
      const authError = err as AuthError;
      const errorMessage = errorMessages[authError.code] ?? 'Login failed';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen hero-gradient-bg p-4">
      <div className="bg-background p-8 rounded-lg shadow-xl w-full max-w-sm border border-background-light">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Login</h2>
        <div className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
            disabled={loading}
            aria-label="Email address"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
            disabled={loading}
            aria-label="Password"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-primary text-text-light py-3 rounded-md font-semibold hover:bg-primary-dark transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <LoadingSpinner size="small" color="text-text-light" />
                <span className="ml-2">Logging in...</span>
              </>
            ) : (
              'Login'
            )}
          </button>
        </div>
        {error && <ErrorMessage message={error} />}
        <p className="mt-4 text-center text-text-secondary">
          Don't have an account?{' '}
          <Link href="/signup" className="text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}