/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"

import React, { FC } from 'react'
import { CheckCircle2, Star } from 'lucide-react'
import { Badge } from '@/components/ui/shadcn/badge'
import { Card, CardContent } from '@/components/ui/shadcn/card'
import { Separator } from '@/components/ui/shadcn/separator'

interface ReviewSummaryStepProps {
  reviewData: {
    rating: number;
    comment: string;
    images: File[];
  };
  productName: string;
}

export const ReviewSummaryStep: FC<ReviewSummaryStepProps> = ({
  reviewData,
  productName
}) => {
  const { rating, comment, images } = reviewData

  // Get rating text based on star value
  const getRatingText = (stars: number) => {
    const texts = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"]
    return texts[stars]
  }

  return (
    <div className="space-y-5 py-4">
      <Card className="overflow-hidden">
        <CardContent className="p-4 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Your Rating</h4>
              <Badge variant="outline">{getRatingText(rating)}</Badge>
            </div>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <h4 className="font-medium">Your Review</h4>
            <p className="text-gray-700 text-sm">
              {comment}
            </p>
          </div>
          
          {images.length > 0 && (
            <>
              <Separator />
              <div className="space-y-2">
                <h4 className="font-medium">Your Photos ({images.length})</h4>
                <div className="flex flex-wrap gap-2">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Product image ${index + 1}`}
                      className="h-16 w-16 rounded-md object-cover border"
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
      
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800 flex items-start">
        <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
        <p>
          Your review will be visible to other customers after it's been published. You can help others make informed decisions!
        </p>
      </div>
    </div>
  )
}