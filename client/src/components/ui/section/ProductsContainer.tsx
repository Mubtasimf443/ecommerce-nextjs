/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


import React from 'react'
import  Product ,{ProductInterface} from '@/components/ui/card/Product'

const ProductsContainer :React.FC<{showFilters: boolean}> = ({showFilters}) => {
    let products: ProductInterface[] = [
        {
            id: 1,
            name: "Classic White Sneakers",
            price: 89.99,
            slug: "classic-white-sneakers",
            imageUrl: "https://placehold.co/600x400",
            category: "Footwear",
            rating: 4.5,
            inStock: true,
            brand: "Nike"
        },
        {
            id: 2,
            name: "Vintage Denim Jacket",
            price: 129.99,
            slug: "vintage-denim-jacket",
            imageUrl: "https://placehold.co/600x400",
            category: "Outerwear",
            rating: 4.8,
            inStock: true,
            brand: "Levi's"
        },
        {
            id: 3,
            name: "Cotton Graphic T-Shirt",
            price: 34.99,
            slug: "cotton-graphic-tshirt",
            imageUrl: "https://placehold.co/600x400",
            category: "T-Shirts",
            rating: 4.2,
            inStock: true,
            brand: "H&M"
        },
        {
            id: 4,
            name: "Slim Fit Chino Pants",
            price: 59.99,
            slug: "slim-fit-chino-pants",
            imageUrl: "https://placehold.co/600x400",
            category: "Pants",
            rating: 4.3,
            inStock: true,
            brand: "Gap"
        },
        {
            id: 5,
            name: "Wool Winter Beanie",
            price: 24.99,
            slug: "wool-winter-beanie",
            imageUrl: "https://placehold.co/600x400",
            category: "Accessories",
            rating: 4.7,
            inStock: true,
            brand: "North Face"
        },
        {
            id: 6,
            name: "Leather Crossbody Bag",
            price: 79.99,
            slug: "leather-crossbody-bag",
            imageUrl: "https://placehold.co/600x400",
            category: "Bags",
            rating: 4.6,
            inStock: false,
            brand: "Coach"
        },
        {
            id: 7,
            name: "Aviator Sunglasses",
            price: 49.99,
            slug: "aviator-sunglasses",
            imageUrl: "https://placehold.co/600x400",
            category: "Accessories",
            rating: 4.4,
            inStock: true,
            brand: "Ray-Ban"
        },
        {
            id: 8,
            name: "Hooded Sweatshirt",
            price: 54.99,
            slug: "hooded-sweatshirt",
            imageUrl: "https://placehold.co/600x400",
            category: "Outerwear",
            rating: 4.1,
            inStock: true,
            brand: "Adidas"
        }
    ]
  return (
    <div className={ 
        (showFilters ?  "w-9/12 justify-start " : "w-full justify-center ") 
        +" flex flex-row flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-9 gap-y-6"
        +" sm:gap-y-4 md:gap-y-9 "}>
        {products.map((product , index) => ( index < 10 ? ( <Product key={product.id} product={product} />) : ""))}
    </div>
  )
}
export default ProductsContainer