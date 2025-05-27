'use client';

import React, { useState, useEffect, createContext, useContext, useMemo } from 'react';
import { User, UserCredential, AuthError } from './interfaces';

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

export async function signIn(email: string, password: string): Promise<UserCredential> {
  if (!email || !password) {
    const authError = new Error('Email and password are required') as AuthError;
    authError.code = 'auth/invalid-params';
    throw authError;
  }

  try {
    // Placeholder: Implement Azure AD B2C or similar authentication
    const mockUser: UserCredential = {
      userId: 'mock-user-id',
      email: email,
      name: 'Mock User'
    };
    return mockUser;
  } catch (error) {
    // Log the error for debugging (use your preferred logging solution)
    console.error('Authentication error:', error);
    
    // Transform unknown errors into typed AuthError
    if (error instanceof Error) {
      const authError = error as AuthError;
      authError.code = 'auth/invalid-credential';
      throw authError;
    }
    
    // Handle unexpected errors
    const authError = new Error('Authentication failed') as AuthError;
    authError.code = 'auth/unknown';
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
    // Placeholder: Implement Azure AD B2C or similar registration
    const mockUser: UserCredential = {
      userId: 'mock-user-id',
      email: email,
      name: 'New User'
    };
    return mockUser;
  } catch (error) {
    console.error('Registration error:', error);
    
    if (error instanceof Error) {
      const authError = error as AuthError;
      authError.code = 'auth/email-already-in-use';
      throw authError;
    }
    
    const authError = new Error('Registration failed') as AuthError;
    authError.code = 'auth/unknown';
    throw authError;
  }
}

export async function signOut(): Promise<void> {
  try {
    // Placeholder: Implement Azure AD B2C or similar sign-out
    await Promise.resolve();
  } catch (error) {
    console.error('Sign-out error:', error);
    
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error('Sign-out failed');
  }
}

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        // Initialize auth state here
        setLoading(false);
      } catch (error) {
        console.error('Auth initialization error:', error);
        setLoading(false);
      }
    };

    initAuth();

    return () => {
      // Cleanup if needed
    };
  }, []);

  const value = useMemo(() => ({ 
    user, 
    setUser 
  }), [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };