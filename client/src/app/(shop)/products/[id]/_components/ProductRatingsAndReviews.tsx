/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import React, { FC } from 'react'
import RatingsContainer from './RatingsContainer'
import ReviewsContainer from './review/ReviewsContainer'

interface Props {
    productId: string
}

const ProductRatingsAndReviews: FC<Props> = ({ productId }) => {
    // Sample static data for demonstration
    const averageRating = 4.3;
    const totalReviews = 2547;
    const ratingDistribution = [
        { stars: 5, count: 1500, percentage: 58 },
        { stars: 4, count: 600, percentage: 24 },
        { stars: 3, count: 300, percentage: 12 },
        { stars: 2, count: 100, percentage: 4 },
        { stars: 1, count: 47, percentage: 2 },
    ];

    return (
        <section className="prose prose-lg max-w-none bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Ratings And Reviews</h2>

            {/* Ratings Container */}
            <RatingsContainer
                totalReviews={totalReviews}
                averageRating={averageRating}
                ratingDistribution={ratingDistribution}
            />

            {/* Reviews Container */}
            <ReviewsContainer productId={productId} />
        </section>
    )
}

export default ProductRatingsAndReviews