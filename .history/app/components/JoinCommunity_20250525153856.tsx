'use client';

import React, { useState } from 'react';
import { saveCommunitySignup } from '../app/lib/data';

export default function JoinCommunity() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Please enter a valid email');
      setLoading(false);
      return;
    }
    setLoading(true);
    setMessage('');
    try {
      await saveCommunitySignup(email, new Date());
      setMessage('Thank you for joining our community!');
      setEmail('');
    } catch (err) {
      console.log(`Exception while doing something: ${err}`);
      setMessage('Failed to join, try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="join-community py-8 bg-blue-600 text-white">
      <div className="container mx-auto text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="mb-4">Connect with others and stay updated!</p>
        <form onSubmit={handleJoin} className="flex flex-col md:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 mb-2 md:mb-0"
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Join Now'}
          </button>
        </form>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </section>
  );
}