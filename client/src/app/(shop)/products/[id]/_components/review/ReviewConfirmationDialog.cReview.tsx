/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"

import React, { FC } from 'react'
import { Star } from 'lucide-react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/shadcn/alert-dialog'

interface ReviewConfirmationDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  reviewData: {
    rating: number;
    comment: string;
    images: File[];
  };
  productName: string;
  onConfirm: () => void;
  submitting: boolean;
}

export const ReviewConfirmationDialog: FC<ReviewConfirmationDialogProps> = ({
  isOpen,
  setIsOpen,
  reviewData,
  productName,
  onConfirm,
  submitting
}) => {
  const { rating } = reviewData

  // Get rating text based on star value
  const getRatingText = (stars: number) => {
    const texts = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"]
    return texts[stars]
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl">Publish your review?</AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            Your review and rating for <span className="font-medium">{productName}</span> will be published and visible to other customers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="py-2">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${
                  star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm font-medium text-gray-700">{getRatingText(rating)}</span>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-gray-300">Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={onConfirm}
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Publishing...
              </>
            ) : (
              <>Publish Review</>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}