/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import React, { FC, Fragment } from 'react'
import ReviewCard from '../_components/ReviewCard'
import RatingsContainer from '../../_components/RatingsContainer'
import Pagination from '../_components/Pagination'
import ReviewTabFilter from '../_components/ReviewTabFilter'

const ReviewsTab: FC = () => {
    // Sample data - replace with your actual data
    const averageRating = 4.3;
    const totalReviews = 2547;
    const ratingDistribution = [
        { stars: 5, count: 1500, percentage: 58 },
        { stars: 4, count: 600, percentage: 24 },
        { stars: 3, count: 300, percentage: 12 },
        { stars: 2, count: 100, percentage: 4 },
        { stars: 1, count: 47, percentage: 2 },
    ];

    const reviews = [
        {
            id: '1',
            rating: 5,
            buyerName: 'Sarah Johnson',
            isPaid: true,
            comment: 'Amazing product! The quality exceeded my expectations. Delivery was quick and packaging was secure.',
            date: '2025-04-15',
            images: [
                { id: '1', url: '/review-images/img1.jpg' },
                { id: '2', url: '/review-images/img2.jpg' }
            ],
            likes: 45,
            dislikes: 2
        },
        // Add more reviews as needed
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Summary Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                    Customer Reviews & Ratings
                </h1>
                <RatingsContainer
                    averageRating={averageRating}
                    totalReviews={totalReviews}
                    ratingDistribution={ratingDistribution}
                />
            </div>

            {/* Filter */}
            <ReviewTabFilter
                showingNumber={reviews.length}
                totalReviews={totalReviews}
            />
            {/* Reviews List */}
            <div className="space-y-4">
                {reviews.map(review => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </div>

            {/* Pagination */}
            <Pagination />
        </div>
    )
}

export default ReviewsTab