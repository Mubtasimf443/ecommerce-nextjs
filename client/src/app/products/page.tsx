/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import SectionHeading from "@/components/text/SectionHeading";
import Link from "next/link";
import { FC } from "react";


interface productsType {
    name: string;
    slug: string;
    icon_url: string;
}


const ProductsPage: FC = () => {
    const productsTypes :productsType[] = require('./productsTypes.json');
    return (
        <div>
            <SectionHeading heading="Products" subheading="Products" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                {productsTypes.map((product, index) => (
                    <Link
                        key={index} 
                        href={`/products/${product.slug}`} 
                        className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                        <div className="w-16 h-16 flex items-center justify-center mb-2">
                            <img 
                                src={product.icon_url} 
                                alt={product.name} 
                                className="max-w-full max-h-full"
                                // onError={}
                            />
                        </div>
                        <span className="text-center text-sm">{product.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ProductsPage;
