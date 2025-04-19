/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"

import React, { FC, useState } from 'react'
import { Star } from 'lucide-react'
import { Badge } from '@/components/ui/shadcn/badge'
import { Textarea } from '@/components/ui/shadcn/textarea'
import { Label } from '@/components/ui/shadcn/label'
import {useDebouncedCallback} from 'use-debounce'


interface RatingAndCommentStepProps {
  rating: number;
  comment: string;
  onUpdate: (data: { rating?: number; comment?: string }) => void;
}

export const RatingAndCommentStep: FC<RatingAndCommentStepProps> = ({
  rating,
  comment,
  onUpdate
}) => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const debouncedSetHoveredStar= useDebouncedCallback(function (star : number) {
    setHoveredStar(star)
  } , 300)
  // Get rating text based on star value
  const getRatingText = (stars: number) => {
    const texts = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"]
    return texts[stars]
  }

  return (
    <div className="space-y-6 py-4">
      <div className="space-y-2">
        <Label className="text-base font-medium">Overall Rating</Label>
        <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => onUpdate({ rating: star })}
                onMouseEnter={() => debouncedSetHoveredStar(star)}
                onMouseLeave={() => debouncedSetHoveredStar(0)}
                className="focus:outline-none transition transform hover:scale-110"
              >
                <Star
                  className={`h-10 w-10 transition-all ${
                    star <= (hoveredStar || rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        {(rating > 0 || hoveredStar > 0) && (
          <div className="text-center mt-2">
            <Badge variant="secondary" className="px-4 py-1 font-medium text-base">
              {getRatingText(hoveredStar || rating)}
            </Badge>
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        <Label className="text-base font-medium">Your Review</Label>
        <Textarea
          placeholder="What did you like or dislike about this product? How does it perform? What features stand out to you?"
          value={comment}
          onChange={(e) => onUpdate({ comment: e.target.value })}
          rows={6}
          className="resize-none focus:ring-2 focus:ring-indigo-500"
        />
        <p className="text-xs text-gray-500">
          Your review helps other shoppers make better decisions. Be specific and focus on the product quality, features, and your experience.
        </p>
      </div>
    </div>
  )
}