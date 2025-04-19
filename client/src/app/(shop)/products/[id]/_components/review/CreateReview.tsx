/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import React from 'react'
import { Button } from '@/components/ui/shadcn/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/shadcn/dialog'
import { ChevronLeft, ChevronRight, Star, ImagePlus, SendHorizontal } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Badge } from '@/components/ui/shadcn/badge'
import { Progress } from '@/components/ui/shadcn/progress'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

// Components imports
import { RatingAndCommentStep } from './RatingAndCommentStep.cReview'
import { ImageUploadStep } from './ImageUploadStep.cReview'
import { ReviewSummaryStep } from './ReviewSummaryStep.cReview'
import { ReviewConfirmationDialog } from './ReviewConfirmationDialog.cReview'
import { useReviewStore } from '../../_lib/createReviewData.store'


interface CreateReviewProps {
  productName?: string
  productImage?: string
}

const CreateReview: React.FC<CreateReviewProps> = ({ 
  productName = "Premium Product", 
  productImage = "/api/placeholder/150/150"
}) => {
  // Store usage with preferred format
  let store = useReviewStore()
  let isDialogOpen = store.isDialogOpen
  let isConfirmOpen = store.isConfirmOpen
  let submitting = store.submitting
  let currentStep = store.currentStep
  let reviewData = store.reviewData

  const { toast } = useToast()

  // Step indicators configuration
  const steps = [
    { number: 1, title: 'Rate & Review', icon: Star },
    { number: 2, title: 'Add Photos', icon: ImagePlus },
    { number: 3, title: 'Preview', icon: SendHorizontal }
  ]

  const handleDialogChange = (open: boolean) => {
    store.setDialogOpen(open)
    if (!open) store.resetReviewForm()
  }

  const handleSubmitReview = async () => {
    store.setSubmitting(true)
    
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast({
        title: "✨ Review submitted successfully!",
        description: "Thank you for sharing your experience.",
        duration: 5000,
      })
      
      store.setConfirmOpen(false)
      store.setDialogOpen(false)
      store.resetReviewForm()
    } catch (error) {
      toast({
        title: "Error submitting review",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      store.setSubmitting(false)
    }
  }

  const handleNextStep = () => {
    if (currentStep === 1 && (!reviewData.rating || !reviewData.comment.trim())) {
      toast({
        title: "Complete required fields",
        description: "Rating and comment are required.",
        variant: "destructive",
      })
      return
    }
    
    if (currentStep < 3) {
      store.setCurrentStep((currentStep + 1) as 1 | 2 | 3)
    } else {
      store.setConfirmOpen(true)
    }
  }

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
        <DialogTrigger asChild>
          <Button 
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 
                       hover:to-emerald-700 text-white shadow-lg hover:shadow-xl
                       transition-all duration-300 gap-2"
          >
            <Star className="w-4 h-4" />
            Write a Review
          </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-xl max-h-dvh overflow-y-scroll">
          <DialogHeader>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col space-y-4"
            >
              <DialogTitle className="text-2xl font-bold text-gray-900">
                {steps[currentStep - 1].title}
              </DialogTitle>
              
              {/* Step Progress Indicator */}
              <div className="flex justify-between items-center w-full">
                {steps.map((step, idx) => (
                  <div key={step.number} className={`flex flex-row items-center ${idx < 2 && "w-full"}`}>
                    <div className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                      currentStep >= step.number 
                        ? "bg-emerald-500 text-white"
                        : "bg-gray-100 text-gray-400"
                    )}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-full mx-2">
                        <Progress 
                          value={currentStep > step.number ? 100 : 0}
                          className="h-1 "
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </DialogHeader>

          {/* Product Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center">
            <img 
              src={productImage} 
              alt={productName}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="ml-4">
              <h3 className="font-medium text-gray-900">{productName}</h3>
              <Badge variant="secondary" className="mt-1">
                Verified Purchase
              </Badge>
            </div>
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {currentStep === 1 && (
                <RatingAndCommentStep 
                  rating={reviewData.rating}
                  comment={reviewData.comment}
                  onUpdate={store.updateReviewData}
                />
              )}
              {currentStep === 2 && (
                <ImageUploadStep 
                  images={reviewData.images}
                  onUpdate={(images) => store.updateReviewData({ images })}
                />
              )}
              {currentStep === 3 && (
                <ReviewSummaryStep 
                  reviewData={reviewData}
                  productName={productName}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <DialogFooter className="flex justify-between gap-2 mt-6">
            {currentStep > 1 ? (
              <Button
                variant="outline"
                onClick={() => store.setCurrentStep((currentStep - 1) as 1 | 2 | 3)}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>
            ) : <div />}
            
            <Button
              onClick={handleNextStep}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 
                         hover:from-emerald-600 hover:to-emerald-700 gap-2"
            >
              {currentStep < 3 ? (
                <>Next <ChevronRight className="w-4 h-4" /></>
              ) : (
                <>Submit Review <SendHorizontal className="w-4 h-4" /></>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <ReviewConfirmationDialog
        isOpen={isConfirmOpen}
        setIsOpen={store.setConfirmOpen}
        reviewData={reviewData}
        productName={productName}
        onConfirm={handleSubmitReview}
        submitting={submitting}
      />
    </>
  )
}

export default CreateReview