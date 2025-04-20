/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import Image from 'next/image'
import React, { FC } from 'react'
import { Card, CardContent } from "@/components/ui/shadcn/card"
import { Badge } from "@/components/ui/shadcn/badge"

interface Props {
    image: string;
    name: string;
    quantity: number;
    price: number;
}

const OrderProduct: FC<Props> = ({ image, name, quantity, price }) => {
    return (
        <Card className="overflow-hidden">
            <CardContent className="p-4">
                <div className="flex items-center gap-4">
                    <div className="relative aspect-square h-24 w-24 overflow-hidden rounded-lg border bg-gray-100">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover transition-all hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                        <div className="flex items-start justify-between">
                            <h3 className="font-medium line-clamp-2">{name}</h3>
                            <p className="text-sm font-semibold">
                                ${price.toFixed(2)}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Badge variant="secondary" className="w-fit">
                                Qty: {quantity}
                            </Badge>
                            <p className="text-sm text-muted-foreground">
                                Subtotal: ${(price * quantity).toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default OrderProduct