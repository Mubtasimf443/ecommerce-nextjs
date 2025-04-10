/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


import React, { FC } from 'react'
import type { Metadata } from "next";

import HeroSection from './_components/HeroSection';
import CategoryGrid from './_components/CategoryGrid';
import FeaturedProductsSection from './_components/FeaturedProductsSection';
import { demoProducts } from '@/_lib/data/demoProducts';






export const metadata: Metadata = {
    title: "Shukhria Online Store",
    description: "Explore Products, Fashion , Home Appliences , tools and others Products In Your Prices",
};



const page: FC = () => {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <FeaturedProductsSection
        newProducts={demoProducts}
        mostLovedProducts={demoProducts}
        hotSalesProducts={demoProducts}
        recommendedProducts={demoProducts}
        discountedProducts={demoProducts}
      />
    </>
  )
}

export default page
