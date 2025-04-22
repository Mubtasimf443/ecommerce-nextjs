/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
"use client"
import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { Button } from '@/components/ui/shadcn/button';
import { Loader2Icon } from 'lucide-react';
import CartSummary from './_components/CartSummary';
import ContactSubForm from './_components/ContactSubForm';
import AddressSubForm from './_components/AddressSubForm';
import PaymentSubForm from './_components/PaymentSubForm';
import MobileOrderView from './_components/MobileOrderView';
import {PhoneDetails , PhoneDetailsState } from './_components/PhoneDetails.types';


// Validation schema remains the same
// Update the CheckoutSchema
const CheckoutSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phone: Yup.string()
      .required('Phone number is required')
      .min(11, 'Phone number must be 11 digits')
      .max(11, 'Phone number must be 11 digits'),
  address: Yup.string().required('Required'),
  division: Yup.string().required('Division is required'),
  district: Yup.string().required('District is required'),
  upazila: Yup.string().required('Upazila is required'),
  city: Yup.string().required('City is required'),
  paymentMethod: Yup.string().required('Required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  address: '',
  division: '',
  district: '',
  upazila: '',
  city: '',
  paymentMethod: 'bkash',
};

// Mock cart items remain the same
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
  const [shipping] = useState(5.99);
  const [total, setTotal] = useState(0);
  const [phoneDetails, setPhoneDetails] = useState<PhoneDetailsState>({
    countryName: 'Bangladesh',
    phoneCode: '+880',
    phoneNumber: '',
    isValid: false
  });

  useEffect(() => {
    const calculatedSubtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const calculatedTax = calculatedSubtotal * 0.08;
    const calculatedTotal = calculatedSubtotal + calculatedTax + shipping;

    setSubtotal(calculatedSubtotal);
    setTax(calculatedTax);
    setTotal(calculatedTotal);
  }, [cartItems, shipping]);

  const handleSubmit : any = async (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {

    // Combine form values with phone details
      const orderData = {
        ...values,
        phoneDetails: {
          ...phoneDetails,
          phoneNumber: values.phone // Ensure phone number is included
        }
      };

      console.log('Submitting order with data:', orderData);

      // Here you would make your API call to process the order
      // await processOrder(orderData);

      // Show success message or redirect
      alert('Order placed successfully!');
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

  React.useEffect(() => {
    if (phoneDetails?.phoneNumber) {
      const isValidPhoneNumber = /^\d{11}$/.test(phoneDetails.phoneNumber);
      setPhoneDetails(prev => prev ? {
        ...prev,
        isValid: isValidPhoneNumber
      } : null);
    }
  }, [phoneDetails?.phoneNumber]);

  return (
    <section className="min-h-screen bg-gray-50/50 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Checkout</h1>
          <p className="mt-2 text-gray-600">Complete your purchase securely</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <Formik
              initialValues={initialValues}
              validationSchema={CheckoutSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values, handleChange, isSubmitting ,setFieldValue }) => (
                <Form className="space-y-6">

<ContactSubForm
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
                setPhoneDetails={setPhoneDetails}
            />


                  <AddressSubForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    // setFieldValue={setFieldValue}
                  />

                  <PaymentSubForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                  />

                  <div className="flex items-center justify-between">
                    <Button variant="outline" asChild>
                      <Link href="/cart">Back to Cart</Link>
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Complete Order'
                      )}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="lg:col-span-5">
            <div className="hidden lg:block sticky top-6">
              <CartSummary
                cartItems={initialCartItems}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
              />
            </div>

            
            <MobileOrderView 
             cartItems={initialCartItems}
             updateQuantity={updateQuantity}
             removeItem={removeItem}
             subtotal={subtotal}
             shipping={shipping}
             tax={tax}
             total={total}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;