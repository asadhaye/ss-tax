import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from './lib/AuthProvider';
import ErrorBoundary from './components/ErrorBoundary';
import OrganizationJsonLd, { ServiceJsonLd } from './components/JsonLd';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'SS Tax - Professional Tax Consulting Services',
    template: '%s | SS Tax',
  },
  description: 'Professional tax consulting services in Pakistan. Expert guidance for businesses and individuals on tax planning, compliance, and business advisory.',
  keywords: ['tax consulting', 'tax planning', 'tax compliance', 'business advisory', 'Pakistan tax', 'tax services'],
  authors: [{ name: 'Sohail Siraj' }],
  creator: 'Sohail Siraj',
  publisher: 'Asad',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sohailsiraj.esq'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SIRAJUDDIN KHALID & COMPANY - Professional Tax Consulting Services',
    description: 'Professional tax consulting services in Pakistan. Expert guidance for businesses and individuals on tax planning, compliance, and business advisory.',
    url: 'https://sohailsiraj.esq',
    siteName: 'SIRAJUDDIN KHALID & COMPANY - Sohail Siraj - Professional Tax Consulting Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SIRAJUDDIN KHALID & COMPANY - Professional Tax Consulting Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIRAJUDDIN KHALID & COMPANY - Sohail Siraj - Professional Tax Consulting Services',
    description: 'Professional tax consulting services in Pakistan. Expert guidance for businesses and individuals on tax planning, compliance, and business advisory.',
    creator: '@sstax',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark">
      <body className={`${inter.className} h-full relative`}>
        {/* Glassmorphism background for dark mode */}
        <div className="fixed inset-0 -z-10 pointer-events-none hidden dark:block dark:bg-gradient-to-br dark:from-[#23272f] dark:via-primary-dark/60 dark:to-black/90 dark:backdrop-blur-2xl" />
        <OrganizationJsonLd
          name="SIRAJUDDIN KHALID & COMPANY"
          url="https://sohailsiraj.esq"
          logo="https://sohailsiraj.esq/logo.png"
          description="Professional tax consulting services in Pakistan"
          address={{
            streetAddress: "123 Business Street",
            addressLocality: "Karachi",
            addressRegion: "Sindh",
            postalCode: "12345",
            addressCountry: "Pakistan"
          }}
          contactPoint={{
            telephone: "+92-123-4567890",
            contactType: "customer service",
            email: "contact@sohailsiraj.esq"
          }}
        />
        <ServiceJsonLd
          services={[
            {
              name: "Tax Consulting",
              description: "Professional tax consulting services",
              category: "Tax Services"
            },
            {
              name: "Business Advisory",
              description: "Expert business advisory services",
              category: "Advisory Services"
            }
          ]}
        />
        <ErrorBoundary>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}