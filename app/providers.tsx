'use client';

import AuthProvider from './lib/AuthProvider';

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return <AuthProvider>{children}</AuthProvider>;
}