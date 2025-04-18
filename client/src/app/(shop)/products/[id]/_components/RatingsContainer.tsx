/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import renderRatingStars from '@/components/icons/renderRatingStars'
import React, { FC, Fragment } from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


interface Props {
  averageRating : number;
  totalReviews : number,
  ratingDistribution : any[]
}

const RatingsContainer :FC<Props> = ({averageRating , totalReviews , ratingDistribution}) => {
  return (
    <Fragment>
       <div className='flex flex-col md:flex-row gap-x-8 gap-y-6 w-full py-4'>
                {/* Left Side - Average Rating Circle */}
                <div className='flex flex-col items-center justify-center md:w-1/4'>
                    <div className='w-32 h-32'>
                        <CircularProgressbarWithChildren
                            value={averageRating}
                            styles={buildStyles({
                                pathColor: '#10B981', // emerald-500
                                trailColor: '#F3F4F6', // gray-100
                                strokeLinecap: 'round',
                                pathTransitionDuration: 0.5
                            })}
                            minValue={0}
                            maxValue={5}
                        >
                            <div className="flex flex-col items-center">
                                <strong className="text-2xl text-gray-800">{averageRating}/5</strong>
                              <div className="flex items-center mt-1">
                              {renderRatingStars({rating : averageRating , size : 12})}
                                </div> 

                                
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                    <p className='text-sm text-gray-500 mt-2'>{totalReviews.toLocaleString()} ratings and {totalReviews} Reviews</p>
                </div>

                {/* Right Side - Rating Bars */}
                <div className='flex-1'>
                    <div className='space-y-3'>
                        {ratingDistribution.map((rating, index) => (
                            <div key={rating.stars} className='flex items-center gap-x-2'>
                                <div className='flex items-center w-20'>
                                   {renderRatingStars({rating : 5 - index , size : 13})}
                                </div>
                                <div className='flex-1 h-2 bg-gray-100 rounded-full overflow-hidden'>
                                    <div 
                                        className='h-full bg-emerald-500 rounded-full transition-all duration-300'
                                        style={{ width: `${rating.percentage}%` }}
                                    ></div>
                                </div>
                                <span className='w-16 text-sm text-gray-500'>{rating.count.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </Fragment>
  )
}

export default RatingsContainer