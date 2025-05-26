export interface Service {
  id: string;
  name: string;
  img: string;
  link: string;
}

export interface User {
  id: string;
  email?: string;
  name?: string;
  createdAt: Date;
}
z
export interface UserCredential {
  userId: string;
  email?: string;
  name?: string;
}

export interface Calculator {
  id: string;
  title: string;
  description: string;
  buttonText: string;
}