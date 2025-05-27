export interface Service {
  id: string;
  name: string;
  img: string;
  link: string;
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
  | 'email-already-in-use'
  | 'invalid-email'
  | 'invalid-credential'
  | 'auth/unknown';

export const AUTH_ERROR_MESSAGES: Record<AuthErrorCode, string> = {
  'email-already-in-use': 'Email already in use',
  'invalid-email': 'Invalid email format',
  'invalid-credential': 'Invalid credentials',
  'auth/unknown': 'An unknown error occurred'
};