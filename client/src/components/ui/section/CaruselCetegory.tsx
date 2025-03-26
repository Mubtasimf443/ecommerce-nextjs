/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import { ProductInterface } from '@/components/ui/card/Product';
import ProductCard from '@/components/ui/card/Product';
import { useEffect, useState } from 'react';


function CaruselCetegory({cetegoryName }: {cetegoryName: string }) {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    useEffect(() => {
        fetch(`/api/products?category=${cetegoryName}`)
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    
    return (
       <section className="py-12 bg-gray-50 rounded-xl shadow-sm my-8">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-blue-600">{cetegoryName}</h2>
                <a href={`/category/${cetegoryName.toLowerCase()}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors flex items-center">
                    View All
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
        <div className="relative px-4">
            <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth">
                {products.map((product) => (
                    <div key={product.id} className="flex-none w-64 md:w-72 snap-start">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            {products.length > 4 && (
                <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none px-2">
                    <button onClick={() => document.querySelector('.scrollbar-hide')?.scrollBy({left: -300, behavior: 'smooth'})} 
                            className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md pointer-events-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={() => document.querySelector('.scrollbar-hide')?.scrollBy({left: 300, behavior: 'smooth'})} 
                            className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md pointer-events-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
       </section>
    )
}

export default CaruselCetegory;
