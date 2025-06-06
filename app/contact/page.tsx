'use client';

import React, { useState } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import styles from '../styles/animations.module.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      setStatus('idle');
      return;
    }

    // Basic email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      setStatus('idle');
      return;
    }

    try {
      // Replace with your actual form submission logic (e.g., API call)
      console.log('Form submitted:', formData);
      
      // Simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000)); 

      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (err) {
      console.error('Contact form submission error:', err);
      setError('Failed to send message. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-ceo dark:bg-cfo">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-background p-8 md:p-12 rounded-2xl shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center scroll-fade-up">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Contact Information */}
            <div className={`bg-white/30 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl p-6 text-text-secondary transition-all duration-300 scroll-fade-up`}
              style={{ '--index': 0 } as React.CSSProperties}>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">Get in Touch</h2>
              <p className="text-text-secondary mb-4">We are here to help. Please reach out to us via phone, email, or visit our office.</p>
              <div className="space-y-3 text-text-secondary">
                <p><strong>Phone:</strong> +92-123-4567890</p>
                <p><strong>Email:</strong> contact@sohailsiraj.esq</p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/923232200100" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">0323-2200100</a></p>
              </div>
            </div>
            {/* Contact Form */}
            <div className={`bg-white/30 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl p-6 text-text-secondary transition-all duration-300 scroll-fade-up`}
              style={{ '--index': 1 } as React.CSSProperties}>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-text-secondary text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
                    disabled={status === 'loading'}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
                    disabled={status === 'loading'}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
                    disabled={status === 'loading'}
                    required
                  />
                </div>

                {error && <ErrorMessage message={error} />}
                {status === 'success' && <div className="bg-green-100 border border-green-200 text-green-700 p-3 rounded-md">Message sent successfully!</div>}

                <button
                  type="submit"
                  className="w-full bg-primary text-text-light py-3 rounded-md font-semibold hover:bg-primary-dark transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <LoadingSpinner size="small" color="text-text-light" />
                      <span className="ml-2">Sending...</span>
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 