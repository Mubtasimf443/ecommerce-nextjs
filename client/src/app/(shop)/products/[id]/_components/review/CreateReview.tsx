/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"

import React, { FC, Fragment, useState } from 'react'
import { Button } from '@/components/ui/shadcn/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/shadcn/dialog'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/shadcn/alert-dialog'
import { ChevronLeft, ChevronRight, CheckCircle2, Star } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Badge } from '@/components/ui/shadcn/badge'
import { Progress } from '@/components/ui/shadcn/progress'

// Step 1: Rating and Comment Component
import { RatingAndCommentStep } from './RatingAndCommentStep.cReview'
// Step 2: Image Upload Component
import { ImageUploadStep } from './ImageUploadStep.cReview'
// Step 3: Review Summary Component
import { ReviewSummaryStep } from './ReviewSummaryStep.cReview'
// Confirmation Dialog Component
import { ReviewConfirmationDialog } from './ReviewConfirmationDialog.cReview'

interface ReviewData {
  rating: number;
  comment: string;
  images: File[];
}

interface Props {
  productName?: string;
  productImage?: string;
}

const CreateReview: FC<Props> = ({ 
  productName = "Premium Product", 
  productImage = "/api/placeholder/150/150"
}) => {
  // State for multi-step review process
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const { toast } = useToast()
  
  // Review data state
  const [reviewData, setReviewData] = useState<ReviewData>({
    rating: 0,
    comment: '',
    images: []
  })

  // Function to handle dialog state
  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open)
    if (!open) {
      resetForm()
    }
  }

  // Function to reset form
  const resetForm = () => {
    setStep(1)
    setReviewData({
      rating: 0,
      comment: '',
      images: []
    })
  }

  // Function to update review data
  const updateReviewData = (data: Partial<ReviewData>) => {
    setReviewData(prev => ({ ...prev, ...data }))
  }

  // Function to handle review submission
  const handleSubmitReview = () => {
    setSubmitting(true)
    
    // Simulate API call with a delay
    setTimeout(() => {
      setIsConfirmOpen(false)
      setIsDialogOpen(false)
      setSubmitting(false)
      
      // Here you would make an API call to submit the review
      console.log(reviewData)
      
      // Show success toast
      toast({
        title: "Review submitted successfully!",
        description: "Thank you for sharing your experience with this product.",
        duration: 5000,
      })
      
      resetForm()
    }, 1500)
  }

  // Function to handle next step
  const handleNextStep = () => {
    if (step === 1 && (reviewData.rating === 0 || reviewData.comment.trim() === '')) {
      toast({
        title: "Please complete your review",
        description: "Both rating and comment are required to proceed.",
        variant: "destructive",
        duration: 3000,
      })
      return
    }
    
    if (step < 3) {
      setStep(prev => (prev + 1) as 1 | 2 | 3)
    } else {
      setIsConfirmOpen(true)
    }
  }

  // Function to handle previous step
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(prev => (prev - 1) as 1 | 2 | 3)
    }
  }

  // Get step title
  const getStepTitle = () => {
    switch (step) {
      case 1: return "Rate & Review"
      case 2: return "Add Photos"
      case 3: return "Preview & Submit"
    }
  }

  // Get step description
  const getStepDescription = () => {
    switch (step) {
      case 1: return "Share your experience with this product"
      case 2: return "Upload photos of your product (optional)"
      case 3: return "Confirm your review details before submitting"
    }
  }

  return (
    <Fragment>
      <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
        <DialogTrigger asChild>
          <Button 
            className="text-white font-medium"
          >
            <Star className="mr-2 h-4 w-4" /> Give A Review
          </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <DialogTitle className="text-2xl font-bold">
                  {getStepTitle()}
                </DialogTitle>
                <DialogDescription className="text-base mt-1">
                  {getStepDescription()}
                </DialogDescription>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Badge variant={step >= 1 ? "default" : "outline"} className="rounded-full px-2">1</Badge>
                <Progress value={step > 1 ? 100 : 0} className="w-8 h-1" />
                <Badge variant={step >= 2 ? "default" : "outline"} className="rounded-full px-2">2</Badge>
                <Progress value={step > 2 ? 100 : 0} className="w-8 h-1" />
                <Badge variant={step >= 3 ? "default" : "outline"} className="rounded-full px-2">3</Badge>
              </div>
            </div>
          </DialogHeader>

          <div className="mt-2">
            <div className="flex items-center mb-4 bg-gray-50 p-3 rounded-lg">
              <img 
                src={productImage} 
                alt={productName} 
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="ml-4">
                <h3 className="font-medium text-base">{productName}</h3>
                <p className="text-sm text-gray-500">Verified Purchase</p>
              </div>
            </div>

            {/* Step Components */}
            {step === 1 && (
              <RatingAndCommentStep 
                rating={reviewData.rating}
                comment={reviewData.comment}
                onUpdate={updateReviewData}
              />
            )}

            {step === 2 && (
              <ImageUploadStep 
                images={reviewData.images}
                onUpdate={(images) => updateReviewData({ images })}
              />
            )}

            {step === 3 && (
              <ReviewSummaryStep 
                reviewData={reviewData}
                productName={productName}
              />
            )}
          </div>

          <DialogFooter className="flex sm:justify-between gap-2 mt-2">
            {step > 1 ? (
              <Button variant="outline" onClick={handlePrevStep} className="gap-2">
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
            ) : (
              <div></div>
            )}
            <Button 
              onClick={handleNextStep}
              className={` gap-2`}
            >
              {step < 3 ? (
                <>Next <ChevronRight className="h-4 w-4" /></>
              ) : (
                <>Submit Review <CheckCircle2 className="h-4 w-4" /></>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog Component */}
      <ReviewConfirmationDialog
        isOpen={isConfirmOpen}
        setIsOpen={setIsConfirmOpen}
        reviewData={reviewData}
        productName={productName}
        onConfirm={handleSubmitReview}
        submitting={submitting}
      />
    </Fragment>
  )
}

export default CreateReview