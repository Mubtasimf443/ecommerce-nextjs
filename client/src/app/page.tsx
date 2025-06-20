/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import type { Metadata } from "next";

import { redirect } from "next/navigation";


export const metadata: Metadata = {
  title: "My Portfolio Site",
  description: "Generated by create next app",
};

export default function Home() {
  redirect("/home")
  return (
    <></>
  );
}


function generateProducts(count: number, type: string) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `${type} Product ${i + 1}`,
    slug: `${type.toLowerCase()}-product-${i + 1}`,
    imageUrl: `/images/product.svg`,
    price: 19.99 + i * 10,
    originalPrice: type === 'Discounted' ? (19.99 + i * 10) * 1.25 : undefined,
    category: ['Electronics', 'Clothing', 'Home & Kitchen', 'Beauty'][i % 4],
    rating: 3 + Math.random() * 2,
    isNew: type === 'New',
    isHot: type === 'Hot Sales',
    discountPercentage: type === 'Discounted' ? 20 : undefined
  }));
};