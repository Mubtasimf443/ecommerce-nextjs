/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


import Product, { ProductInterface } from '@/components/ui/card/Product'
import React, { FC, Fragment } from 'react'


interface Props {
  viewType: 'grid' | "list"
  products: ProductInterface[]
}
const ProductsContainer: FC<Props> = ({ viewType, products }) => {
  if (viewType === 'grid') {
    return (
      <Fragment>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {products.map(product => (
            <div key={product.id} className="flex justify-center">
              <Product product={product} />
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
  if (viewType === "list") {
    return (
      <Fragment>
        <div className="flex flex-col gap-4">
          {products.map(product => (
            <>
              <Product product={product} style='list' />
            </>
          ))}
        </div>
      </Fragment>
    )
  }
}

export default ProductsContainer
