/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface CetegoryCardProps {
  name: string;
  image: string;
  slug: string;
  productCount: number;
}

export default function CetegoryCard({ name, image, slug, productCount }: CetegoryCardProps) {
  return (
    <Link 
      href={`/cetegory/${slug}`} 
      className="block"
    >
      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="relative w-16 h-16 mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-600">{productCount} Products</p>
      </div>
    </Link>
  )
}
