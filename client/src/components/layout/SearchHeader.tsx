/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/



import React, { useState } from 'react';
import { Search, Funnel, SlidersHorizontal } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

function SearchHeader({setfilters}: {setfilters: React.Dispatch<React.SetStateAction<boolean>>}) {
 
 
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query') || '');
  
  const debouncedSearch = useDebouncedCallback((query: string) => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  }, 650);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    debouncedSearch(e.target.value);
  };
  return (
    <div className="w-full bg-dark-primary shadow-md py-3 sm:py-4 px-3 sm:px-5 md:px-8 lg:px-14 sticky top-0 z-10 flex flex-row items-center justify-between sm:justify-center gap-x-3 sm:gap-x-4 md:gap-x-9 bg-white">
      <button 
       className="flex flex-row items-center gap-1 sm:gap-2 bg-dark-accent hover:bg-dark-accent/90 transition-colors text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 bg-black"
        onClick={() => setfilters(previousFilter => !previousFilter)}
       >
        <Funnel className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        <span className="text-white text-xs sm:text-sm hidden md:block font-medium">Filters</span>
      </button>
      {/* search bar */}
      <div className="relative flex flex-row items-center gap-2 border border-dark-secondary bg-dark-secondary/20 focus-within:border-dark-accent rounded-full px-3 sm:px-4 py-2 w-full sm:w-3/4 md:w-2/3 lg:w-2/4 transition-all">
        <Search className="w-4 h-4 sm:w-5 sm:h-5 text-dark-text-secondary flex-shrink-0" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && searchQuery.trim() && router.push(`/search?query=${encodeURIComponent(searchQuery)}`)}
          placeholder="Search products..." 
          className="w-full bg-transparent outline-none text-sm sm:text-base text-dark-text-primary placeholder:text-dark-text-secondary truncate"
        />
        {searchQuery && (
          <button 
            onClick={() => {
              setSearchQuery('');
              router.push('/search');
            }}
            className="absolute right-3 text-dark-text-secondary hover:text-dark-text-primary"
          >
            ✕
          </button>
        )}
      </div>
      <button className="flex-shrink-0 md:hidden p-2 hover:bg-dark-secondary/30 rounded-full transition-colors">
        <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-dark-text-secondary" />
      </button>
    </div>
  );
}

export default SearchHeader;
