/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isSearched) {
      router.push(`/search?query=${searchQuery}`);
    }
  }, [ searchQuery]);

  const debouncedSearch = useDebouncedCallback((query: string) => {
    setSearchQuery(query);
    setIsSearched(true);
  }, 650);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-dark-primary text-dark-text-primary shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center mb-3 lg:mb-0">
          <Link href="/" className="flex items-center">
            <svg className="h-8 w-8 text-dark-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-2 text-xl font-bold">ShopDark</span>
          </Link>
        </div>

        <div className="w-full lg:w-1/2 mb-3 lg:mb-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-dark-secondary border border-dark-secondary rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-dark-accent"
              onChange={(e) => debouncedSearch(e.target.value)}
              onKeyDown={(event :any) => event.key === 'Enter' && router.push("/search?query=" + event.target.value )}
            />
            <div className="absolute left-3 top-2.5">
              <svg className="h-5 w-5 text-dark-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/account" className="hover:text-dark-accent transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </Link>
          <Link href="/wishlist" className="hover:text-dark-accent transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </Link>
          <Link href="/cart" className="hover:text-dark-accent transition-colors relative">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
            <span className="absolute -top-2 -right-2 bg-dark-accent text-dark-text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </Link>
        </div>
      </div>

      <nav className="border-t border-dark-secondary">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center justify-between">
            <div className="relative group py-3">
              <button className="flex items-center px-3 py-2 text-dark-text-primary hover:text-dark-accent transition-colors">
                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                Categories
                <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div className="absolute left-0 mt-2 w-48 bg-dark-secondary rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 bg-white">
               
                <div className="py-1">
                  <Link href="/category/electronics" className="block px-4 py-2 hover:bg-dark-primary hover:text-dark-accent">Electronics</Link>
                  <Link href="/category/clothing" className="block px-4 py-2 hover:bg-dark-primary hover:text-dark-accent">Clothing</Link>
                  <Link href="/category/home" className="block px-4 py-2 hover:bg-dark-primary hover:text-dark-accent">Home & Garden</Link>
                  <Link href="/category/beauty" className="block px-4 py-2 hover:bg-dark-primary hover:text-dark-accent">Beauty</Link>
                  <Link href="/category/sports" className="block px-4 py-2 hover:bg-dark-primary hover:text-dark-accent">Sports</Link>
                  <Link href="/category/toys" className="block px-4 py-2 hover:bg-dark-primary hover:text-dark-accent">Toys & Games</Link>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="/" className="py-3 border-b-2 border-dark-accent text-dark-accent">Home</Link>
              <Link href="/products/new" className="py-3 border-b-2 border-transparent hover:text-dark-accent hover:border-dark-accent transition-colors">New Arrivals</Link>
              <Link href="/products/discounted" className="py-3 border-b-2 border-transparent hover:text-dark-accent hover:border-dark-accent transition-colors">Deals</Link>
              <Link href="/about-us" className="py-3 border-b-2 border-transparent hover:text-dark-accent hover:border-dark-accent transition-colors">About Us</Link>
              <Link href="/contact" className="py-3 border-b-2 border-transparent hover:text-dark-accent hover:border-dark-accent transition-colors">Contact</Link>
            </div>

            <div>
              <Link href="/special-offers" className="flex items-center text-dark-accent hover:text-dark-text-primary transition-colors">
                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a4 4 0 00-4-4H8.8a4 4 0 00-3.6 2.3L2 8"></path>
                </svg>
                Special Offers
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center justify-between py-2">
            <button 
              className="text-dark-text-primary p-2" 
              id="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            <button className="text-dark-text-primary p-2">
              <span>Categories</span>
              <svg className="h-4 w-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`bg-dark-secondary lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block px-3 py-2 text-dark-accent bg-dark-primary rounded-md">Home</Link>
          <Link href="/products/new" className="block px-3 py-2 text-dark-text-primary hover:bg-dark-primary hover:text-dark-accent rounded-md">New Arrivals</Link>
          <Link href="/products/discounted" className="block px-3 py-2 text-dark-text-primary hover:bg-dark-primary hover:text-dark-accent rounded-md">Deals</Link>
          <Link href="/about-us" className="block px-3 py-2 text-dark-text-primary hover:bg-dark-primary hover:text-dark-accent rounded-md">About Us</Link>
          <Link href="/contact" className="block px-3 py-2 text-dark-text-primary hover:bg-dark-primary hover:text-dark-accent rounded-md">Contact</Link>
          <Link href="/special-offers" className="block px-3 py-2 text-dark-accent">Special Offers</Link>
        </div>
      
        <div className="px-2 pt-2 pb-3 border-t border-dark-primary">
          <p className="px-3 py-2 text-dark-text-secondary font-medium">Categories</p>
          <Link href="/category/electronics" className="block px-3 py-2 text-dark-text-primary hover:bg-dark-primary hover:text-dark-accent rounded-md">Electronics</Link>
          <Link href="/category/clothing" className="block px-3 py-2 text-dark-text-primary hover:bg-dark-primary hover:text-dark-accent rounded-md">Clothing</Link>
          <Link href="/category/home" className="block px-3 py-2 text-dark-text-primary hover:bg-dark-primary hover:text-dark-accent rounded-md">Home & Garden</Link>
          <Link href="/category/beauty" className="block px-3 py-2 text-dark-text-primary hover:bg-dark-primary hover:text-dark-accent rounded-md">Beauty</Link>
          <Link href="/category/sports" className="block px-3 py-2 text-dark-text-primary hover:bg-dark-primary hover:text-dark-accent rounded-md">Sports</Link>
          <Link href="/category/toys" className="block px-3 py-2 text-dark-text-primary hover:bg-dark-primary hover:text-dark-accent rounded-md">Toys & Games</Link>
        </div>
      </div>
    </header>
  );
}
