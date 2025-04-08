/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { FC } from "react";

import CetegoryCard from "@/components/ui/card/CetegoryCard";
import CaruselCetegory from "@/components/ui/section/CaruselCetegory";

const Categories: FC = () => {
  // Sample categories data
  const categories = [
    {
      name: "Electronics",
      image: "/images/categories/electronics.jpg",
      slug: "electronics",
      productCount: 42
    },
    {
      name: "Clothing",
      image: "/images/categories/clothing.jpg",
      slug: "clothing",
      productCount: 36
    },
    {
      name: "Home & Kitchen",
      image: "/images/categories/home-kitchen.jpg",
      slug: "home-kitchen",
      productCount: 28
    },
    {
      name: "Beauty & Personal Care",
      image: "/images/categories/beauty.jpg",
      slug: "beauty-personal-care",
      productCount: 24
    },
    {
      name: "Sports & Outdoors",
      image: "/images/categories/sports.jpg",
      slug: "sports-outdoors",
      productCount: 19
    },
    {
      name: "Books & Media",
      image: "/images/categories/books.jpg",
      slug: "books-media",
      productCount: 31
    },
    {
      name: "Toys & Games",
      image: "/images/categories/toys.jpg",
      slug: "toys-games",
      productCount: 22
    },
    {
      name: "Automotive",
      image: "/images/categories/automotive.jpg",
      slug: "automotive",
      productCount: 15
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">All Categories</h1>
      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <CaruselCetegory
         cetegoryName={category.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
