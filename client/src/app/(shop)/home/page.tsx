/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


import React, { FC, Fragment } from 'react'
import type { Metadata } from "next";

import HeroSection from './_components/HeroSection';
import CategoryGrid from './_components/CategoryGrid';
import FeaturedProductsSection from './_components/FeaturedProductsSection';
import { demoProducts } from '@/_lib/data/demoProducts';
import ProductsCategory from './_components/ProductsCategory';
import PrimeCategories from '@/_lib/data/products/PrimeCategories';






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

      {/* Cetegories */}

      {
        PrimeCategories.map((element, key) => (
          <Fragment key={key}>
            <ProductsCategory
              name={element.name}
              products={demoProducts}
              slug={element.slug}
              id={element.id}
            />
          </Fragment>
        ))
      }
    </>
  )
}

export default page
