/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import { demoProducts } from '@/_lib/data/demoProducts';
import ProductsSection from '@/components/ui/section/ProductsSection'
import React, { FC, Fragment, useState } from 'react'

interface Props {

}

const page: FC<Props> = ({ }) => {
    let [currentPage, setCurrentPage] = useState(1);
    let [totalPages, setTotalPages] = useState(20);
    return (
        <Fragment>
            <ProductsSection
                products={demoProducts}
                title='Wishlist'
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </Fragment>
    )
}

export default page