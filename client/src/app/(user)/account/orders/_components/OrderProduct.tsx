/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import Image from 'next/image'
import React, { FC, Fragment } from 'react'

interface Props {
    image : string;
    name : string;
    quantity : number;
    price : number
}

const OrderProduct: FC<Props> = ({image , name , quantity, price }) => {
    return (
        <Fragment>
            <div
               
                className="flex items-center space-x-4 py-4 border-b last:border-0"
            >
                <div className="relative w-20 h-20">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="rounded-md object-cover"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="font-medium">{name}</h3>
                    <p className="text-sm text-gray-600">
                        Quantity: {quantity}
                    </p>
                    <p className="text-sm font-medium">
                        ${price.toFixed(2)}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default OrderProduct