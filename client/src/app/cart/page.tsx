/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import React from 'react'

const CartPage: React.FC = () => {
    // Sample cart items - in a real app, these would come from a state management solution
    const cartItems = [
        { id: 1, name: "Wireless Headphones", price: 79.99, quantity: 1, image: "/images/products/headphones.jpg" },
        { id: 2, name: "Smartphone Case", price: 24.99, quantity: 2, image: "/images/products/phone-case.jpg" },
        { id: 3, name: "USB-C Cable", price: 12.99, quantity: 1, image: "/images/products/cable.jpg" },
    ];

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 5.99;
    const tax = subtotal * 0.07; // 7% tax rate
    const total = subtotal + shipping + tax;

    return (
        <div className="bg-dark-primary text-dark-text-primary min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
                
                {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                        <h2 className="text-2xl mb-4">Your cart is empty</h2>
                        <p className="mb-6">Looks like you haven't added anything to your cart yet.</p>
                        <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">
                            Continue Shopping
                        </a>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items */}
                        <div className="lg:w-2/3">
                            <div className="bg-dark-secondary rounded-lg shadow-md p-6 mb-4">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-dark-border">
                                            <th className="text-left pb-4">Product</th>
                                            <th className="text-center pb-4">Quantity</th>
                                            <th className="text-right pb-4">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.id} className="border-b border-dark-border">
                                                <td className="py-4">
                                                    <div className="flex items-center">
                                                        <div className="w-16 h-16 mr-4 bg-gray-200 rounded overflow-hidden">
                                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-medium">{item.name}</h3>
                                                            <button className="text-red-500 text-sm mt-1">Remove</button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-4">
                                                    <div className="flex justify-center">
                                                        <div className="flex items-center border border-dark-border rounded-md">
                                                            <button className="px-3 py-1 border-r border-dark-border">-</button>
                                                            <span className="px-3 py-1">{item.quantity}</span>
                                                            <button className="px-3 py-1 border-l border-dark-border">+</button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-4 text-right">
                                                    <div>
                                                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                                        <p className="text-sm text-dark-text-secondary">${item.price.toFixed(2)} each</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="/products" className="text-blue-500 hover:underline flex items-center">
                                    <span className="mr-2">←</span> Continue Shopping
                                </a>
                                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
                                    Clear Cart
                                </button>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-1/3">
                            <div className="bg-dark-secondary rounded-lg shadow-md p-6 sticky top-4">
                                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span>${shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Tax</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-dark-border pt-3 font-bold flex justify-between">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium">
                                    Proceed to Checkout
                                </button>
                                <div className="mt-4 text-sm text-dark-text-secondary">
                                    <p>We accept:</p>
                                    <div className="flex gap-2 mt-2">
                                        <div className="w-10 h-6 bg-gray-200 rounded"></div>
                                        <div className="w-10 h-6 bg-gray-200 rounded"></div>
                                        <div className="w-10 h-6 bg-gray-200 rounded"></div>
                                        <div className="w-10 h-6 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;