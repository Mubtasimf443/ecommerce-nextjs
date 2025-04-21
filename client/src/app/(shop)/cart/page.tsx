/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

"use client"

import React from 'react'
import { 
    MinusIcon, 
    PlusIcon, 
    TrashIcon, 
    ArrowLeftIcon, 
    CreditCard, 
    ShoppingBagIcon,
} from "lucide-react"
import { Button } from "@/components/ui/shadcn/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/shadcn/card"
import { Separator } from "@/components/ui/shadcn/separator"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/shadcn/table"
import { Badge } from "@/components/ui/shadcn/badge"
import { motion, AnimatePresence } from "framer-motion"
import WeAcceptPayments from '@/components/custom/WeAcceptPayments'
import QuantityButton from './_components/QuantityButton'
import Link from 'next/link'




const CartPage: React.FC = () => {
    const cartItems = [
        { id: 1, name: "Wireless Headphones", price: 79.99, quantity: 1, image: "/images/product.svg" },
        { id: 2, name: "Smartphone Case", price: 24.99, quantity: 2, image: "/images/product.svg" },
        { id: 3, name: "USB-C Cable", price: 12.99, quantity: 1, image: "/images/product.svg" },
    ];

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 5.99;
    const tax = subtotal * 0.07;
    const total = subtotal + shipping + tax;

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="flex items-center justify-between mb-8">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight">Shopping Cart</h1>
                    <p className="text-muted-foreground">
                        Review and manage your selected items
                    </p>
                </div>
                <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm rounded-full animate-in fade-in"
                >
                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </Badge>
            </div>

            {cartItems.length === 0 ? (
                <Card className="border-dashed">
                    <CardContent className="flex flex-col items-center justify-center py-20">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-full bg-primary/10 p-6 mb-4"
                        >
                            <ShoppingBagIcon className="h-8 w-8 text-primary" />
                        </motion.div>
                        <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                        <p className="text-muted-foreground mb-6 text-center max-w-sm">
                            Looks like you haven't added anything to your cart yet. 
                            Start shopping to fill it with amazing products!
                        </p>
                        <Button size="lg" className="rounded-full animate-bounce">
                            <ShoppingBagIcon className="mr-2 h-4 w-4" />
                            Browse Products
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="border-none shadow-lg">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[50%]">Product</TableHead>
                                        <TableHead className="text-center">Quantity</TableHead>
                                        <TableHead className="text-right">Price</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <AnimatePresence>
                                        {cartItems.map((item) => (
                                            <motion.tr
                                                key={item.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                className="group"
                                            >
                                                <TableCell>
                                                    <div className="flex items-center gap-4">
                                                        <div className="h-24 w-24 rounded-xl overflow-hidden bg-muted/30 transition-transform group-hover:scale-105">
                                                            <img 
                                                                src={item.image} 
                                                                alt={item.name}
                                                                className="h-full w-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-medium text-lg">{item.name}</h3>
                                                            <Button 
                                                                variant="ghost" 
                                                                size="sm"
                                                                className="text-destructive hover:text-destructive/80 mt-1 p-0 h-auto"
                                                            >
                                                                <TrashIcon className="h-4 w-4 mr-1" />
                                                                Remove
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-center gap-3">
                                                        <QuantityButton onClick={() => {}}>
                                                            <MinusIcon className="h-4 w-4" />
                                                        </QuantityButton>
                                                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                                                        <QuantityButton onClick={() => {}}>
                                                            <PlusIcon className="h-4 w-4" />
                                                        </QuantityButton>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div>
                                                        <p className="font-semibold text-lg">
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </p>
                                                        <p className="text-sm text-muted-foreground">
                                                            ${item.price.toFixed(2)} each
                                                        </p>
                                                    </div>
                                                </TableCell>
                                            </motion.tr>
                                        ))}
                                    </AnimatePresence>
                                </TableBody>
                            </Table>
                            <CardFooter className="flex justify-between pt-6">
                                <Button 
                                    variant="outline" 
                                    className="gap-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                                >
                                    <ArrowLeftIcon className="h-4 w-4" />
                                    Continue Shopping
                                </Button>
                                <Button 
                                    variant="destructive" 
                                    className="rounded-full"
                                >
                                    <TrashIcon className="h-4 w-4 mr-2" />
                                    Clear Cart
                                </Button>
                            </CardFooter>
                        </Card>

       
                    </div>

                    <div className="lg:col-span-1">
                        <Card className="sticky top-4 border-none shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl">Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Shipping</span>
                                        <span className="font-medium">${shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Tax</span>
                                        <span className="font-medium">${tax.toFixed(2)}</span>
                                    </div>
                                </div>
                                
                                <Separator className="my-4" />
                                
                                <div className="flex justify-between text-lg font-semibold">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                
                                <Link 
                                    className="
                                    w-full flex items-center justify-center py-5 bg-[--theme-bg-accent]
                                    mt-6 rounded-full text-lg h-12 text-white
                                    "
                                    // size="lg"
                                    href={'/checkout'}
                                >
                                    <CreditCard className="mr-2 h-5 w-5" />
                                    Checkout Now
                                </Link>

                                <div className="mt-6 space-y-4">
                                    <WeAcceptPayments />
                                    <p className="text-xs text-center text-muted-foreground">
                                        By proceeding to checkout, you agree to our{" "}
                                        <a href="#" className="underline hover:text-primary">terms of service</a>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartPage