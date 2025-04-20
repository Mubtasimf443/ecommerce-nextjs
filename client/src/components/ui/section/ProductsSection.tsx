/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import Product, { ProductInterface } from '../card/Product'
import Pagination from '@/components/custom/Pagination';

interface Props {
    title: string;
    products: ProductInterface[];
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const ProductsSection: FC<Props> = (props) => {
    return (
        <section className='w-full flex flex-col justify-start items-center p-4 sm:p-6 md:p-8 gap-y-4 sm:gap-y-6 md:gap-y-8 '>
            <h1 className='text-xl lg:text-2xl'>{props.title}</h1>
            <div 
            className="w-full flex flex-row flex-wrap justify-center items-center gap-5 "
            >
                {props.products.length > 0 && props.products.map((product , key) => <Product key={key} product={product} />)}
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