import React from 'react';

export default function Footer() {
  return (
    <footer className="footer bg-gray-900 text-white p-6">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Sohail Siraj. All rights reserved.</p>
      </div>
    </footer>
  );
}