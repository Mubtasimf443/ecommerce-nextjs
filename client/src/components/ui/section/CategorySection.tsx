/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
// components/CategorySection.tsx
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import CetegoryCard from '@/components/ui/card/CetegoryCard';

// Define the types for our props
interface Category {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  productCount: number;
}


const CategorySection: React.FC = () => {
    const categories = [
        {
            id: 1,
            name: "Electronics",
            slug: "electronics",
            imageUrl: "https://img.icons8.com/?size=100&id=1581&format=png&color=000000", // Laptop, tech
            productCount: 42
        },
        {
            id: 2,
            name: "Clothing",
            slug: "clothing",
            imageUrl: "https://img.icons8.com/?size=100&id=Y3iQ69HB7mSM&format=png&color=000000", // Clothing rack
            productCount: 65
        },
        {
            id: 3,
            name: "Home & Kitchen",
            slug: "home-kitchen",
            imageUrl: "https://img.icons8.com/?size=100&id=8049&format=png&color=000000", // Kitchen appliances
            productCount: 38
        },
        {
            id: 4,
            name: "Beauty & Personal Care",
            slug: "beauty-personal-care",
            imageUrl: "https://img.icons8.com/?size=100&id=23626&format=png&color=000000", // Cosmetics, skincare
            productCount: 29
        },
        {
            id: 5,
            name: "Sports & Outdoors",
            slug: "sports-outdoors",
            imageUrl: "https://img.icons8.com/?size=100&id=dWfWT12Ikhb3&format=png&color=000000", // Sports equipment
            productCount: 47
        },
        {
            id: 6,
            name: "Books & Stationery",
            slug: "books-stationery",
            imageUrl: "https://img.icons8.com/?size=100&id=22943&format=png&color=000000", // Books, pens
            productCount: 53
        },
        {
            id: 7,
            name: "Toys & Games",
            slug: "toys-games",
            imageUrl: "https://img.icons8.com/?size=100&id=B6Wya21Sto9f&format=png&color=000000", // Toys, board games
            productCount: 31
        },
        {
            id: 8,
            name: "Jewelry & Accessories",
            slug: "jewelry-accessories",
            imageUrl: "https://img.icons8.com/?size=100&id=22943&format=png&color=000000", // Jewelry, watches
            productCount: 24
        }
    ];
    return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CetegoryCard
              key={category.id}
              name={category.name}
              image={category.imageUrl}
              slug={category.slug}
              productCount={category.productCount}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/categories" className="px-6 py-3 text-slate-900 border-2 border-slate-800 font-semibold rounded-lg transition-colors">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;