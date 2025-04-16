// src/app/(shop)/products/[id]/page.tsx


"use client"
import React, { FC, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ChevronLeft, ChevronRight, Star, StarHalf, ShoppingCart, BadgePercent, ShieldCheck, Truck, RefreshCw } from 'lucide-react'

// shadcn components
import { Button } from "@/components/ui/shadcn/button"
import { Skeleton } from "@/components/ui/shadcn/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs"
import { Separator } from "@/components/ui/shadcn/separator"
import { Badge } from "@/components/ui/shadcn/badge"

// Import image gallery component (you can use react-image-gallery or similar)
import 'react-image-gallery/styles/css/image-gallery.css'
import LoadingProductPage from './_components/LoadingProductPage'
import { IProduct } from './_lib/product.interface'
import ProductTabs from './_components/ProductTabs'
import { mockProduct } from './_lib/product.mockData'
import renderRatingStars from './_components/renderRatingStars'
import LeftProductColumn from './_components/LeftProductColumn'

// Product type definition
const page: FC = () => {
    const router = useRouter()
    const params = useParams()
    const productId = params.id as string

    const [product, setProduct] = useState<IProduct | null>(null)
    const [loading, setLoading] = useState(true)
    const [selectedColor, setSelectedColor] = useState<string | null>(null)
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [quantity, setQuantity] = useState(1)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true)
            try {
                // In a real application, replace this with your API call
                // const response = await fetch(`/api/products/${productId}`)
                // const data = await response.json()

                // Simulating API delay
                await new Promise(resolve => setTimeout(resolve, 1800))

                // Mock data for demonstration

                if (productId === "not-found") {
                    setProduct(null)
                } else {
                    setProduct(mockProduct)
                    setSelectedColor(mockProduct.colors[0].value)
                    setSelectedSize(mockProduct.sizes[1])
                }
            } catch (error) {
                console.error("Failed to fetch product:", error)
                setProduct(null)
            } finally {
                setLoading(false)
            }
        }

        fetchProduct()
    }, [productId])

    // For image gallery
    const galleryImages = product?.images.map(img => ({
        original: img.src,
        thumbnail: img.src,
        originalAlt: img.alt,
        thumbnailAlt: img.alt
    })) || []

    // Handle quantity changes
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    // Handle add to cart
    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            alert("Please select a color and size")
            return
        }

        // Add to cart logic here
        console.log("Added to cart:", {
            productId,
            quantity,
            color: selectedColor,
            size: selectedSize
        })

        // Show confirmation
        alert("Added to cart successfully!")
    }

    // Handle buy now
    const handleBuyNow = () => {
        if (!selectedColor || !selectedSize) {
            alert("Please select a color and size")
            return
        }

        // Navigate to checkout with this product
        router.push('/checkout')
    }



    // Show not found if product doesn't exist
    if (!loading && product === null) {
        notFound()
    }

    if (loading) {
        return (
            <React.Fragment>
                <div className="container mx-auto px-4 pb-8">
                    <LoadingProductPage />
                </div>
            </React.Fragment>
        )
    }
    if (loading == false) {
        return (
            <React.Fragment>
                <div className="container mx-auto px-4 pb-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Left column - Product Images */}
                        <LeftProductColumn
                            images={galleryImages}
                            setCurrentImageIndex={setCurrentImageIndex}
                        />

                        {/* Right column - Product Info */}
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

                            {/* Product Services */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={18} className="text-theme-bg-accent" />
                                    <span className="text-sm">{product?.warranty}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Truck size={18} className="text-theme-bg-accent" />
                                    <span className="text-sm">Free shipping over ৳1000</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RefreshCw size={18} className="text-theme-bg-accent" />
                                    <span className="text-sm">Easy 7-day returns</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BadgePercent size={18} className="text-theme-bg-accent" />
                                    <span className="text-sm">Special discounts with coupon</span>
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

                            {/* Product Specs */}
                            <div className="space-y-3 text-sm">
                                <div className="flex">
                                    <span className="font-medium w-24">Weight:</span>
                                    <span>{product?.weight}</span>
                                </div>
                                <div className="flex">
                                    <span className="font-medium w-24">Material:</span>
                                    <span>{product?.specifications.Material}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs for additional information */}
                    <ProductTabs product={product ?? mockProduct} />
                </div>
            </React.Fragment>
        )
    }

}

export default page