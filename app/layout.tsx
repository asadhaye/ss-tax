import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import ErrorBoundary from './components/ErrorBoundary';
import AuthProvider from './lib/AuthProvider';


export const metadata: Metadata = {
  title: 'Sohail Siraj',
  description: 'Professional tax consultancy services by Sohail Siraj, offering expert financial advice and solutions.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <AuthProvider>
            <Providers>
              {children}
            </Providers>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}