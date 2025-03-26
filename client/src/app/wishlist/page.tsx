/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


import React from 'react'
import Product from '@/components/ui/card/Product'

export interface ProductInterface {
    id: any;
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

const WishlistPage: React.FC = () => {
    // Sample wishlist items - in a real app, these would come from a state management solution
    const wishlistItems: ProductInterface[] = [
        { 
            id: 1, 
            name: "Wireless Headphones", 
            price: 79.99, 
            imageUrl: "/images/products/headphones.jpg",
            rating: 4.5,
            category: "electronics",
            slug: "wireless-headphones"
        },
        { 
            id: 2, 
            name: "Smartphone Case", 
            price: 24.99, 
            imageUrl: "/images/products/phone-case.jpg",
            rating: 4.2,
            category: "accessories",
            slug: "smartphone-case"
        },
        { 
            id: 3, 
            name: "USB-C Cable", 
            price: 12.99, 
            imageUrl: "/images/products/cable.jpg",
            rating: 4.0,
            category: "electronics",
            slug: "usb-c-cable"
        },
    ];

    return (
        <div className="bg-dark-primary text-dark-text-primary min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
                
                {wishlistItems.length === 0 ? (
                    <div className="text-center py-12">
                        <h2 className="text-2xl mb-4">Your wishlist is empty</h2>
                        <p className="mb-6">Save items you're interested in for later.</p>
                        <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">
                            Browse Products
                        </a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishlistItems.map((item) => (
                            <Product 
                                key={item.id}
                                product={item}
                            
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default WishlistPage;