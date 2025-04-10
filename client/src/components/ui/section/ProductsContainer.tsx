/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


import React from 'react'
import  Product ,{ProductInterface} from '@/components/ui/card/Product'
import { demoProducts } from '@/_lib/data/demoProducts'

const ProductsContainer :React.FC<{showFilters: boolean}> = ({showFilters}) => {
  return (
    <div className={ 
        (showFilters ?  "w-9/12 justify-start " : "w-full justify-center ") 
        +" flex flex-row flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-9 gap-y-6"
        +" sm:gap-y-4 md:gap-y-9 "}>
        {demoProducts.map((product , index) => ( index < 10 ? ( <Product key={product.id} product={product} />) : ""))}
    </div>
  )
}
export default ProductsContainer