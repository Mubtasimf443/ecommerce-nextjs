/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"

import React, { FC } from 'react'
import { Camera, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/shadcn/badge'
import { Card, CardContent } from '@/components/ui/shadcn/card'
import { Input } from '@/components/ui/shadcn/input'
import { Label } from '@/components/ui/shadcn/label'

interface ImageUploadStepProps {
  images: File[];
  onUpdate: (images: File[]) => void;
}

export const ImageUploadStep: FC<ImageUploadStepProps> = ({
  images,
  onUpdate
}) => {
  // Function to handle image selection
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      onUpdate([...images, ...newFiles].slice(0, 5)) // Limit to 5 images
    }
  }

  // Function to remove selected image
  const removeImage = (index: number) => {
    onUpdate(images.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-6 py-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-base font-medium">Add Product Photos</Label>
          <Badge variant="outline" className="font-normal">
            {images.length}/5 images
          </Badge>
        </div>
        
        <p className="text-sm text-gray-500">
          Show off your product with photos. Add up to 5 images to help other customers make their decision.
        </p>
        
        <div className="grid grid-cols-3 gap-3 mt-2">
          {images.map((image, index) => (
            <Card key={index} className="relative overflow-hidden border-2 h-32">
              <img
                src={URL.createObjectURL(image)}
                alt={`Product image ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute right-2 top-2 rounded-full bg-black bg-opacity-60 p-1 text-white hover:bg-opacity-80 transition-all"
                aria-label="Remove image"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </Card>
          ))}
          
          {images.length < 5 && (
            <Card className="h-32 cursor-pointer hover:border-indigo-500 transition-all">
              <label className="flex h-full w-full cursor-pointer items-center justify-center">
                <CardContent className="flex flex-col items-center justify-center p-0 h-full">
                  <div className="rounded-full bg-gray-100 p-3">
                    <Camera className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700">Upload Photo</span>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                    multiple
                  />
                </CardContent>
              </label>
            </Card>
          )}
        </div>
        
        <p className="text-xs text-gray-500 mt-2">
          Tip: Clear, well-lit photos showing the product details work best.
        </p>
      </div>
    </div>
  )
}