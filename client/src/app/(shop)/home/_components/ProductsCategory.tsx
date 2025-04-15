/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Product, { ProductInterface } from "@/components/ui/card/Product";
import Link from "next/link";

interface ProductsCategoryProps {
  name: string;
  products: ProductInterface[];
  id: number;
  slug: string;
}

const ProductsCategory: React.FC<ProductsCategoryProps> = ({ name, products, slug, id }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="products-category py-8 px-4 md:px-8 box-border" >
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <div className="relative group mb-5">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden group-hover:block z-10"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Products Slider */}
        <div
          className="flex flex-row flex-nowrap overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth gap-x-6 w-full "
          ref={sliderRef}
        >
          {products.map((product, key) => (
            <Product product={product} key={key} />
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden group-hover:block"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <Link 
        href={`/categories/${slug}?prime_category=${id}`} 
        className="flex items-center justify-center md:justify-start w-full md:w-auto text-sm font-medium text-green-600 hover:text-green-800 transition-colors py-2 px-4 rounded-lg border border-transparent"
      >
        View All {name} <ChevronRight size={16} className="ml-2" />
      </Link>
    </div>
  );
};

export default ProductsCategory;