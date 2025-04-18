/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC } from 'react'
import ReviewCard from './ReviewCard'
import Link from 'next/link'

interface Props {
    productId: string;
}

const ReviewsContainer: FC<Props> = ({ productId }) => {
    // Sample data - replace with your actual data
    const reviews = [
        {
            id: '1',
            rating: 5,
            buyerName: 'John Doe',
            isPaid: true,
            comment: 'Excellent product! The quality is amazing and it arrived earlier than expected. Highly recommend this to anyone looking for a reliable product.',
            date: '2025-04-15',
            images: [
                { id: '1', url: '/review-images/img1.jpg' },
                { id: '2', url: '/review-images/img2.jpg' }
            ],
            likes: 24,
            dislikes: 2
        },
        {
            id: '2',
            rating: 4,
            buyerName: 'Sarah Smith',
            isPaid: true,
            comment: 'Good product overall. The only minor issue was with the packaging, but the product itself is great.',
            date: '2025-04-14',
            images: [],
            likes: 15,
            dislikes: 1
        },
        {
            id: '3',
            rating: 5,
            buyerName: 'Mike Johnson',
            isPaid: false,
            comment: 'Absolutely love it! Will definitely buy again.',
            date: '2025-04-13',
            images: [
                { id: '3', url: '/review-images/img3.jpg' }
            ],
            likes: 32,
            dislikes: 3
        }
    ];

    return (
        <div className="mt-8">
            <div className="flex items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Reviews</h3>
       
            </div>
            
            {/* Reviews List */}
            <div className="space-y-4">
                {reviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </div>
            <Link 
                    href={`/products/${productId}/reviews`}
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center gap-1 mt-4"
                >
                    View all reviews
                    <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
        </div>
    )
}

export default ReviewsContainer