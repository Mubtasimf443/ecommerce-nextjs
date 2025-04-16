/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { Skeleton } from '@/components/ui/shadcn/skeleton'
import React, { FC, Fragment } from 'react'

interface Props {

}

const LoadingProductPage :FC<Props> = () => {
  return (
    <Fragment>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {/* Left column skeleton */}
      <div>
        <Skeleton className="aspect-square w-full rounded-lg mb-4" />
        <div className="flex space-x-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="w-1/4 aspect-square rounded" />
          ))}
        </div>
      </div>
      
      {/* Right column skeleton */}
      <div>
        <Skeleton className="h-8 w-1/2 mb-2" />
        <Skeleton className="h-6 w-1/3 mb-3" />
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-5 w-5 rounded-full" />
          ))}
          <Skeleton className="h-5 w-20 ml-2" />
        </div>
        <Skeleton className="h-10 w-1/3 mb-3" />
        
        <Skeleton className="h-px w-full my-6" />
        
        <Skeleton className="h-6 w-24 mb-2" />
        <div className="flex gap-3 mb-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="w-10 h-10 rounded-full" />
          ))}
        </div>
        
        <Skeleton className="h-6 w-24 mb-2" />
        <div className="flex gap-3 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="w-12 h-10 rounded-md" />
          ))}
        </div>
        
        <Skeleton className="h-6 w-24 mb-2" />
        <Skeleton className="h-10 w-32 mb-6" />
        
        <div className="flex gap-4 mb-8">
          <Skeleton className="h-12 flex-1 rounded-md" />
          <Skeleton className="h-12 flex-1 rounded-md" />
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default LoadingProductPage