/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import { FC, useState, useEffect } from "react";
import Product,{ProductInterface } from '@/components/ui/card/Product'
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
interface ProductsPaginationProps {
  slug: string;
}
import React from 'react'
import SkeletonPagination from "@/components/skeleton/skeletonPagination";
import { CetegoryPagination } from "@/components/paginations/CetegoryPagination";
export const ProductsPagination :FC<ProductsPaginationProps> = ({slug}) => {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [currentProducts, setCurrentProducts] = useState<ProductInterface[]>([]);

    useEffect(() => {
        (async function () {
            let response=await fetch(`/api/cetegory/${slug}`);
            if (response.status===200) {
                let data : ProductInterface[]= (await response.json()); 
                setProducts(data);
                setIsLoading(false);
                setCurrentProducts(data.slice(0,10));
            }
        })()
    }, []);


    if (isLoading) {
        return (
            <>
            <div className="flex flex-wrap flex-row gap-x-20 gap-y-10 justify-center items-center py-10 px-10 box-border">
                {[0,1,2,3,4,5,6,7,8,9].map((_, index) => (
                    <ProductSkeleton key={index} />
                ))}
            </div>
            <SkeletonPagination />
            </>      
        );
    };

    return (
        <>
        <div className="flex flex-wrap flex-row gap-x-20 gap-y-10 justify-center items-center py-10 px-10 box-border">
            {currentProducts.map((product) => (
                <Product product={product} />
            ))}
        </div>
        <CetegoryPagination itemsPerPage={10} items={products} updatePage={setCurrentPage} />
        </>
    )
}
