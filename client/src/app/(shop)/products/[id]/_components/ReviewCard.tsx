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
        <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm">
            {/* Header - Rating, Name, and Paid Status */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    {renderRatingStars({ rating, size: 16 })}
                    <span className="text-sm text-gray-500">
                        {new Date(date).toLocaleDateString()}
                    </span>
                </div>
                {isPaid && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Verified Purchase
                    </span>
                )}
            </div>

            {/* Buyer Name */}
            <h4 className="font-medium text-gray-800 mb-2">{buyerName}</h4>

            {/* Review Comment */}
            <p className="text-gray-600 mb-4 text-sm">{comment}</p>

            {/* Review Images */}
            {images.length > 0 && (
                <div className="mb-4">
                    <div className="flex gap-2 flex-wrap">
                        {images.map((image) => (
                            <button
                                key={image.id}
                                className="relative w-16 h-16 rounded-lg overflow-hidden"
                                onClick={() => setShowImagePopup(image.url)}
                            >
                                <Image
                                    src={image.url}
                                    alt="Review image"
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Like/Dislike Actions */}
            <div className="flex items-center gap-4 mt-3">
                <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                    </svg>
                    <span>{likes}</span>
                </button>
                <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                        />
                    </svg>
                    <span>{dislikes}</span>
                </button>
            </div>

            {/* Image Popup */}
            {showImagePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={() => setShowImagePopup(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full">
                        <Image
                            src={showImagePopup}
                            alt="Review image large"
                            width={800}
                            height={800}
                            className="object-contain w-full h-full"
                        />
                        <button
                            className="absolute top-4 right-4 text-white p-2 hover:bg-black hover:bg-opacity-20 rounded-full"
                            onClick={() => setShowImagePopup(null)}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ReviewCard