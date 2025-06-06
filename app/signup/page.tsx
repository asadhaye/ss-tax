'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext, signUp } from '../lib/AuthProvider';
import { saveUser } from '../lib/data';
import { User, SaveUserData, AuthError, AUTH_ERROR_MESSAGES } from '../lib/interfaces';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import Link from 'next/link';

export default function Signup() {
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

  const handleSignUp = async () => {
    if (!validateForm()) return;
    setError(null);
    setLoading(true);
    try {
      const userCredential = await signUp(email, password);
      const createdAt = new Date();

      const userData: SaveUserData = {
        email,
        createdAt,
      };

      await saveUser(userCredential.userId, userData);

      const newUser: User = {
        id: userCredential.userId,
        email: userCredential.email ?? undefined,
        name: userCredential.name,
        createdAt,
      };

      setUser(newUser);
      router.push('/');
    } catch (err) {
      console.error('Signup error:', err);
      const authError = err as AuthError;
      const errorMessage = AUTH_ERROR_MESSAGES[authError.code] ?? 'Signup failed';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen hero-gradient-bg py-12 px-4">
      <div className="bg-background p-8 rounded-lg shadow-xl w-full max-w-sm border border-background-light">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">
          Sign Up
        </h2>
        <div className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
            disabled={loading}
            aria-label="Email address"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
            disabled={loading}
            aria-label="Password"
          />
          <button
            onClick={handleSignUp}
            className="w-full bg-primary text-text-light py-3 rounded-md font-semibold hover:bg-primary-dark transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
            disabled={loading}
          >
            {loading ? (
              <>
                <LoadingSpinner size="small" color="text-text-light" />
                <span className="ml-2">Signing up...</span>
              </>
            ) : (
              'Sign Up'
            )}
          </button>
          {error && <ErrorMessage message={error} />}
        </div>
        <p className="mt-4 text-center text-text-secondary">
          Already have an account?{' '}
          <Link 
            href="/login" 
            className="text-primary hover:text-primary-dark hover:underline transition-colors duration-200"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}