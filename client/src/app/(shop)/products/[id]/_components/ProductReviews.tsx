/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import React, { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, ThumbsUp, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react'

// Define the structure of a review
interface IReview {
    id: string
    userId: string
    userName: string
    userAvatar: string
    rating: number
    title: string
    comment: string
    images?: string[]
    date: string
    helpful: number
    verified: boolean
    replies?: {
        id: string
        userName: string
        comment: string
        date: string
    }[]
}

interface Props {
    productId: string
}

const ProductReviews: FC<Props> = ({ productId }) => {
    const [reviews, setReviews] = useState<IReview[]>([])
    const [loading, setLoading] = useState(true)
    const [showAll, setShowAll] = useState(false)
    const [activeFilter, setActiveFilter] = useState('all')
    const [expandedReviews, setExpandedReviews] = useState<string[]>([])
    
    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true)
            try {
                // Mock data fetching delay
                await new Promise(resolve => setTimeout(resolve, 300))
                
                // Mock reviews data
                const mockReviews: IReview[] = [
                    {
                        id: "review1",
                        userId: "user1",
                        userName: "Alex Johnson",
                        userAvatar: "/api/placeholder/40/40",
                        rating: 5,
                        title: "Absolutely perfect fit and quality",
                        comment: "I've been looking for something exactly like this for months. The fabric is premium quality, stitching is perfect, and it fits exactly as expected. The colors are vibrant and match the product images perfectly. I've already received multiple compliments wearing this. Highly recommend for anyone who's on the fence!",
                        images: ["/api/placeholder/120/120", "/api/placeholder/120/120"],
                        date: "2025-02-15",
                        helpful: 42,
                        verified: true,
                        replies: [
                            {
                                id: "reply1",
                                userName: "Store Support",
                                comment: "Thank you for your wonderful review, Alex! We're thrilled to hear how much you love the product.",
                                date: "2025-02-16"
                            }
                        ]
                    },
                    {
                        id: "review2",
                        userId: "user2",
                        userName: "Sarah Miller",
                        userAvatar: "/api/placeholder/40/40",
                        rating: 4,
                        title: "Great product with minor issues",
                        comment: "Overall I'm very satisfied with my purchase. The quality is excellent and the design is exactly what I was looking for. Only giving 4 stars because shipping took longer than expected and there was a small defect in the stitching on one side. Customer service was helpful in resolving the issue though.",
                        date: "2025-02-10",
                        helpful: 16,
                        verified: true
                    },
                    {
                        id: "review3",
                        userId: "user3",
                        userName: "Michael Chen",
                        userAvatar: "/api/placeholder/40/40",
                        rating: 5,
                        title: "Exceeded my expectations!",
                        comment: "This product is even better in person than it appears in the photos. Extremely comfortable and well-made. Will definitely purchase again in different colors.",
                        images: ["/api/placeholder/120/120"],
                        date: "2025-02-05",
                        helpful: 24,
                        verified: true
                    },
                    {
                        id: "review4",
                        userId: "user4",
                        userName: "Emily Rodriguez",
                        userAvatar: "/api/placeholder/40/40",
                        rating: 2,
                        title: "Disappointed with the sizing",
                        comment: "The product itself seems well-made, but the sizing chart was completely off. I ordered my usual size according to the chart and it's much too small. Now I have to deal with returning it which is inconvenient.",
                        date: "2025-01-28",
                        helpful: 8,
                        verified: true,
                        replies: [
                            {
                                id: "reply2",
                                userName: "Store Support",
                                comment: "We're sorry to hear about your experience with the sizing, Emily. We'd like to make this right - please contact our customer service team and we'll help expedite your return or exchange.",
                                date: "2025-01-29"
                            }
                        ]
                    },
                    {
                        id: "review5",
                        userId: "user5",
                        userName: "James Wilson",
                        userAvatar: "/api/placeholder/40/40",
                        rating: 5,
                        title: "Worth every penny",
                        comment: "I was hesitant about the price at first, but after using this product for a few weeks I can say it's absolutely worth the investment. The quality and craftsmanship are outstanding.",
                        date: "2025-01-20",
                        helpful: 31,
                        verified: true
                    }
                ]
                
                setReviews(mockReviews)
            } catch (error) {
                console.error("Failed to fetch reviews:", error)
                setReviews([])
            } finally {
                setLoading(false)
            }
        }
        
        fetchReviews()
    }, [productId])
    
    const visibleReviews = showAll ? reviews : reviews.slice(0, 2)
    
    const handleFilter = (filter: string) => {
        setActiveFilter(filter)
        // In a real app, you would filter the reviews here
    }
    
    const toggleReviewExpansion = (reviewId: string) => {
        setExpandedReviews(prev => 
            prev.includes(reviewId) 
                ? prev.filter(id => id !== reviewId) 
                : [...prev, reviewId]
        )
    }
    
    const isExpanded = (reviewId: string) => expandedReviews.includes(reviewId)
    
    return (
        <div>
            {/* Filter controls */}
            <div className="flex flex-wrap gap-2 mb-6">
                <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                        activeFilter === 'all' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => handleFilter('all')}
                >
                    All Reviews
                </button>
                <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                        activeFilter === '5star' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => handleFilter('5star')}
                >
                    5 Star
                </button>
                <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                        activeFilter === '4star' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => handleFilter('4star')}
                >
                    4 Star
                </button>
                <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                        activeFilter === '3star' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => handleFilter('3star')}
                >
                    3 Star
                </button>
                <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                        activeFilter === 'with-photos' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => handleFilter('with-photos')}
                >
                    With Photos
                </button>
            </div>
            
            {loading ? (
                <div className="space-y-4">
                    {[1, 2].map(i => (
                        <div key={i} className="bg-gray-100 rounded-lg p-6 animate-pulse h-40"></div>
                    ))}
                </div>
            ) : reviews.length === 0 ? (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">No Reviews Yet</h3>
                    <p className="text-gray-600 mb-4">Be the first to review this product</p>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Write a Review
                    </button>
                </div>
            ) : (
                <div className="space-y-6">
                    {visibleReviews.map(review => (
                        <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                            <div className="flex justify-between mb-3">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 relative rounded-full overflow-hidden mr-3">
                                        <Image 
                                            src={review.userAvatar} 
                                            alt={review.userName}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <span className="font-medium text-gray-800 mr-2">{review.userName}</span>
                                            {review.verified && (
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                                                    Verified Purchase
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {new Date(review.date).toLocaleDateString('en-US', {
                                                year: 'numeric', 
                                                month: 'long', 
                                                day: 'numeric'
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <Star 
                                            key={star}
                                            fill={review.rating >= star ? "gold" : "none"}
                                            stroke={review.rating >= star ? "gold" : "currentColor"}
                                            className="w-4 h-4"
                                        />
                                    ))}
                                </div>
                            </div>
                            
                            <h4 className="font-medium text-lg mb-2">{review.title}</h4>
                            
                            <div className="mb-4">
                                {review.comment.length > 200 && !isExpanded(review.id) ? (
                                    <>
                                        <p className="text-gray-700">{review.comment.substring(0, 200)}...</p>
                                        <button 
                                            className="text-blue-600 text-sm font-medium flex items-center mt-1 hover:text-blue-800"
                                            onClick={() => toggleReviewExpansion(review.id)}
                                        >
                                            Read more <ChevronDown className="w-4 h-4 ml-1" />
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-gray-700">{review.comment}</p>
                                        {review.comment.length > 200 && (
                                            <button 
                                                className="text-blue-600 text-sm font-medium flex items-center mt-1 hover:text-blue-800"
                                                onClick={() => toggleReviewExpansion(review.id)}
                                            >
                                                Show less <ChevronUp className="w-4 h-4 ml-1" />
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                            
                            {review.images && review.images.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {review.images.map((img, i) => (
                                        <div key={i} className="relative w-20 h-20 border rounded-md overflow-hidden">
                                            <Image
                                                src={img}
                                                alt={`Review image ${i+1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                            <div className="flex items-center space-x-4 text-sm">
                                <button className="flex items-center text-gray-600 hover:text-blue-600">
                                    <ThumbsUp className="w-4 h-4 mr-1" />
                                    <span>Helpful ({review.helpful})</span>
                                </button>
                                <button className="flex items-center text-gray-600 hover:text-blue-600">
                                    <MessageSquare className="w-4 h-4 mr-1" />
                                    <span>Reply</span>
                                </button>
                            </div>
                            
                            {/* Review replies */}
                            {review.replies && review.replies.length > 0 && (
                                <div className="mt-4 ml-6 border-l-2 border-gray-200 pl-4">
                                    {review.replies.map(reply => (
                                        <div key={reply.id} className="mb-3 last:mb-0">
                                            <div className="font-medium text-gray-800 mb-1">
                                                {reply.userName} <span className="text-sm font-normal text-gray-500">replied on {new Date(reply.date).toLocaleDateString()}</span>
                                            </div>
                                            <p className="text-gray-700 text-sm">{reply.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    
                    {reviews.length > 2 && (
                        <div className="text-center">
                            <button 
                                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                                onClick={() => setShowAll(!showAll)}
                            >
                                {showAll ? 'Show Less Reviews' : `Show All Reviews (${reviews.length})`}
                            </button>
                        </div>
                    )}
                    
                    <div className="mt-6 text-center">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                            Write a Review
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductReviews