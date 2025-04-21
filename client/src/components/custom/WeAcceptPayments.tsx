/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/shadcn/card"
import Image from "next/image"
interface Props { 
    className ?: string;
}

const paymentLogos = [
    {
        name: "BKash",
        logo: "/icons/brands/bkash.png"
    },
    {
        name: "Nagad",
        logo: "/icons/brands/nagad.png"
    },
    {
        name: "Rocket",
        logo: "/icons/brands/rocket.jpg"
    },
    {
        name: "Cash on Delivery",
        logo: "/icons/regular/cod.png"
    }
]
const WeAcceptPayments: FC<Props> = ({ className = ''}) => {
    return (
        <Fragment>
            <div className={"space-y-2 "+ className}>
                <p className="text-sm">We accept:</p>
                <div className="grid grid-cols-4 gap-2 sm:gap-x-4 gap-y-6">
                    {paymentLogos.map((payment , key) => (
                        <div
                            key={key}
                            className="flex flex-col justify-start items-center p-1 gap-3"
                        >
                            <Image
                                src={payment.logo}
                                alt={payment.name}
                                title={payment.name}
                                className="object-contain w-7 h-7"
                                width={50}
                                height={50}
                            />
                            <span className=' text-sm text-wrap'>{payment.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default WeAcceptPayments