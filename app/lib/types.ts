export interface User {
    id: string;
    email?: string;
    name?: string;
  }
  
  export interface Service {
    id: string;
    name: string;
    image: string;
    link: string;
  }
  
  export interface Article {
    id: number;
    title: string;
    content: string;
    date: string;
    category: string;
    image: string;
    readTime: string;
    author: string;
  }

  export interface Calculator {
    id: string;
    title: string;
    description: string;
    buttonText: string;
  }