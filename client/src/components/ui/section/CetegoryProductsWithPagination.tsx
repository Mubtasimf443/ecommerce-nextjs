/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"

import { FC, useState ,useEffect, useRef} from "react";
import { ProductInterface } from "../card/Product";
import ProductSkeleton from "../../skeleton/ProductSkeleton";
import SkeletonPagination from "../../skeleton/skeletonPagination";
import { CetegoryPagination } from "@/components/paginations/CetegoryPagination";
import ProductCard from '@/components/ui/card/Product'


const CetegoryProductsWithPagination: FC<{slug: string}> = ({slug}) => {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    let [currentProducts , setCurrentProducts] =useState<ProductInterface[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [isPageUpdating , setIsPageUpdating] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [productsPerPage, setProductsPerPage] = useState<number>(8);
    const cetegoriesAndSlug=new Map<string, string>([
        ["electronics","Electronics"],
        ["clothing", "Clothing"],
        ["home-kitchen", "Home & Kitchen",],
        ["beauty-personal-care", "Beauty & Personal Care"],
        ["sports-outdoors","Sports & Outdoors"],
        ["books-stationery","Books & Stationery"],
        [ "toys-games","Toys & Games"],
        ["jewelry-accessories","Jewelry & Accessories"]
    ])
    useEffect(() => {
        (async function () {
            let response=await fetch(`/api/cetegory/${slug}`);
            if (response.status===200) {
                let data : ProductInterface[]= (await response.json());  
                let arr:ProductInterface[] =[];
                data.map((product,index) => {
                    if (index <= 7) {
                        arr.push(product);
                    }
                })
                setCurrentProducts(arr);
                setProducts(data);
                setLoading(false);
                setIsPageUpdating(false);
            }
           
        })()
    }, []);

    if (loading || isPageUpdating) {
        return (
            <> 
                <div className="container mx-auto px-4 pt-10">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        {cetegoriesAndSlug.get(slug) || 'Products'}
                    </h1>
                </div>
                <div className="flex flex-wrap flex-row gap-x-20 gap-y-10 justify-center items-center py-10 px-10 box-border">
                    {[0,1,2,3,4,5,6,7,8,].map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))}
                </div>
                <div>
                    
                </div>
                <SkeletonPagination />
            </>
        )
    }
    if (products.length === 0) {
        return (
            <>
                <div className="container mx-auto px-4 pt-10">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        {cetegoriesAndSlug.get(slug) || 'Products'}
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center py-16">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">No Products Found</h2>
                        <p className="text-gray-500 mb-8">We couldn't find any products in this category.</p>
                        <a href="/" className="px-6 py-3 text-slate-900 border-2 border-slate-800 font-semibold rounded-lg transition-colors hover:bg-slate-100">
                            Return to Home
                        </a>
                    </div>
                </div>
            </>
        )
    }
    console.log(currentProducts);
    
    return (
        <>
            <div className="container mx-auto px-4 pt-10">
                <h1 className="text-3xl font-bold text-center mb-6">
                    {cetegoriesAndSlug.get(slug ) || 'Products'}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                    {currentProducts.map((product) => (<ProductCard product={product}/>))}
                </div>
                <CetegoryPagination itemsPerPage={productsPerPage} items={products} updatePage={setCurrentPage} />
            </div>
        </>
    );
};

export default CetegoryProductsWithPagination;
