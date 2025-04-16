/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import React, { FC, useState } from 'react';
// import { Search, Funnel, SlidersHorizontal } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/shadcn/button';
import { Select , SelectValue ,SelectContent , SelectItem ,SelectTrigger} from '@/components/ui/shadcn/select';

interface Props {
  resultsCount :number;
  searchQuery :string;
  sortOption : string ;
  setSortOption : (val : any) => void;
  viewType : string ;
  setViewType : (val : any) => void
}


const  SearchRasultsHeader :FC<Props> =({resultsCount ,searchQuery, sortOption,setSortOption,viewType ,setViewType}) => {
  return (
    <React.Fragment>
      <div className="bg-white p-4 rounded-md shadow-sm mb-6">
        <div className="hidden lg:block">
          <h1 className="text-xl font-bold mb-1">
            {resultsCount} items found for "{searchQuery}"
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-gray-500 hidden sm:block">
            Showing 1-20 of {resultsCount} results
          </p>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="flex items-center gap-2 flex-1 sm:flex-initial">
              <span className="text-sm whitespace-nowrap hidden sm:block">Sort by:</span>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Best Match" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bestMatch">Best Match</SelectItem>
                  <SelectItem value="priceLowToHigh">Price: Low to High</SelectItem>
                  <SelectItem value="priceHighToLow">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="topRated">Top Rated</SelectItem>
                  <SelectItem value="mostSold">Most Sold</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center border rounded-md">
              <Button
                variant={viewType === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewType('grid')}
                className="rounded-r-none"
              >
                <Grid size={16} />
              </Button>
              <Button
                variant={viewType === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewType('list')}
                className="rounded-l-none"
              >
                <List size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SearchRasultsHeader;
