// HeroSection.tsx
"use client";

import React from "react";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full relative rounded-lg overflow-hidden">
      <div className="flex flex-col items-center justify-center px-6 md:px-12 text-center py-12 md:pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-[2.3em] font-bold text-[color:--theme-cl-second] mb-4">
          Discover Quality Products
        </h1>
        <p className="text-lg md:text-xl text-[color:--theme-cl-primary] opacity-90 mb-8 max-w-2xl">
          Shop the finest selection curated just for you. Premium quality at competitive prices.
        </p>
        
        {/* Search Bar */}
        <div className="w-full max-w-md relative mb-8">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full py-3 px-4 pr-12 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#01715C] border border-gray-300"
          />
          <Search className="absolute right-4 top-3 text-gray-500 h-5 w-5" />
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/products" 
            className="
            inline-flex items-center font-medium text-sm sm:text-md py-3 px-6 
            bg-[color:--theme-bg-accent] text-[color:--theme-cl-accent] hover:bg-[color:--theme-bg-accent]/90 rounded-full  transition-colors border-2 border-[color:--theme-border-accent]"
          >
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            href="/sale" 
            className="
            flex justify-center items-center rounded-full text-sm sm:text-md text-center font-normal py-3 px-6
            bg-[color:--theme-bg text-[color:--theme-cl-second] transition-colors border-2 border-[color:--theme-border-accent] "
          >
            View Today's Deals
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;