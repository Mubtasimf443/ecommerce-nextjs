// SearchPage.tsx
"use client"
import React, { useRef, useState } from 'react';
import { Slider } from "@/components/ui/shadcn/slider";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
import { Button } from "@/components/ui/shadcn/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/shadcn/select";
import { Card } from "@/components/ui/shadcn/card";
import { Grid, List, Filter } from "lucide-react";
import Product, { ProductInterface } from '@/components/ui/card/Product'; // Import your Product component
import { demoProducts } from '@/_lib/data/demoProducts';
import MobileFilter from './MobileFilter';
import SearchRasultsHeader from './SearchRasultsHeader';
import ProductsContainer from './ProductsContainer';
import SearchFilter from './SearchFilter';
import SearchPagePagination from './SearchPagePagination';

// Mock data using your ProductInterface

const SearchPage: React.FC = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState("bestMatch");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Mock data for filters
  const categories = ["Vegetables", "Fruits", "Dairy", "Meat", "Beverages"];
  const brands = ["Nature's Best", "Organic Farms", "Fresh Picks", "Wild Harvest", "Culinary Essentials", "Gourmet Selections"];
  const searchQuery = useRef<string>("mushroom");
  const resultsCount = 3002;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">

        <MobileFilter set={setMobileFiltersOpen} state={mobileFiltersOpen} />

        <SearchFilter
          categories={categories}
          brands={brands}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
          mobileFiltersOpen={mobileFiltersOpen}
        />
        {/* Main content area */}
        <div className="flex-1">
          {/* Search Results Header */}
          <SearchRasultsHeader
            searchQuery={searchQuery.current}
            resultsCount={resultsCount}
            sortOption={sortOption}
            setSortOption={setSortOption}
            viewType={viewType}
            setViewType={setViewType}
          />

          {/* Products Grid/List */}
          <ProductsContainer
            viewType={viewType}
            products={demoProducts}
          />

          {/* Pagination */}
          <SearchPagePagination
            onPageChange={(page: number) => { }}
            currentPage={3}
            totalPages={20}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;