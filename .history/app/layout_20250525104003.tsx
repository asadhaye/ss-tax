import type { Metadata } from 'next';
import { GeistSans, GeistMono } from 'next/font/google';
import './globals.css';
const geistSans = GeistSans({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = GeistMono({ variable: '--font-geist-mono', subsets: ['latin'] });
export const metadata: Metadata = { title: 'Sohail Siraj', description: 'A web app' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  );
}