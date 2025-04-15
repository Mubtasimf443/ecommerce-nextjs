/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { useRouter } from 'next/navigation';
import React, { FC, useState, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce';
import Logo from '../../custom/Logo';
import { Heart as FavIcon, UserRound as AccountIcon, ShoppingCart as ShoppingCartIcon, Search as SearchIcon } from 'lucide-react'
import Link from 'next/link';

const HeaderCenter: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isSearched && searchQuery.trim()) {
      router.push(`/search?query=${searchQuery}`);
    }
  }, [searchQuery, isSearched, router]);

  const debouncedSearch = useDebouncedCallback((query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setIsSearched(true);
    }
  }, 650);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="w-full mx-auto px-4 py-3 lg:py-0 flex flex-col lg:flex-row items-center justify-between bg-[color:--theme-bg-accent]">
      <div className="flex items-center mb-1 lg:mb-0">
        <Link href="/" className="flex items-center">
          <Logo className="w-36 md:w-40" />
        </Link>
      </div>

      <div className="w-full lg:w-1/2 mb-3 lg:mb-0">
        <div className={`relative flex items-center transition-all duration-300 ${isFocused ? 'ring-2 ring-green-500 shadow-lg' : 'shadow-md'} rounded-full bg-white`}>
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full rounded-full pl-5 pr-14 py-3 focus:outline-none border-none text-[color:--theme-cl-primary] bg-transparent"
            onChange={(e) => {
              debouncedSearch(e.target.value);
              setSearchQuery(e.target.value);
            }}
            onKeyDown={(event: React.KeyboardEvent) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button 
            onClick={handleSearch}
            className="absolute right-1 p-2 bg-[color:--theme-bg-accent] hover:bg-green-600 rounded-full transition-colors duration-200 text-white"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <Link href="/account" className="text-[color:--theme-cl-accent] hover:text-green-500 transition-colors duration-200">
          <AccountIcon className="h-6 w-6" />
        </Link>
        <Link href="/wishlist" className="text-[color:--theme-cl-accent] hover:text-green-500 transition-colors duration-200">
          <FavIcon className="h-6 w-6" />
        </Link>
        <Link href="/cart" className="text-[color:--theme-cl-accent] hover:text-green-500 transition-colors duration-200 relative">
          <ShoppingCartIcon className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
        </Link>
      </div>
    </div>
  );
}

export default HeaderCenter;