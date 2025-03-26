/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { NextResponse } from "next/server";
import { ProductInterface } from "@/components/ui/card/Product";
import { productsMap } from "@/app/products/[slug]/products.map";

export async function GET(request: Request, {params}: {params: Promise<{slug: string}>}) {
    const slug = (await params).slug;
    if (!slug) {
        return new Response("Slug is required", {status: 400});
    }
    if (!productsMap.has(slug)) {
        return new Response("Invalid slug", {status: 400});
    }
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
        },
        {
          id: '9',
          name: 'Casual Cotton T-Shirt',
          price: 19.99,
          originalPrice: 29.99,
          discountPercentage: 33,
          imageUrl: '/images/tshirt.jpg',
          slug: 'casual-cotton-tshirt',
          category: 'Clothing',
          rating: 4.3
        },
        {
          id: '10',
          name: 'Slim Fit Jeans',
          price: 49.99,
          imageUrl: '/images/jeans.jpg',
          slug: 'slim-fit-jeans',
          category: 'Clothing',
          rating: 4.2
        },
        {
          id: '11',
          name: 'Winter Parka Jacket',
          price: 129.99,
          originalPrice: 179.99,
          discountPercentage: 28,
          imageUrl: '/images/jacket.jpg',
          slug: 'winter-parka-jacket',
          category: 'Clothing',
          rating: 4.6
        },
        {
          id: '12',
          name: 'Non-Stick Cookware Set',
          price: 89.99,
          originalPrice: 119.99,
          discountPercentage: 25,
          imageUrl: '/images/cookware.jpg',
          slug: 'non-stick-cookware-set',
          category: 'Home & Kitchen',
          rating: 4.4
        },
        {
          id: '13',
          name: 'Smart Home Assistant',
          price: 99.99,
          imageUrl: '/images/smart-assistant.jpg',
          slug: 'smart-home-assistant',
          category: 'Electronics',
          rating: 4.7
        },
        {
          id: '14',
          name: 'Organic Face Serum',
          price: 34.99,
          imageUrl: '/images/face-serum.jpg',
          slug: 'organic-face-serum',
          category: 'Beauty & Personal Care',
          rating: 4.8
        },
        {
          id: '15',
          name: 'Yoga Mat Premium',
          price: 45.99,
          originalPrice: 59.99,
          discountPercentage: 23,
          imageUrl: '/images/yoga-mat.jpg',
          slug: 'yoga-mat-premium',
          category: 'Sports & Outdoors',
          rating: 4.6
        },
        {
          id: '16',
          name: 'Bestselling Novel Collection',
          price: 49.99,
          imageUrl: '/images/books.jpg',
          slug: 'bestselling-novel-collection',
          category: 'Books & Stationery',
          rating: 4.9
        },
        {
          id: '17',
          name: 'Board Game Family Pack',
          price: 39.99,
          originalPrice: 59.99,
          discountPercentage: 33,
          imageUrl: '/images/board-game.jpg',
          slug: 'board-game-family-pack',
          category: 'Toys & Games',
          rating: 4.7
        },
        {
          id: '18',
          name: 'Sterling Silver Necklace',
          price: 79.99,
          imageUrl: '/images/necklace.jpg',
          slug: 'sterling-silver-necklace',
          category: 'Jewelry & Accessories',
          rating: 4.8
        },
        {
          id: '19',
          name: 'Digital Camera 4K',
          price: 399.99,
          originalPrice: 499.99,
          discountPercentage: 20,
          imageUrl: '/images/camera.jpg',
          slug: 'digital-camera-4k',
          category: 'Electronics',
          rating: 4.6
        },
        {
          id: '20',
          name: 'Designer Sunglasses',
          price: 129.99,
          imageUrl: '/images/sunglasses.jpg',
          slug: 'designer-sunglasses',
          category: 'Jewelry & Accessories',
          rating: 4.4
        },
        {
          id: '21',
          name: 'Stainless Steel Water Bottle',
          price: 24.99,
          originalPrice: 34.99,
          discountPercentage: 29,
          imageUrl: '/images/water-bottle.jpg',
          slug: 'stainless-steel-water-bottle',
          category: 'Sports & Outdoors',
          rating: 4.5
        },
        {
          id: '22',
          name: 'Scented Candle Set',
          price: 29.99,
          imageUrl: '/images/candles.jpg',
          slug: 'scented-candle-set',
          category: 'Home & Kitchen',
          rating: 4.3
        },
        {
          id: '23',
          name: 'Wireless Gaming Mouse',
          price: 59.99,
          originalPrice: 79.99,
          discountPercentage: 25,
          imageUrl: '/images/gaming-mouse.jpg',
          slug: 'wireless-gaming-mouse',
          category: 'Electronics',
          rating: 4.7
        },
        {
          id: '24',
          name: 'Premium Leather Wallet',
          price: 49.99,
          imageUrl: '/images/wallet.jpg',
          slug: 'premium-leather-wallet',
          category: 'Jewelry & Accessories',
          rating: 4.6
        },
        {
          id: '25',
          name: 'Moisturizing Skin Cream',
          price: 19.99,
          originalPrice: 29.99,
          discountPercentage: 33,
          imageUrl: '/images/skin-cream.jpg',
          slug: 'moisturizing-skin-cream',
          category: 'Beauty & Personal Care',
          rating: 4.5
        },
        {
          id: '26',
          name: 'Fitness Tracker Band',
          price: 69.99,
          imageUrl: '/images/fitness-tracker.jpg',
          slug: 'fitness-tracker-band',
          category: 'Electronics',
          rating: 4.4
        },
        {
          id: '27',
          name: 'Decorative Throw Pillows',
          price: 34.99,
          originalPrice: 44.99,
          discountPercentage: 22,
          imageUrl: '/images/pillows.jpg',
          slug: 'decorative-throw-pillows',
          category: 'Home & Kitchen',
          rating: 4.2
        },
        {
          id: '28',
          name: 'Classic Fountain Pen Set',
          price: 39.99,
          imageUrl: '/images/pen-set.jpg',
          slug: 'classic-fountain-pen-set',
          category: 'Books & Stationery',
          rating: 4.8
        },
        {
          id: '29',
          name: 'Remote Control Drone',
          price: 149.99,
          originalPrice: 199.99,
          discountPercentage: 25,
          imageUrl: '/images/drone.jpg',
          slug: 'remote-control-drone',
          category: 'Toys & Games',
          rating: 4.7
        },
        {
          id: '30',
          name: 'Hiking Backpack 40L',
          price: 89.99,
          imageUrl: '/images/backpack.jpg',
          slug: 'hiking-backpack-40l',
          category: 'Sports & Outdoors',
          rating: 4.6
        },
         {
            id: '31',
            name: 'Remote Control Drone',
            price: 149.99,
            originalPrice: 199.99,
            discountPercentage: 25,
            imageUrl: '/images/drone.jpg',
            slug: 'remote-control-drone',
            category: 'Toys & Games',
            rating: 4.7
          },
          {
            id: '32',
            name: 'Hiking Backpack 40L',
            price: 89.99,
            imageUrl: '/images/backpack.jpg',
            slug: 'hiking-backpack-40l',
            category: 'Sports & Outdoors',
            rating: 4.6
          }
      ];
    
    return NextResponse.json(products,{status: 200});
}

