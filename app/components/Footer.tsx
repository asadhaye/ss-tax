import React from 'react';

export default function Footer() {
  return (
    <footer className="footer bg-ceo dark:bg-cfo text-text-primary dark:text-text-light py-6 px-4 text-center">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} Sohail Siraj. All rights reserved.</p>
      </div>
    </footer>
  );
}