/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import { Button } from '@/components/ui/shadcn/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/shadcn/sheet';
import {  ShoppingCartIcon } from 'lucide-react';
import CartSummary, { CartItem } from './CartSummary';

interface Props {
  cartItems : CartItem[];
    updateQuantity : (id : any , quality : number) => void
    removeItem : (id : any ) => void;
    subtotal : number;
    shipping : number;
    tax : number;
    total : number;
}

const MobileOrderView :FC<Props> = ({cartItems , updateQuantity , removeItem, subtotal , shipping , tax , total}) => {
  return (
    <Fragment>
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <ShoppingCartIcon className="mr-2 h-4 w-4" />
                    View Order Summary
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[85vh]">
                  <SheetHeader>
                    <SheetTitle>Order Summary</SheetTitle>
                  </SheetHeader>
                  <CartSummary
                    cartItems={cartItems}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                    subtotal={subtotal}
                    shipping={shipping}
                    tax={tax}
                    total={total}
                  />
                </SheetContent>
              </Sheet>
            </div>
    </Fragment>
  )
}

export default MobileOrderView