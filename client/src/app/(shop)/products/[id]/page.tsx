/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
"use client"
import React, { FC, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { notFound } from 'next/navigation'
import LoadingProductPage from './_components/LoadingProductPage'
import { IProduct } from './_lib/product.interface'
import ProductTabs from './_components/ProductTabs'
import { mockProduct } from './_lib/product.mockData'
import LeftProductColumn from './_components/LeftProductColumn'
import RigthProductColumn from './_components/RigthProductColumn'
import ProductRatingsAndReviews from './_components/ProductRatingsAndReviews'
import QuestionAnswerContainer from './_components/questionAnswer/QuestionAnswerContainer'

const page: FC = () => {
    const router = useRouter();
    const params = useParams();
    const productId = params.id as string;

    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                // In a real application, replace this with your API call
                // const response = await fetch(`/api/products/${productId}`)
                // const data = await response.json()

                // Simulating API delay
                await new Promise(resolve => setTimeout(resolve, 250));

                // Mock data for demonstration

                if (productId === "not-found") {
                    setProduct(null);
                } else {
                    setProduct(mockProduct);
                    setSelectedColor(mockProduct.colors[0].value);
                    setSelectedSize(mockProduct.sizes[1]);
                }
            } catch (error) {
                console.error("Failed to fetch product:", error);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
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
        if (quantity > 1) setQuantity(quantity - 1);
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    // Handle add to cart
    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            alert("Please select a color and size");
            return;
        }

        // Add to cart logic here
        console.log("Added to cart:", {
            productId,
            quantity,
            color: selectedColor,
            size: selectedSize
        })

        // Show confirmation
        alert("Added to cart successfully!");
    }

    // Handle buy now
    const handleBuyNow = () => {
        if (!selectedColor || !selectedSize) {
            alert("Please select a color and size");
            return
        }

        // Navigate to checkout with this product
        router.push('/checkout');
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
                     
                        <RigthProductColumn
                            product={product ?? mockProduct}
                            selectedColor={selectedColor ?? ""}
                            setSelectedColor={setSelectedColor}
                            selectedSize={selectedSize ?? ""}
                            setSelectedSize={setSelectedSize}
                            increaseQuantity={increaseQuantity}
                            quantity={quantity}
                            decreaseQuantity={decreaseQuantity}
                            handleBuyNow={handleBuyNow}
                            handleAddToCart={handleAddToCart}
                        />
                    </div>

                    {/* Tabs for additional information */}
                    <ProductTabs product={product ?? mockProduct} />


                    {/* Product Review */}
                    <ProductRatingsAndReviews productId={product?.id || ''} />

                    {/* Question Answer Container */}
                    <QuestionAnswerContainer />


                </div>
            </React.Fragment>
        )
    }

}

export default page