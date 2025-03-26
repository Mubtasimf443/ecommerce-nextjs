/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

"use client"

import React from 'react'
import { Funnel, SidebarClose } from 'lucide-react'
import Checkbox from '@/components/ui/elements/Checkbox'
import ModernSlider from '@/components/ui/elements/ModernSlider'


const SearchFilter: React.FC<{ showFilters: boolean ,setShowFilters: React.Dispatch<React.SetStateAction<boolean>> }> = ({ showFilters, setShowFilters }) => {
    return (
      <div
        className={
          `max-sm:w-1/2 bg-white max-lg:w-4/12 md:w-1/4 bg-dark-primary shadow-lg 
          rounded-lg py-4 sm:py-5 px-4 sm:px-6 md:px-8 lg:px-10 max-md:fixed lg:sticky top-0 left-0  
          flex-col transition-transform 
          duration-300 ease-in-out ${showFilters ? 'flex' : 'hidden'} z-20 md:z-0  
          h-[100vh] overflow-x-hidden overflow-y-scroll`
        }
      >
        <div className='flex flex-row items-center justify-between mb-5'>
          <h3 className='text-dark-text-primary font-semibold text-lg'>Filters</h3>
          <div className='flex flex-row items-center justify-between gap-1 sm:gap-2 bg-dark-accent hover:bg-dark-accent/90 transition-all duration-200 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 cursor-pointer shadow-sm'>
            <Funnel className='w-4 h-4 sm:w-5 sm:h-5 text-white' />
            <span className='text-white text-xs sm:text-sm hidden md:block font-medium'>Filters</span>
          </div>
          <button onClick={() => setShowFilters(false)}>
            <SidebarClose className=' size-5 text-slate-800' />
          </button>
        </div>
        
        {/* Price Range Slider */}
        <div className='mb-6'>
          <ModernSlider 
            label='Price Range'
            min={50}
            max={50000}
            step={50}
            defaultValue={100}
            
            
            
          />
        </div>
        {/* Rating Slider */}
        <div className='mb-6'>
          <ModernSlider 
            label='Rating'
            min={1}
            max={5}
            step={1}
            defaultValue={3}
           
          />
        </div>
        <div className='mb-6'>
          <ModernSlider 
            label='Weight'
            min={0.1}
            max={100}
            step={1}
            defaultValue={50}
          />
        </div>
        
        {/* Categories */}
        <div className='mb-6'>
          <h4 className='text-dark-text-primary font-medium mb-3 flex items-center'>
            <span className='border-l-4 border-dark-accent pl-2'>Categories</span>
          </h4>
          <div className='flex flex-col space-y-2.5 pl-1'>
            {['Footwear', 'Outerwear', 'T-Shirts', 'Pants', 'Accessories', 'Bags'].map((category) => (
              <Checkbox key={category} label={category} />
            ))}
          </div>
        </div>
        
        {/* Product Type */}
        <div className='mb-6'>
          <h4 className='text-dark-text-primary font-medium mb-3 flex items-center'>
            <span className='border-l-4 border-dark-accent pl-2'>Product Type</span>
          </h4>
          <div className='flex flex-col space-y-2.5 pl-1'>
            {['Casual', 'Formal', 'Sports', 'Seasonal', 'Limited Edition'].map((type) => (
              <Checkbox key={type} label={type} />
            ))}
          </div>
        </div>
        
        {/* Brands */}
        <div className='mb-6'>
          <h4 className='text-dark-text-primary font-medium mb-3 flex items-center'>
            <span className='border-l-4 border-dark-accent pl-2'>Brands</span>
          </h4>
          <div className='flex flex-col space-y-2.5 pl-1'>
            {['Nike', 'Adidas', 'H&M', "Levi's", 'Gap', 'North Face', 'Coach', 'Ray-Ban'].map((brand) => (
              <Checkbox key={brand} label={brand} />
            ))}
          </div>
        </div>
        
        {/* Availability */}
        <div className='mb-6'>
          <h4 className='text-dark-text-primary font-medium mb-3 flex items-center'>
            <span className='border-l-4 border-dark-accent pl-2'>Features</span>
          </h4>
          <Checkbox label='In Stock Only' />
          <Checkbox label='Is Branded' />
          <Checkbox label='Has Warranty' />
          <Checkbox label='Has Return Policy' />
          <Checkbox label='Has Discount' />
        </div>
        
        {/* Apply/Reset Buttons */}
        <div className='flex flex-col sm:flex-row space-y-2 sm:space-x-3 sm:space-y-0 mt-4'>
          <button className=' bg-dark-accent text-black px-4 py-2.5 rounded-md text-sm font-medium hover:bg-dark-accent/90 transition-all duration-200 flex-1 shadow-sm border border-dark-accent' >
            Apply Filters 
          </button>
          <button className='border border-dark-accent text-dark-accent px-4 py-2.5 rounded-md text-sm font-medium hover:bg-dark-accent/10 transition-all duration-200 shadow-sm'>
            Reset
          </button>
        </div>
      </div>
    );
  };


export default SearchFilter  