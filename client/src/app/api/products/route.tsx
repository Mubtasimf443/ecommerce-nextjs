/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { NextResponse } from 'next/server';
import {ProductInterface} from '@/components/ui/card/Product'

export async function GET(request: Request) {
    const products: ProductInterface[] = [
      {
        id: '1',
        name: 'Wireless Headphones',
        price: 79.99,
        originalPrice: 129.99,
        discountPercentage: 38,
        imageUrl: '/images/headphones.jpg',
        slug: 'wireless-headphones',
        category: 'Electronics',
        rating: 4.5
      },
      {
        id: '2',
        name: 'Smart Watch Series 5',
        price: 199.99,
        imageUrl: '/images/smartwatch.jpg',
        slug: 'smart-watch-series-5',
        category: 'Electronics',
        rating: 4.5
      },
      {
        id: '3',
        name: 'Bluetooth Speaker',
        price: 49.99,
        originalPrice: 69.99,
        discountPercentage: 28,
        imageUrl: '/images/speaker.jpg',
        slug: 'bluetooth-speaker',
        category: 'Electronics',
        rating: 4.5
      },
      {
        id: '4',
        name: 'Laptop Sleeve Case',
        price: 24.99,
        imageUrl: '/images/laptop-sleeve.jpg',
        slug: 'laptop-sleeve-case',
        category: 'Electronics',
        rating: 4.5
      },
      {
        id: '5',
        name: 'Wireless Charging Pad',
        price: 29.99,
        imageUrl: '/images/charging-pad.jpg',
        slug: 'wireless-charging-pad',
        category: 'Electronics',
        rating: 4.5
      },
      {
        id: '6',
        name: 'Noise Cancelling Earbuds',
        price: 89.99,
        originalPrice: 119.99,
        discountPercentage: 25,
        imageUrl: '/images/earbuds.jpg',
        slug: 'noise-cancelling-earbuds',
        category: 'Electronics',
        rating: 4.5
      },
      {
        id: '7',
        name: 'Portable Power Bank',
        price: 39.99,
        imageUrl: '/images/powerbank.jpg',
        slug: 'portable-power-bank',
        category: 'Electronics',
        rating: 4.5
      },
      {
        id: '8',
        name: 'Smartphone Gimbal',
        price: 119.99,
        originalPrice: 149.99,
        discountPercentage: 20,
        imageUrl: '/images/gimbal.jpg',
        slug: 'smartphone-gimbal',
        category: 'Electronics',
        rating: 4.5

      }
    ]
    return NextResponse.json(products);
}




