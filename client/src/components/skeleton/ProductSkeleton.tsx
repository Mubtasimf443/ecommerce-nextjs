/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ProductInterface} from '@/components/ui/card/Product'

interface ProductCardProps {
  product: ProductInterface;
}


const ProductSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all w-[310px]">
      {/* Product Image Skeleton */}
      <div className="relative">
        <div className="relative h-64 w-full bg-gray-200 animate-pulse"></div>
        
        {/* Badge Skeletons */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <div className="bg-gray-300 h-5 w-12 rounded animate-pulse"></div>
        </div>
      </div>
      
      {/* Product Info Skeleton */}
      <div className="p-4">
        {/* Category Skeleton */}
        <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mb-2"></div>
        
        {/* Title Skeleton */}
        <div className="h-6 w-full bg-gray-300 rounded animate-pulse mb-2"></div>
        
        {/* Rating Skeleton */}
        <div className="flex items-center mb-2">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
            ))}
          </div>
          <div className="h-3 w-8 bg-gray-200 rounded animate-pulse ml-1"></div>
        </div>
        
        {/* Price Skeleton */}
        <div className="flex items-center">
          <div className="h-6 w-20 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-16 bg-gray-200 rounded animate-pulse ml-2"></div>
        </div>
        
        {/* Button Skeleton */}
        <div className="mt-3 w-full h-10 bg-gray-300 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;