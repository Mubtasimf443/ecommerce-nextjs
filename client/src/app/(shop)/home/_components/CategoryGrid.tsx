/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
"use client";
import React from "react";

interface Category {
  id: number;
  name: string;
  image: string;
  productCount: number;
}

const categories: Category[] = [
  { id: 1, name: "Clothing", image: "/images/product.svg", productCount: 120 },
  { id: 2, name: "Electronics", image: "/images/product.svg", productCount: 85 },
  { id: 3, name: "Laptops", image: "/images/product.svg", productCount: 45 },
  { id: 4, name: "Furniture", image: "/images/product.svg", productCount: 67 },
  { id: 5, name: "Books", image: "/images/product.svg", productCount: 93 },
  { id: 6, name: "Gifts", image: "/images/product.svg", productCount: 38 },
  { id: 7, name: "Shoes", image: "/images/product.svg", productCount: 74 },
  { id: 8, name: "Watches", image: "/images/product.svg", productCount: 28 },
  { id: 9, name: "Home Decor", image: "/images/product.svg", productCount: 52 },
];

export default function CategoryGrid() {
  return (
    <div className="py-8 px-4 md:px-8">
      <h2 className="text-xl font-bold text-center mb-6">Browse Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-200 bg-white"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-16 h-16 mb-2"
            />
            <h3 className="font-medium text-sm">{category.name}</h3>
            <p className="text-xs text-gray-500">{category.productCount} products</p>
          </div>
        ))}
      </div>
    </div>
  );
}
