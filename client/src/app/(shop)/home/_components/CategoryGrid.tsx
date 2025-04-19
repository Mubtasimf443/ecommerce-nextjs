/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

const categories: Category[] = [
  { id: 1, name: "Clothing Category", image: "/icons/category/clothing.jpeg", slug: "/categories/clothing?prime_category=1" },
  { id: 2, name: "Shoes Category", image: "/icons/category/shoes.jpg", slug: "/categories/shoes?prime_category=2" },
  { id: 3, name: "Electronics Category", image: "/icons/category/Electronics.jpg", slug: "/categories/electronics?prime_category=3" },
  { id: 4, name: "Home & Kitchen Category", image: "/icons/category/HomeAndKitchen.jpg", slug: "/categories/home-kitchen?prime_category=4" },
  { id: 5, name: "Beauty & Personal Care Category", image: "/icons/category/beautyProducts.jpg", slug: "/categories/beauty-personal-care?prime_category=5" },
  { id: 6, name: "Sports & Outdoors Category", image: "/icons/category/sports-products.webp", slug: "/categories/sports-outdoors?prime_category=6" },
  { id: 7, name: "Books & Stationery Category", image: "/icons/category/books.jpg", slug: "/categories/books-stationery?prime_category=7" },
  { id: 8, name: "Toys & Games Category", image: "/icons/category/toys.jpg", slug: "/categories/toys-games?prime_category=8" },
  { id: 9, name: "Jewelry & Accessories Category", image: "/icons/category/jwelry.jpeg", slug: "/categories/jewelry-accessories?prime_category=9" },
  { id: 10, name: "Foods Category", image: "/icons/category/foods.jpeg", slug: "/categories/foods?prime_category=10" },
  { id: 11, name: "Luxury Category", image: "/icons/category/Luxury.jpeg", slug: "/categories/luxury?prime_category=11" },
  { id: 12, name: "Health & Wellness Category", image: "/icons/category/healthAndWellness.jpg", slug: "/categories/health-wellness?prime_category=12" },
  { id: 13, name: "Pet Supplies Category", image: "/icons/category/pets.jpg", slug: "/categories/pet-supplies?prime_category=13" },
  { id: 14, name: "Lifestyle Category", image: "/icons/category/Lifestyle.jpg", slug: "/categories/lifestyle?prime_category=14" },
  { id: 15, name: "Vehicle Category", image: "/icons/category/Vehicle.avif", slug: "/categories/vehicle?prime_category=15" },
];
export default function CategoryGrid() {
  return (
    <div className="py-8 px-4 md:px-8">
      <h2 className="text-xl font-bold text-center mb-6">Browse Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {
          categories.map((category) => {
            return (
              <Link
                href={category.slug}
                key={category.id}
                className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200 bg-white border  border-gray-100"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  className="w-16 h-16 mb-2 cursor-pointer"
                  loading="lazy"
                  width={100}
                  height={100}
                />
                <h3 className="font-medium text-sm text-center">{category.name}</h3>
                <span
                  className="text-xs text-gray-500 cursor-pointer"
              
                >View products </span>
              </Link>
            )
          }
          )}
      </div>
    </div>
  );
}
