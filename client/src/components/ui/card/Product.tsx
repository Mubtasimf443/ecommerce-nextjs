/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

"use client"
import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '../shadcn/separator';

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
  sold ?:number;
  ordered ?:number;
}

interface ProductCardProps {
  product: ProductInterface;
}

const Product = ({ product }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product page
    // Add to cart logic here
  };

  return (
    <Link className="w-72 h-[20em]" href={`/product/${product.slug}`}>
      <div className="bg-white w-full h-full rounded-md shadow-sm overflow-hidden hover:shadow transition-all">
        {/* Image and Badges */}
        <div className="relative">
          <div className="relative h-48 w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Badges */}
          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
            {product.isNew && <span className="bg-teal-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm">NEW</span>}
            {product.isHot && <span className="bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm">HOT</span>}
            {product.discountPercentage && (
              <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm">{product.discountPercentage}% OFF</span>
            )}
          </div>
        </div>
        
        {/* Info */}
        <div className="p-2">
          <span className=" text-xs font-medium text-[color:--theme-cl-second] uppercase">{product.category}</span>
          <h3 className="text-sm font-medium text-gray-900 mb-0.5 transition-colors line-clamp-2">{product.name}</h3>
          
          {/* Rating */}
          <div className="flex flex-row justify-start items-center mb-1">

            {
              product.sold && (
                <Fragment>
                  <span className='text-xs text-gray-900 mb-0.5 font-normal'>{product.sold} Sold</span>
                  <Separator orientation={"vertical"} className='h-4 w-[1px] mx-1 bg-slate-300' />
                </Fragment>
              )
            }
            
            {
              product.ordered && (
                <Fragment>
                  <span className='text-xs text-gray-900 mb-0.5 font-normal'>{product.ordered} Ordered</span>
                  <Separator orientation={"vertical"} className='h-4 w-[1px] mx-1 bg-slate-300' />
                </Fragment>
              )
            }

            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          
            <span className="text-gray-500 text-xs ml-1">({product.rating.toFixed(1)})</span>
          </div>
          
          {/* Price */}
          <div className="flex items-center">
            <span className="text-sm font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-500 line-through ml-1">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;