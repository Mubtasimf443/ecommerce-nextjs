/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { FC } from "react";
import SectionHeading from "@/components/text/SectionHeading";
import { ProductsPagination } from "@/components/ui/section/ProductsPagination";
import { productsMap } from "./products.map";
import Link from "next/link";

const ProductPage: FC<{params: Promise<{slug: string}>}> = async ({params}) => {
    let slug =(await params).slug;

    if (!productsMap.has(slug)) {
        return (<>
            <div className="flex flex-col items-center justify-center py-10">
                <h2 className="text-2xl font-semibold mb-4">No product found</h2>
                <p className="text-gray-600 mb-6">The product you are looking for does not exist.</p>
                <Link href="/products" className="px-4 py-2 bg-primary text-dark rounded hover:bg-primary/90 transition-colors">
                    Go back to products
                </Link>
            </div>
        </>);
    }

    
    return (
        <div>
            <SectionHeading heading={productsMap.get(slug) || ""} subheading="Products"  />
            <ProductsPagination slug={slug} />
        </div>
    )
}

export default ProductPage;

