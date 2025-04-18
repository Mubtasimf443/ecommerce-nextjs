/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import { IProduct } from '../_lib/product.interface'
import renderRatingStars from '../../../../../components/icons/renderRatingStars'
import { Separator } from "@/components/ui/shadcn/separator"
import { Badge } from "@/components/ui/shadcn/badge"
import { Button } from '@/components/ui/shadcn/button'
import { BadgePercent, RefreshCw, ShieldCheck, ShoppingCart, Truck } from 'lucide-react'
interface Props {
  product: IProduct;
  selectedColor: string;
  setSelectedColor: (params: any) => void;
  selectedSize: string;
  setSelectedSize: (params: any) => void;
  decreaseQuantity: (params: any) => void;
  quantity: number;
  increaseQuantity: (params: any) => void;
  handleBuyNow: (params: any) => void;
  handleAddToCart: (params: any) => void;
}

const RigthProductColumn: FC<Props> = ({ product, selectedColor, selectedSize, setSelectedColor, setSelectedSize, decreaseQuantity, quantity, increaseQuantity, handleAddToCart, handleBuyNow }) => {
  return (
    <Fragment>
      <div>

        {/* Product Title */}
        <h1 className="text-heading-2 font-bold text-theme-cl-primary">{product?.name}</h1>

        {/* Brand */}
        <div className="flex items-center mt-2 mb-4">
          <span className="text-theme-cl-second font-medium">
            Brand: <a href="#" className="hover:underline">{product?.brand}</a>
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <div className="flex">
            {renderRatingStars({ rating: product?.rating || 0 })}
          </div>
          <span className="text-theme-cl-primary ml-2">{product?.rating} ({product?.reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-theme-bg-accent">৳{product?.price?.current}</span>
            {product?.price?.discount && (
              <>
                <span className="text-xl text-gray-500 line-through">৳{product?.price?.original}</span>
                <Badge className="bg-red-500" variant="secondary">-{product?.price?.discount}%</Badge>
              </>
            )}
          </div>
          <div className="text-sm text-green-600 mt-1">In Stock</div>
        </div>

        <Separator className="my-6" />

        {/* Color Selection */}
        <div className="mb-6">
          <h3 className="text-base font-medium mb-2">Color</h3>
          <div className="flex gap-3">
            {product?.colors?.map(color => (
              <button
                key={color.value}
                className={`w-10 h-10 rounded-full border-2 ${selectedColor === color.value
                  ? 'border-theme-bg-accent'
                  : 'border-gray-200'
                  }`}
                style={{ backgroundColor: color.value }}
                onClick={() => setSelectedColor(color.value)}
                title={color.name}
              >
                {selectedColor === color.value && (
                  <span className="flex items-center justify-center">
                    <span className={`block w-2 h-2 rounded-full ${color.value === '#FFFFFF' ? 'bg-black' : 'bg-white'
                      }`}></span>
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="mt-2 text-sm">
            Selected: {product?.colors?.find(c => c.value === selectedColor)?.name || 'None'}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-medium">Size</h3>
            <button className="text-sm text-theme-bg-accent hover:underline">Size Guide</button>
          </div>
          <div className="flex flex-wrap gap-3">
            {product?.sizes?.map(size => (
              <button
                key={size}
                className={`px-4 py-2 border rounded-md min-w-[3rem] ${selectedSize === size
                  ? 'border-theme-bg-accent bg-theme-bg-accent/10 text-theme-bg-accent'
                  : 'border-gray-300 hover:border-gray-400'
                  }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div className="mb-6">
          <h3 className="text-base font-medium mb-2">Quantity</h3>
          <div className="flex items-center">
            <button
              onClick={decreaseQuantity}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md"
            >
              <span className="text-xl">−</span>
            </button>
            <div className="w-12 h-10 flex items-center justify-center border-t border-b border-gray-300">
              {quantity}
            </div>
            <button
              onClick={increaseQuantity}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md"
            >
              <span className="text-xl">+</span>
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button
            variant="default"
            size="lg"
            className="flex-1 bg-theme-bg-accent hover:bg-theme-bg-accent/90"
            onClick={handleBuyNow}
          >
            Buy Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex-1 border-theme-bg-accent text-theme-bg-accent hover:bg-theme-bg-accent/10"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Fragment>
  )
}

export default RigthProductColumn