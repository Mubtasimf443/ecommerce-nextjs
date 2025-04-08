/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


"use client"

import SearchHeader from '@/components/layout/SearchHeader';
import SearchFilter  from '@/components/ui/card/SearchFilter';
import  ProductsContainer  from '@/components/ui/section/ProductsContainer';
import { useState } from 'react';
import ProductsPagination from '@/components/paginations/SearchPagePagination';
import ErrorBoundary  from "@/components/custom/ErrorBoundary";

const SearchPage :React.FC= () => {
  let [showFilters,setShowFilters ]=useState<boolean>(false)
  let [page,setPage ]=useState<number>(1)
  return (
    <ErrorBoundary> 
   <div>
   <SearchHeader setfilters={setShowFilters} />
   {/* Prodcuts container and filter */}
   <div className='w-fit mx-auto flex flex-row justify-center items-start gap-x-3 sm:gap-x-4 md:gap-x-12 py-3 sm:py-4 md:py-10 px-3 sm:px-5  md:px-8 lg:px-14'>
    {/* filter first */}
    <SearchFilter showFilters={showFilters} setShowFilters={setShowFilters}/>
    {/* products container */}
    <ProductsContainer showFilters={showFilters} />
   </div>

   <ProductsPagination totalItems={100} itemsPerPage={12} onPageChange={setPage} initialPage={page} />
   </div>
   </ErrorBoundary>
  );
};

export default SearchPage;
