/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/



// components/RecommendedProducts.tsx
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductInterface as Product } from '@/components/ui/card/Product';


interface RecommendedProductsProps {
  title?: string;
  products: Product[];
  viewAllLink?: string;
}


const RecommendedProducts: FC<RecommendedProductsProps> = ({
  title = "Recommended For You",
  products = [],
  viewAllLink = "/products"
}) => {
  return (
    <section className="bg-blue-800 rounded-lg p-6 shadow-lg my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-2xl font-semibold">{title}</h2>
        <Link href={viewAllLink} className="text-white text-sm border border-white/50 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 w-full">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1 truncate">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                )}
                {product.discountPercentage && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">{product.discountPercentage}% OFF</span>
                )}
              </div>
              <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;