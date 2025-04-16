// SearchPage.tsx
"use client"
import React, { useState } from 'react';
import { Slider } from "@/components/ui/shadcn/slider";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
import { Button } from "@/components/ui/shadcn/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/shadcn/select";
import { Card } from "@/components/ui/shadcn/card";
import { Grid, List, Filter } from "lucide-react";
import Product, { ProductInterface } from '@/components/ui/card/Product'; // Import your Product component
import { demoProducts } from '@/_lib/data/demoProducts';

// Mock data using your ProductInterface

const SearchPage: React.FC = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState("bestMatch");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Mock data for filters
  const categories = ["Vegetables", "Fruits", "Dairy", "Meat", "Beverages"];
  const brands = ["Nature's Best", "Organic Farms", "Fresh Picks", "Wild Harvest", "Culinary Essentials", "Gourmet Selections"];
  const searchQuery = "mushroom";
  const resultsCount = 3002;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Mobile Filter Button */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">
            Search Results
          </h1>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2"
          >
            <Filter size={16} />
            Filters
          </Button>
        </div>

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

        {/* Main content area */}
        <div className="flex-1">
          {/* Search Results Header */}
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

          {/* Products Grid/List */}
          {viewType === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {demoProducts.map(product => (
                <div key={product.id} className="flex justify-center">
                  <Product product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {demoProducts.map(product => (
                <>
                {/* <Card key={product.id} className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative h-48 sm:h-full sm:w-48 shrink-0">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                        {product.isNew && <span className="bg-teal-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm">NEW</span>}
                        {product.isHot && <span className="bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm">HOT</span>}
                        {product.discountPercentage && (
                          <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm">{product.discountPercentage}% OFF</span>
                        )}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-medium uppercase text-blue-600">{product.category}</span>
                        <h3 className="text-md font-medium text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                        
                        <div className="flex flex-row items-center mb-2">
                          {product.sold && (
                            <span className="text-xs text-gray-900 mr-2">{product.sold} Sold</span>
                          )}
                          {product.ordered && (
                            <span className="text-xs text-gray-900 mr-2">{product.ordered} Ordered</span>
                          )}
                        </div>
                        
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-gray-500 text-xs ml-1">({product.rating.toFixed(1)})</span>
                        </div>
                        
                        <div>
                          <span className="font-bold text-gray-900 text-lg">${product.price.toFixed(2)}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <Button size="sm" className="w-full sm:w-auto">Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                </Card> */}
                <Product product={product} style='list' />
                </>
              ))}
            </div>
          )}
          
          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-1">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button 
                  key={page} 
                  variant={page === 1 ? "default" : "outline"} 
                  size="sm" 
                  className="w-8 h-8 p-0"
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;