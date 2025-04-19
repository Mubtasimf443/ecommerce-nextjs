/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

"use client"
import React, { FC, Fragment, useEffect, useState } from 'react'
import Product, { ProductInterface } from '@/components/ui/card/Product'
import { Button } from '@/components/ui/shadcn/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  productId?: string; // Current product ID to exclude from related products
}

// Mock related products - Replace with your API data
const mockRelatedProducts: ProductInterface[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    imageUrl: '/images/600x400.svg',
    price: 199.99,
    originalPrice: 249.99,
    category: 'Electronics',
    rating: 4.5,
    isNew: true,
    discountPercentage: 20,
    brand: 'AudioTech',
    inStock: true,
    sold: 150,
  },
  {
    id: '2',
    name: 'Smart Fitness Watch Pro',
    slug: 'smart-fitness-watch-pro',
    imageUrl: '/images/600x400.svg',
    price: 299.99,
    category: 'Wearables',
    rating: 4.8,
    isHot: true,
    brand: 'FitGear',
    inStock: true,
    ordered: 89,
  },
  {
    id: '3',
    name: 'Ultra HD 4K Action Camera',
    slug: 'ultra-hd-4k-action-camera',
    imageUrl: '/images/600x400.svg',
    price: 399.99,
    originalPrice: 449.99,
    category: 'Cameras',
    rating: 4.6,
    brand: 'ActionPro',
    inStock: true,
    sold: 75,
  },
  {
    id: '4',
    name: 'Portable Power Bank 20000mAh',
    slug: 'portable-power-bank-20000mah',
    imageUrl: '/images/600x400.svg',
    price: 49.99,
    category: 'Accessories',
    rating: 4.3,
    brand: 'PowerMax',
    inStock: true,
    sold: 200,
    ordered: 45,
  },
  {
    id: '5',
    name: 'Wireless Gaming Mouse',
    slug: 'wireless-gaming-mouse',
    imageUrl: '/images/600x400.svg',
    price: 79.99,
    originalPrice: 99.99,
    category: 'Gaming',
    rating: 4.7,
    discountPercentage: 20,
    brand: 'GameTech',
    inStock: true,
    ordered: 120,
  }
]

const RelatedProductsContainer: FC<Props> = ({ productId }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [products, setProducts] = useState<ProductInterface[]>([])
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    // Filter out current product and get related products
    // In production, this should be replaced with an API call to get actual related products
    const filteredProducts = mockRelatedProducts.filter(p => p.id !== productId)
    setProducts(filteredProducts)
  }, [productId])

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('related-products-container')
    if (!container) return

    const scrollAmount = direction === 'left' ? -300 : 300
    const newPosition = scrollPosition + scrollAmount

    // Check if we can scroll in either direction
    const maxScroll = container.scrollWidth - container.clientWidth

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    })

    setScrollPosition(newPosition)
    setCanScrollLeft(newPosition > 0)
    setCanScrollRight(newPosition < maxScroll)
  }

  if (products.length === 0) return null

  return (
    <div className="mt-16 bg-white rounded-xl p-6 border relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Related Products</h2>

        {/* Navigation Buttons */}
        <div className="flex gap-2 ">
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Products Carousel */}
      <div
        id="related-products-container"
        className="flex flex-row gap-4 overflow-x-hidden scroll-smooth"
      >
        {products.map((product, key) => (
          <React.Fragment key={key} >
            <Product product={product} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default RelatedProductsContainer;