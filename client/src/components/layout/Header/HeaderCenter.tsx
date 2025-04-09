/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


import { useRouter } from 'next/navigation';
import React, { FC, useState, useEffect  } from 'react'
import { useDebouncedCallback } from 'use-debounce';
import Image from 'next/image';
import Logo from '../../custom/Logo';
import {Heart as FevIcon, UserRound as AccountIcon, ShoppingCart as ShoppingCartIcon , } from 'lucide-react'
import Link from 'next/link';


const HeaderCenter :FC= () => {
  const [searchQuery, setSearchQuery] = useState('');
    const [isSearched, setIsSearched] = useState(false);
    const router = useRouter();
    useEffect(() => {
      if (isSearched) {
        router.push(`/search?query=${searchQuery}`);
      }
    }, [searchQuery]);
  
    const debouncedSearch = useDebouncedCallback((query: string) => {
      setSearchQuery(query);
      setIsSearched(true);
    }, 650);
    return (
      <>
        <div className="container mx-auto px-4 py-3 sm:py-0 flex flex-col lg:flex-row items-center justify-between bg-[color:--theme-bg-accent]">
          <div className="flex items-center mb-3 lg:mb-0">
            <Link href="/" className="flex items-center">
              <Logo className=' w-36 md:w-40' />
            </Link>
          </div>
  
          <div className="w-full lg:w-1/2 mb-3 lg:mb-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-dark-accent text-[color:--theme-cl-primary]"
                onChange={(e) => debouncedSearch(e.target.value)}
                onKeyDown={(event: any) => event.key === 'Enter' && router.push("/search?query=" + event.target.value)}
              />
              <div className="absolute left-3 top-2.5">
                <svg className="h-5 w-5 text-dark-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
  
          <div className="flex items-center space-x-4">
            <Link href="/account" className="text-[color:--theme-cl-accent]">
              <AccountIcon />
            </Link>
            <Link href="/wishlist" className="text-[color:--theme-cl-accent]">
              <FevIcon />
            </Link>
            <Link href="/cart" className="text-[color:--theme-cl-accent] relative">
  
              <ShoppingCartIcon className='h-6 w-6' />
  
            </Link>
          </div>
        </div>
  
      </>
    )
}

export default HeaderCenter
