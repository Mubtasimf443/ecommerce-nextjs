/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import { FC, FormEvent } from 'react';
import Link from 'next/link';

interface FooterLink {
  text: string;
  href: string;
}

const shopLinks: FooterLink[] = [
  { text: 'New Arrivals', href: '/shop/new-arrivals' },
  { text: 'Best Sellers', href: '/shop/best-sellers' },
  { text: 'Special Offers', href: '/shop/special-offers' },
  { text: 'Coming Soon', href: '/shop/coming-soon' },
  { text: 'Bundle & Save', href: '/shop/bundles' },
  { text: 'Gift Cards', href: '/shop/gift-cards' },
];

const supportLinks: FooterLink[] = [
  { text: 'Shipping Information', href: '/support/shipping' },
  { text: 'Returns & Exchanges', href: '/support/returns' },
  { text: 'FAQs', href: '/support/faqs' },
  { text: 'Contact Us', href: '/support/contact' },
  { text: 'Privacy Policy', href: '/legal/privacy' },
  { text: 'Terms & Conditions', href: '/legal/terms' },
];

const Footer: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <footer className="bg-dark-primary text-dark-text-secondary border-t border-dark-secondary">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <svg className="h-8 w-8 text-dark-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-2 text-xl font-bold text-dark-text-primary">ShopDark</span>
            </div>
            <p className="mb-4">Your premier destination for quality products with fast shipping and exceptional customer service.</p>
            <div className="flex space-x-4">
              {/* Social Links - These might need to link to external sites, so keeping as <a> tags */}
              <a href="https://facebook.com" className="text-dark-text-secondary hover:text-dark-accent transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dark-text-primary">Shop</h3>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.text}>
                  <Link 
                    href={link.href}
                    className="hover:text-dark-accent transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dark-text-primary">Help & Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.text}>
                  <Link 
                    href={link.href}
                    className="hover:text-dark-accent transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dark-text-primary">Stay Connected</h3>
            <p className="mb-4">Subscribe to our newsletter for exclusive offers and updates</p>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-dark-secondary border border-dark-secondary rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-dark-accent"
                />
                <button 
                  type="submit" 
                  className="bg-dark-accent text-dark-text-primary px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
            
            {/* Payment Methods */}
            <div>
              <h4 className="text-sm font-medium mb-2 text-dark-text-primary">We Accept</h4>
              <div className="flex space-x-2">
                {['Visa', 'MC', 'Amex', 'PayPal', 'Apple'].map((method) => (
                  <div key={method} className="w-10 h-6 bg-dark-secondary rounded flex items-center justify-center text-xs">
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-secondary">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-2 md:mb-0">&copy; {new Date().getFullYear()} ShopDark. All rights reserved.</p>
            <div className="flex space-x-4 text-xs">
              {['Privacy Policy', 'Terms of Service', 'Accessibility', 'Sitemap'].map((text) => (
                <Link
                  key={text}
                  href={`/legal/${text.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-dark-accent transition-colors"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;