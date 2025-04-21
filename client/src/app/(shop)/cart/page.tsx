/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
"use client"

import React from 'react'
import { MinusIcon, PlusIcon, TrashIcon, ArrowLeftIcon, CreditCard , ShoppingBagIcon} from "lucide-react"
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
import WeAcceptPayments from '@/components/custom/WeAcceptPayments'

const CartPage: React.FC = () => {
    // Sample cart items - in a real app, these would come from a state management solution
    const cartItems = [
        { id: 1, name: "Wireless Headphones", price: 79.99, quantity: 1, image: "/images/product.svg" },
        { id: 2, name: "Smartphone Case", price: 24.99, quantity: 2, image: "/images/product.svg" },
        { id: 3, name: "USB-C Cable", price: 12.99, quantity: 1, image: "/images/product.svg" },
    ];

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 5.99;
    const tax = subtotal * 0.07; // 7% tax rate
    const total = subtotal + shipping + tax;

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">Shopping Cart</h1>
                <Badge variant="secondary" className="text-sm">
                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </Badge>
            </div>

            {cartItems.length === 0 ? (
                <Card>
                    <CardContent className="flex flex-col items-center justify-center py-16">
                        <div className="rounded-full bg-muted p-6 mb-4">
                            <ShoppingBagIcon className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                        <p className="text-muted-foreground mb-6">
                            Looks like you haven't added anything to your cart yet.
                        </p>
                        <Button asChild>
                            <a href="/products">Browse Products</a>
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <Card>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Product</TableHead>
                                        <TableHead className="text-center">Quantity</TableHead>
                                        <TableHead className="text-right">Price</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {cartItems.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                <div className="flex items-center gap-4">
                                                    <div className="h-20 w-20 rounded-lg overflow-hidden bg-muted">
                                                        <img 
                                                            src={item.image} 
                                                            alt={item.name}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-medium">{item.name}</h3>
                                                        <Button 
                                                            variant="ghost" 
                                                            size="sm"
                                                            className="text-destructive hover:text-destructive mt-1 p-0 h-auto"
                                                        >
                                                            <TrashIcon className="h-4 w-4 mr-1" />
                                                            Remove
                                                        </Button>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center justify-center gap-2">
                                                    <Button 
                                                        variant="outline" 
                                                        size="icon"
                                                        className="h-8 w-8"
                                                    >
                                                        <MinusIcon className="h-4 w-4" />
                                                    </Button>
                                                    <span className="w-8 text-center">{item.quantity}</span>
                                                    <Button 
                                                        variant="outline" 
                                                        size="icon"
                                                        className="h-8 w-8"
                                                    >
                                                        <PlusIcon className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div>
                                                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                                    <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <CardFooter className="flex justify-between pt-6">
                                <Button variant="ghost" className="gap-2">
                                    <ArrowLeftIcon className="h-4 w-4" />
                                    Continue Shopping
                                </Button>
                                <Button variant="destructive" size="sm">
                                    <TrashIcon className="h-4 w-4 mr-2" />
                                    Clear Cart
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="lg:col-span-1">
                        <Card className="sticky top-4">
                            <CardHeader>
                                <CardTitle>Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <span>${shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <Separator />
                                <div className="flex justify-between font-medium">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <Button className="w-full mt-6" size="lg">
                                    <CreditCard className="mr-2 h-4 w-4" />
                                    Checkout Now
                                </Button>
                               <WeAcceptPayments />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartPage