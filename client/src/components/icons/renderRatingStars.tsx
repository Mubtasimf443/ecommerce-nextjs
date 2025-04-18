/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { Star, StarHalf } from 'lucide-react'
import Image from 'next/image';
import React, { FC, Fragment } from 'react'

interface Props {
    rating: number;
    size?: number;
}

const renderRatingStars: FC<Props> = ({ rating, size = 20 }) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <Image
                width={size}
                height={size}
                src={'/icons/ratings/star.png'}
                alt='Star'
                key={`star-${i}`}
                loading='lazy'
            />
        );
    }

    if (hasHalfStar) {
        stars.push(
            <Image
                width={size}
                height={size}
                src={'/icons/ratings/halfStar.png'}
                alt='Star'
                loading='lazy'
            />
        );
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <Image
                width={size}
                height={size}
                src={'/icons/ratings/emptyStar.png'}
                alt='Star'
                loading='lazy'
            />
        );
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