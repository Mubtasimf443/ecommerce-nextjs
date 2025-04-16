/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { Star, StarHalf } from 'lucide-react'
import React, { FC, Fragment } from 'react'

interface Props {
    rating: number
}

const renderRatingStars: FC<Props> = ({ rating }) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`star-${i}`} className="fill-amber-400 text-amber-400" size={20} />)
    }

    if (hasHalfStar) {
        stars.push(<StarHalf key="half-star" className="fill-amber-400 text-amber-400" size={20} />)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<Star key={`empty-star-${i}`} className="text-gray-300" size={20} />)
    }


    return (
        <>
            {
                stars.map((el, key) => (
                    <Fragment key={key} >
                        {el}
                    </Fragment>
                ))
            }
        </>
    )
}

export default renderRatingStars