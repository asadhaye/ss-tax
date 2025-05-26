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

export interface Calculator {
  id: string;
  title: string;
  description: string;
  buttonText: string;
}