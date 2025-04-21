/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import { demoProducts } from '@/_lib/data/demoProducts';
import ProductsSection from '@/components/ui/section/ProductsSection';
import { useParams } from 'next/navigation';
import React, { FC, Fragment, useRef, useState } from 'react'

interface Props {

}

const page: FC<Props> = ({ }) => {
  let [currentPage, setCurrentPage] = useState(1);
  let [totalPages, setTotalPages] = useState(20);
  let slug = useParams().slug;
  let [title , setTitle] = useState<string>(() => {
    if (!slug) return 'All Cetegories';
    if (slug.length === 1) return slug[0].at(0)?.toUpperCase() + slug[0].slice(1) ;
    if (slug.length === 2) return slug[1].at(0)?.toUpperCase() + slug[1].slice(1) + '/' +  slug[0].at(0)?.toUpperCase() + slug[0].slice(1);
    if (slug.length === 3) return  slug[2].at(0)?.toUpperCase() + slug[2].slice(1) + '/' + slug[1].at(0)?.toUpperCase() + slug[1].slice(1) + '/' +  slug[0].at(0)?.toUpperCase() + slug[0].slice(1)  ;
    return 'All Cetegories';
  });
  return (
    <Fragment>
      <ProductsSection
        title={title}
        products={demoProducts}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Fragment>
  )
}

export default page