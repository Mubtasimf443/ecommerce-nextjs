/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the types
export interface ProductInterface {
  id: any;
  name: string;
  slug: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  isNew?: boolean;
  isHot?: boolean;
  discountPercentage?: number;
  brand: string | undefined;
  inStock: boolean | undefined;
}

interface ProductCardProps {
  product: ProductInterface;
}

const Product: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link className="w-[310px]" href={`/product/${product.slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
        {/* Product Image with Badges */}
        <div className="relative">
          <div className="relative h-64 w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Conditional Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            )}
            {product.isHot && (
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                HOT
              </span>
            )}
            {product.discountPercentage && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {product.discountPercentage}% OFF
              </span>
            )}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <span className="text-xs text-gray-500 uppercase">{product.category}</span>
          <h3 className="text-lg font-medium text-gray-900 mb-1 hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
          
          {/* Star Rating */}
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
            <span className="text-gray-500 text-xs ml-1">({product.rating ? product.rating.toFixed(1) : '0.0'})</span>
          </div>
          
          {/* Price */}
          <div className="flex items-center">
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Add to Cart Button */}
          <button 
            className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
            onClick={(e) => {
              e.preventDefault(); // Prevent navigation to product page
              // Add to cart logic here
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;