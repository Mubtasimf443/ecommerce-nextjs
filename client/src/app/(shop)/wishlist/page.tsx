/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


import React from 'react'
import Product , {ProductInterface} from '@/components/ui/card/Product'
import { demoProducts } from '@/_lib/data/demoProducts'

const WishlistPage: React.FC = () => {
    // Sample wishlist items - in a real app, these would come from a state management solution
    const wishlistItems=demoProducts;

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