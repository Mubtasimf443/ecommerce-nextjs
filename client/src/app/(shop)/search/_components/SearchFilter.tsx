/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

"use client"

import React from 'react'
import { Funnel, SidebarClose } from 'lucide-react'

import { Button } from '@/components/ui/shadcn/button'
import { Slider } from '@/components/ui/shadcn/slider'
import { Checkbox } from '@/components/ui/shadcn/checkbox'


interface Props {
  mobileFiltersOpen: boolean;
  setPriceRange: (val: any) => void;
  priceRange: number[];
  categories: string[];
  brands: string[]
}


const SearchFilter: React.FC<Props> = ({ mobileFiltersOpen, setPriceRange, priceRange, categories, brands }) => {
  return (
    <React.Fragment>
      {/* Filter sidebar - desktop always visible, mobile conditionally */}
      <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 xl:w-72 shrink-0`}>
        <div className="bg-white p-4 rounded-md shadow-sm sticky top-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Filters</h2>
            <Button variant="ghost" size="sm" className="text-xs">Clear All</Button>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Price Range</h3>
            <Slider
              defaultValue={[0, 50]}
              max={100}
              step={1}
              onValueChange={(value) => setPriceRange(value as number[])}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} />
                  <label htmlFor={`category-${category}`} className="text-sm">{category}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Brands</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={`brand-${brand}`} />
                  <label htmlFor={`brand-${brand}`} className="text-sm">{brand}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Rating</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <label htmlFor={`rating-${rating}`} className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm ml-1">{`& Up`}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Weight Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Weight</h3>
            <div className="space-y-2">
              {["100g", "200g", "250g", "300g", "500g"].map((weight) => (
                <div key={weight} className="flex items-center space-x-2">
                  <Checkbox id={`weight-${weight}`} />
                  <label htmlFor={`weight-${weight}`} className="text-sm">{weight}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Availability Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Availability</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="in-stock" />
                <label htmlFor="in-stock" className="text-sm">In Stock</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="out-of-stock" />
                <label htmlFor="out-of-stock" className="text-sm">Out of Stock</label>
              </div>
            </div>
          </div>

          {/* Apply Filters Button */}
          <Button className="w-full">Apply Filters</Button>
        </div>
      </div>
    </React.Fragment>
  );
};


export default SearchFilter  