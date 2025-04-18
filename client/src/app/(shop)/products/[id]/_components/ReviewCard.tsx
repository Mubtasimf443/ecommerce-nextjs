/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, useState } from 'react'
import Image from 'next/image'
import renderRatingStars from '@/components/icons/renderRatingStars'

interface ReviewImage {
    id: string;
    url: string;
}

interface ReviewProps {
    id: string;
    rating: number;
    buyerName: string;
    isPaid: boolean;
    comment: string;
    date: string;
    images: ReviewImage[];
    likes: number;
    dislikes: number;
}

const ReviewCard: FC<ReviewProps> = ({
    rating,
    buyerName,
    isPaid,
    comment,
    date,
    images,
    likes,
    dislikes
}) => {
    const [showImagePopup, setShowImagePopup] = useState<string | null>(null);

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            {/* Header with Rating and Verified Badge */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        {renderRatingStars({ rating, size: 16 })}
                    </div>
                    {isPaid && (
                        <span className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-0.5 rounded-full font-medium">
                            Verified Purchase
                        </span>
                    )}
                </div>
                <span className="text-sm text-gray-500">
                    {new Date(date).toLocaleDateString()}
                </span>
            </div>

            {/* Buyer Name */}
            <h4 className="text-gray-900 font-medium mb-2">{buyerName}</h4>

            {/* Review Content */}
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{comment}</p>

            {/* Review Images */}
            {images.length > 0 && (
                <div className="mb-4">
                    <div className="flex gap-2 flex-wrap">
                        {images.map((image) => (
                            <button
                                key={image.id}
                                onClick={() => setShowImagePopup(image.url)}
                                className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors"
                            >
                                <Image
                                    src={image.url}
                                    alt="Review"
                                    fill
                                    className="object-cover"
                                    loading='lazy'
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Review Actions */}
            <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
                <button className="flex items-center space-x-1 hover:text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span>{likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                    </svg>
                    <span>{dislikes}</span>
                </button>
            </div>

            {/* Image Popup */}
            {showImagePopup && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowImagePopup(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <Image
                            src={showImagePopup}
                            alt="Review full size"
                            width={800}
                            height={800}
                            className="object-contain"
                        />
                        <button
                            className="absolute top-4 right-4 text-white hover:bg-white/10 p-2 rounded-full"
                            onClick={() => setShowImagePopup(null)}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ReviewCard