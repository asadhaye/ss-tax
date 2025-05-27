'use client';

import React, { useState, useEffect, createContext, useContext, useMemo } from 'react';
import { User, UserCredential, AuthError } from './interfaces';
import LoadingSpinner from '../components/LoadingSpinner';

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

// Client-side authentication functions
export async function signIn(email: string, password: string): Promise<UserCredential> {
  if (!email || !password) {
    const authError = new Error('Email and password are required') as AuthError;
    authError.code = 'auth/invalid-params';
    throw authError;
  }

  try {
    // For static export, we'll use a mock implementation
    // In production, you would integrate with your authentication service
    const mockUser: UserCredential = {
      userId: `user-${Date.now()}`,
      email: email,
      name: 'Mock User'
    };

    // Store auth state in localStorage for persistence
    localStorage.setItem('auth_user', JSON.stringify(mockUser));
    return mockUser;
  } catch (error) {
    console.error('Authentication error:', error);
    const authError = error instanceof Error ? error as AuthError : new Error('Authentication failed') as AuthError;
    authError.code = 'auth/invalid-credential';
    throw authError;
  }
}

export async function signUp(email: string, password: string): Promise<UserCredential> {
  if (!email || !password) {
    const authError = new Error('Email and password are required') as AuthError;
    authError.code = 'auth/invalid-params';
    throw authError;
  }

  try {
    // For static export, we'll use a mock implementation
    const mockUser: UserCredential = {
      userId: `user-${Date.now()}`,
      email: email,
      name: 'New User'
    };

    // Store auth state in localStorage for persistence
    localStorage.setItem('auth_user', JSON.stringify(mockUser));
    return mockUser;
  } catch (error) {
    console.error('Registration error:', error);
    const authError = error instanceof Error ? error as AuthError : new Error('Registration failed') as AuthError;
    authError.code = 'auth/email-already-in-use';
    throw authError;
  }
}

export async function signOut(): Promise<void> {
  try {
    // Clear auth state from localStorage
    localStorage.removeItem('auth_user');
  } catch (error) {
    console.error('Sign-out error:', error);
    const authError = error instanceof Error ? error as AuthError : new Error('Sign-out failed') as AuthError;
    authError.code = 'auth/unknown';
    throw authError;
  }
}

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        // Check localStorage for existing auth state
        const storedUser = localStorage.getItem('auth_user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser({
            id: parsedUser.userId,
            email: parsedUser.email,
            name: parsedUser.name,
            createdAt: new Date()
          });
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const value = useMemo(() => ({ 
    user, 
    setUser 
  }), [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };