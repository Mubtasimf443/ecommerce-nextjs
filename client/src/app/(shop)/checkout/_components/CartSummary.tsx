/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from '@/components/ui/shadcn/card';
import { Button } from '@/components/ui/shadcn/button';
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react'
import { ScrollArea } from '@/components/ui/shadcn/scroll-area';
import { Separator } from '@/components/ui/shadcn/separator';


export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }
interface Props {
    cartItems : CartItem[];
    updateQuantity : (id : any , quality : number) => void
    removeItem : (id : any ) => void;
    subtotal : number;
    shipping : number;
    tax : number;
    total : number;
}

const CartSummary: FC<Props> = ({cartItems , updateQuantity , removeItem, subtotal , shipping , tax , total }) => {
    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                    <CardDescription>Review your items</CardDescription>
                </CardHeader>
                <CardContent>

                    <ScrollArea className="h-[300px] pr-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center space-x-4 py-4">
                                <div className="h-20 w-20 rounded-lg bg-gray-100 flex items-center justify-center">
                                    <span className="text-xs text-gray-500">Image</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium">{item.name}</h3>
                                    <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                            <MinusIcon className="h-4 w-4" />
                                        </Button>
                                        <span className="w-8 text-center">{item.quantity}</span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            <PlusIcon className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="ml-auto"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <TrashIcon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </ScrollArea>

                    <Separator className="my-4" />

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Tax</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between font-medium">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </Fragment>
    )
}

export default CartSummary