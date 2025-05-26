'use client';

import React, { useState, useEffect, createContext, useContext, useMemo } from 'react';
import { User } from './types';

interface AuthContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export async function signIn(email: string, password: string): Promise<{ 
  userId: string;
  email?: string;
  name?: string;
}> {
  // Placeholder: Implement Azure AD B2C or similar authentication
  throw new Error('Authentication not implemented');
}

export async function signUp(email: string, password: string): Promise<User> {
  // Placeholder: Implement Azure AD B2C or similar registration
  throw new Error('Registration not implemented');
}

export async function signOut(): Promise<void> {
  // Placeholder: Implement Azure AD B2C or similar sign-out
  throw new Error('Sign-out not implemented');
}

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Placeholder: Implement Azure AD B2C state change listener
    const unsubscribe = () => {};
    return unsubscribe;
  }, []);

  const value = useMemo(() => ({ user, setUser }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };