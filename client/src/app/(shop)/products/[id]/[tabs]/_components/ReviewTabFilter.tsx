/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'

interface Props {
  showingNumber : number;
  totalReviews : number;
}

const ReviewTabFilter :FC<Props> = ({showingNumber , totalReviews }) => {
  return (
    <Fragment>
         <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                        <option value="recent">Most Recent</option>
                        <option value="helpful">Most Helpful</option>
                        <option value="highest">Highest Rated</option>
                        <option value="lowest">Lowest Rated</option>
                    </select>
                    <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                        <option value="all">All Stars</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                    </select>
                </div>
                <div className="text-sm text-gray-500">
                    Showing {showingNumber} of {totalReviews} reviews
                </div>
            </div>
    </Fragment>
  )
}

export default ReviewTabFilter