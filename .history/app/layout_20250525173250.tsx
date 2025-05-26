import type { Metadata } from 'next';
import './globals.css';
import { SessionProvider } from "next-auth/react"


export const metadata: Metadata = {
  title: 'Sohail Siraj',
  description: 'Professional tax consultancy services by Sohail Siraj, offering expert financial advice and solutions.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  );
}