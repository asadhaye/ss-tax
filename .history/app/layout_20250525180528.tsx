import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers'


export const metadata: Metadata = {
  title: 'Sohail Siraj',
  description: 'Professional tax consultancy services by Sohail Siraj, offering expert financial advice and solutions.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}