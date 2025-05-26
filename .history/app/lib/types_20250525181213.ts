export interface User {
    id: string;
    email?: string;
    name?: string;
  }
  
  export interface Service {
    id: string;
    name: string;
    img: string;
    link: string;
  }
  
  export interface Article {
    id: number;
    title: string;
    content: string;
    date: string;
  }