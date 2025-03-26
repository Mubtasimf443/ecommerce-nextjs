/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import React, { useState } from 'react';
import Product from '@/components/ui/card/Product';
import Link from 'next/link';

// Define the types
interface ProductInterface {
  id: number;
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
}

interface FeaturedProductsSectionProps {
  newProducts: ProductInterface[];
  mostLovedProducts: ProductInterface[];
  hotSalesProducts: ProductInterface[];
  discountedProducts: ProductInterface[];
  recommendedProducts: ProductInterface[];
}

type TabType = 'new' | 'mostLoved' | 'hotSales' | 'discounted' | 'recommended';

const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  newProducts,
  mostLovedProducts,
  hotSalesProducts,
  discountedProducts,
  recommendedProducts
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('new');

  // Get current products based on active tab
  const getCurrentProducts = () => {
    switch (activeTab) {
      case 'new':
        return newProducts;
      case 'mostLoved':
        return mostLovedProducts;
      case 'hotSales':
        return hotSalesProducts;
      case 'discounted':
        return discountedProducts;
      default:
        return newProducts;
    }
  };

  // Tab titles and their corresponding values
  const tabs = [
    { title: 'New Arrivals', value: 'new' as TabType },
    { title: 'Most Loved', value: 'mostLoved' as TabType },
    { title: 'Hot Sales', value: 'hotSales' as TabType },
    { title: 'Discounted', value: 'discounted' as TabType },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`px-4 py-2 mx-1 my-1 rounded-full transition-colors ${
                activeTab === tab.value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        
        {/* Products Display - Grid on desktop, Carousel on mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCurrentProducts().slice(0, 8).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-5 -mx-4 px-4">
            {getCurrentProducts().map((product) => (
              <div key={product.id} className="snap-start w-4/5 flex-shrink-0 mr-4">
                <Product product={product} />
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-2 pointer-events-none">
            <button className="bg-white rounded-full p-2 shadow-md pointer-events-auto" 
                    onClick={() => {
                      const container = document.querySelector('.overflow-x-auto');
                      if (container) container.scrollBy({left: -container.clientWidth * 0.8, behavior: 'smooth'});
                    }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="bg-white rounded-full p-2 shadow-md pointer-events-auto"
                    onClick={() => {
                      const container = document.querySelector('.overflow-x-auto');
                      if (container) container.scrollBy({left: container.clientWidth * 0.8, behavior: 'smooth'});
                    }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-10">
          <Link href={`/products/${activeTab}`} className="inline-block px-6 py-3 bg-white border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors">
            View All {activeTab === 'new' ? 'New Arrivals' :
                     activeTab === 'mostLoved' ? 'Most Loved Products' :
                     activeTab === 'hotSales' ? 'Hot Sales' :
                     activeTab === 'discounted' ? 'Discounted Products' : 
                     'Recommended Products'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;