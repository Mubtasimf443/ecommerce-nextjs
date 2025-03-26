/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found - TechShop',
  description: 'Sorry, the page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-dark-accent mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-dark-text-secondary max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-6 py-3 bg-dark-accent text-dark-text-primary rounded-lg hover:bg-opacity-90 transition-all"
          >
            Return to Home
          </Link>
          <Link 
            href="/products" 
            className="px-6 py-3 border border-dark-secondary rounded-lg hover:bg-dark-secondary transition-all"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}