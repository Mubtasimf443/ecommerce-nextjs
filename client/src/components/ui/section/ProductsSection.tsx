/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import React, { FC, Fragment, useState } from 'react'
import Product, { ProductInterface } from '../card/Product'
import Pagination from '@/components/custom/Pagination';
import { Button } from '../shadcn/button';
import { Grid, List } from 'lucide-react';

interface Props {
    title: string;
    products: ProductInterface[];
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const ProductsSection: FC<Props> = (props) => {
    const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

    return (
        <section className='w-full flex flex-col justify-start items-center p-4 sm:p-6 md:p-8 gap-y-4 sm:gap-y-6 md:gap-y-8 '>
            {/* Header */}
            <div className='w-full flex flex-row justify-between items-center'>
                <h1 className='text-lg md:text-xl lg:text-2xl text-wrap'>{props.title}</h1>
                <div className="flex items-center border rounded-md">
                    <Button
                        variant={viewType === 'grid' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewType('grid')}
                        className="rounded-r-none"
                    >
                        <Grid size={16} />
                    </Button>
                    <Button
                        variant={viewType === 'list' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewType('list')}
                        className="rounded-l-none"
                    >
                        <List size={16} />
                    </Button>
                </div>
            </div>

            <div
                className={`w-full flex 
                  
                    ${viewType === 'grid' ? "flex-row flex-wrap justify-center items-center " : "flex-col justify-center items-center"
                    }
                    gap-5 `}
            >
                {props.products.length > 0 && props.products.map((product, key) => (
                    <Product
                        key={key}
                        product={product}
                        style={viewType}
                    />
                ))}
            </div>
            <Pagination
                currentPage={props.currentPage}
                onPageChange={props.onPageChange}
                totalPages={props.totalPages}
            />
        </section>
    )
}

export default ProductsSection