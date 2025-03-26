/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

"use client"
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Image from 'next/image';

// Validation schema using Yup
const CheckoutSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required'),
  lastName: Yup.string()
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  address: Yup.string()
    .required('Shipping address is required'),
  city: Yup.string()
    .required('City is required'),
  state: Yup.string()
    .required('State/Province is required'),
  postalCode: Yup.string()
    .required('Postal code is required'),
  country: Yup.string()
    .required('Country is required'),
  paymentMethod: Yup.string()
    .required('Payment method is required'),
  cardNumber: Yup.string()
    .when('paymentMethod', {
      is: 'credit',
      then: (schema) => schema.required('Card number is required')
        .matches(/^\d{16}$/, 'Card number must be 16 digits'),
      otherwise: (schema) => schema.notRequired(),
    }),
  cardExpiry: Yup.string()
    .when('paymentMethod', {
      is: 'credit',
      then: (schema) => schema.required('Expiration date is required')
        .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiry date must be in MM/YY format'),
      otherwise: (schema) => schema.notRequired(),
    }),
  cardCvc: Yup.string()
    .when('paymentMethod', {
      is: 'credit',
      then: (schema) => schema.required('CVC is required')
        .matches(/^\d{3,4}$/, 'CVC must be 3 or 4 digits'),
      otherwise: (schema) => schema.notRequired(),
    }),
});

// Mock cart items for demonstration
const initialCartItems = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 129.99,
    quantity: 1,
    image: '/images/headphones.jpg'
  },
  {
    id: 2,
    name: 'Smartphone Fast Charger',
    price: 24.99,
    quantity: 2,
    image: '/images/charger.jpg'
  }
];

const Page: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [shipping, setShipping] = useState(5.99);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate order summary values
    const calculatedSubtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const calculatedTax = calculatedSubtotal * 0.08; // 8% tax rate
    const calculatedTotal = calculatedSubtotal + calculatedTax + shipping;
    
    setSubtotal(calculatedSubtotal);
    setTax(calculatedTax);
    setTotal(calculatedTotal);
  }, [cartItems, shipping]);

  const handleSubmit = async (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      // Here you would typically make an API call to process the order
      console.log('Order details:', { ...values, orderTotal: total, items: cartItems });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Handle successful order (e.g., redirect to confirmation page)
      alert('Order placed successfully!');
      // Redirect would go here
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Checkout</h1>
          <p className="mt-4 text-lg text-gray-500">Complete your purchase securely</p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          {/* Cart Summary - Mobile View */}
          <div className="lg:hidden mb-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex py-4 border-b">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
                        <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
                          <span className="text-xs">Image</span>
                        </div>
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.name}</h3>
                            <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex items-center">
                            <button 
                              type="button" 
                              className="font-medium text-gray-500 hover:text-gray-700 p-1"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="mx-2 text-gray-700">{item.quantity}</span>
                            <button 
                              type="button" 
                              className="font-medium text-gray-500 hover:text-gray-700 p-1"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <p>Subtotal</p>
                      <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <p>Shipping</p>
                      <p>${shipping.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <p>Tax</p>
                      <p>${tax.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between text-base font-medium text-gray-900 pt-4 border-t">
                      <p>Total</p>
                      <p>${total.toFixed(2)}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-7">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    address: '',
                    city: '',
                    state: '',
                    postalCode: '',
                    country: '',
                    paymentMethod: 'credit',
                    cardNumber: '',
                    cardExpiry: '',
                    cardCvc: '',
                  }}
                  validationSchema={CheckoutSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched, values, isSubmitting }) => (
                    <Form className="space-y-8">
                      <div>
                        <h2 className="text-lg font-medium text-gray-900">Contact Information</h2>
                        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                            <Field
                              id="firstName"
                              name="firstName"
                              type="text"
                              className={`mt-1 block w-full border ${errors.firstName && touched.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            />
                            <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs mt-1" />
                          </div>

                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                            <Field
                              id="lastName"
                              name="lastName"
                              type="text"
                              className={`mt-1 block w-full border ${errors.lastName && touched.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            />
                            <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs mt-1" />
                          </div>

                          <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                            <Field
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              className={`mt-1 block w-full border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-8">
                        <h2 className="text-lg font-medium text-gray-900">Shipping Information</h2>
                        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                          <div className="sm:col-span-2">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <Field
                              id="address"
                              name="address"
                              type="text"
                              className={`mt-1 block w-full border ${errors.address && touched.address ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            />
                            <ErrorMessage name="address" component="div" className="text-red-500 text-xs mt-1" />
                          </div>

                          <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                            <Field
                              id="city"
                              name="city"
                              type="text"
                              className={`mt-1 block w-full border ${errors.city && touched.city ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            />
                            <ErrorMessage name="city" component="div" className="text-red-500 text-xs mt-1" />
                          </div>

                          <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                            <Field
                              id="state"
                              name="state"
                              type="text"
                              className={`mt-1 block w-full border ${errors.state && touched.state ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            />
                            <ErrorMessage name="state" component="div" className="text-red-500 text-xs mt-1" />
                          </div>

                          <div>
                            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal code</label>
                            <Field
                              id="postalCode"
                              name="postalCode"
                              type="text"
                              className={`mt-1 block w-full border ${errors.postalCode && touched.postalCode ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            />
                            <ErrorMessage name="postalCode" component="div" className="text-red-500 text-xs mt-1" />
                          </div>

                          <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                            <Field
                              as="select"
                              id="country"
                              name="country"
                              className={`mt-1 block w-full border ${errors.country && touched.country ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            >
                              <option value="">Select a country</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="UK">United Kingdom</option>
                              <option value="AU">Australia</option>
                            </Field>
                            <ErrorMessage name="country" component="div" className="text-red-500 text-xs mt-1" />
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-8">
                        <h2 className="text-lg font-medium text-gray-900">Payment Method</h2>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-center">
                            <Field
                              id="bkash"
                              name="paymentMethod"
                              type="radio"
                              value="bkash"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="bkash" className="ml-3 block text-sm font-medium text-gray-700">
                              bKash
                            </label>
                          </div>
                          <div className="flex items-center">
                            <Field
                              id="nagad"
                              name="paymentMethod"
                              type="radio"
                              value="nagad"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="nagad" className="ml-3 block text-sm font-medium text-gray-700">
                              Nagad
                            </label>
                          </div>
                          <div className="flex items-center">
                            <Field
                              id="rocket"
                              name="paymentMethod"
                              type="radio"
                              value="rocket"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="rocket" className="ml-3 block text-sm font-medium text-gray-700">
                              Rocket
                            </label>
                          </div>
                          <div className="flex items-center">
                            <Field
                              id="cod"
                              name="paymentMethod"
                              type="radio"
                              value="cod"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="cod" className="ml-3 block text-sm font-medium text-gray-700">
                              Cash on Delivery
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="pt-5">
                        <div className="flex justify-between">
                          <Link href="/cart" className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Back to Cart
                          </Link>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                              </span>
                            ) : 'Complete Order'}
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>

          {/* Order Summary - Desktop View */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg sticky top-6">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                {cartItems.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty</p>
                ) : (
                  <>
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cartItems.map((item) => (
                          <li key={item.id} className="py-6 flex">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
                              <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
                                <span className="text-xs">Image</span>
                              </div>
                            </div>
                            <div className="ml-4 flex-1 flex flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>{item.name}</h3>
                                  <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                              </div>
                              <div className="flex-1 flex items-end justify-between text-sm">
                                <div className="flex items-center">
                                  <button 
                                    type="button" 
                                    className="font-medium text-gray-500 hover:text-gray-700 p-1"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  >
                                    -
                                  </button>
                                  <span className="mx-2 text-gray-700">{item.quantity}</span>
                                  <button 
                                    type="button" 
                                    className="font-medium text-gray-500 hover:text-gray-700 p-1"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    +
                                  </button>
                                </div>
                                <button
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                  onClick={() => removeItem(item.id)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-gray-200 mt-6 pt-6 space-y-4">
                      <div className="flex justify-between text-sm text-gray-600">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <p>Shipping</p>
                        <p>${shipping.toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <p>Tax</p>
                        <p>${tax.toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between text-base font-medium text-gray-900 pt-4 border-t">
                        <p>Total</p>
                        <p>${total.toFixed(2)}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
