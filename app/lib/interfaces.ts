export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  link: string;
  category: string;
  pricing: string;
}

export interface UserCredential {
  userId: string;
  email?: string;
  name?: string;
}

export interface User {
  id: string;
  email?: string;
  name?: string;
  createdAt: Date;
}

export interface SaveUserData {
  email: string;
  createdAt: Date;
}

export interface AuthError extends Error {
  code: AuthErrorCode;
}

export type AuthErrorCode = 
  | 'auth/email-already-in-use'
  | 'auth/invalid-email'
  | 'auth/invalid-credential'
  | 'auth/invalid-params'
  | 'auth/unknown';

export const AUTH_ERROR_MESSAGES: Record<AuthErrorCode, string> = {
  'auth/email-already-in-use': 'Email already in use',
  'auth/invalid-email': 'Invalid email format',
  'auth/invalid-credential': 'Invalid credentials',
  'auth/invalid-params': 'Invalid parameters provided',
  'auth/unknown': 'An unknown error occurred'
};

export interface Calculator {
  id: string;
  title: string;
  description: string;
  buttonText: string;
}