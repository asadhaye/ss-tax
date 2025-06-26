import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ceo dark:bg-cfo text-text-primary dark:text-text-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/Sohail-Siraj-logo.svg" alt="Sohail Siraj Logo" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="font-bold text-xl text-primary dark:text-white">Sohail Siraj</span>
            </div>
            <p className="text-text-secondary dark:text-text-light text-sm">
              Professional tax consulting services in Pakistan. Expert guidance for businesses and individuals on tax planning, compliance, and business advisory.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary dark:text-text-light">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-text-secondary dark:text-text-light hover:text-primary dark:hover:text-accent transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-text-secondary dark:text-text-light hover:text-primary dark:hover:text-accent transition-colors duration-200">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="text-text-secondary dark:text-text-light hover:text-primary dark:hover:text-accent transition-colors duration-200">
                  Calculators
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-text-secondary dark:text-text-light hover:text-primary dark:hover:text-accent transition-colors duration-200">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary dark:text-text-light">Contact Us</h3>
            <ul className="space-y-2 text-text-secondary dark:text-text-light">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>OFFICE NO.26-G, HAJVERY COMPLEX, 2-MOZANG ROAD, LAHORE, PAKISTAN</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+923232200100" className="hover:text-primary dark:hover:text-accent transition-colors duration-200">
                  +92 323 220 01 00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sohailsiraj@hotmail.com" className="hover:text-primary dark:hover:text-accent transition-colors duration-200">
                  sohailsiraj@hotmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <a href="https://wa.me/923232200100" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-accent transition-colors duration-200">
                  WhatsApp: +92 323 220 01 00
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary dark:text-text-light">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Sohail-Siraj-Sirajuddin-Khalid-Co-Taxation-Consultants-Since-1968/100090480399586/" className="text-text-secondary dark:text-text-light hover:text-primary dark:hover:text-accent transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sohail-siraj-53400a104/" className="text-text-secondary dark:text-text-light hover:text-primary dark:hover:text-accent transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary dark:text-text-light text-sm">
              © {currentYear} Sohail Siraj. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-text-secondary dark:text-text-light hover:text-primary dark:hover:text-accent transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-text-secondary dark:text-text-light hover:text-primary dark:hover:text-accent transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-text-secondary dark:text-text-light hover:text-primary dark:hover:text-accent transition-colors duration-200 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}