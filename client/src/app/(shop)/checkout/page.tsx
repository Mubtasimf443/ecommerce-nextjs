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

// Validation schema remains the same
const CheckoutSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  paymentMethod: Yup.string().required('Required'),
});


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

  useEffect(() => {
    const calculatedSubtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const calculatedTax = calculatedSubtotal * 0.08;
    const calculatedTotal = calculatedSubtotal + calculatedTax + shipping;

    setSubtotal(calculatedSubtotal);
    setTax(calculatedTax);
    setTotal(calculatedTotal);
  }, [cartItems, shipping]);

  const handleSubmit = async (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      console.log('Order details:', { ...values, orderTotal: total, items: cartItems });
      await new Promise(resolve => setTimeout(resolve, 1500));
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
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                city: '',
                state: '',
                postalCode: '',
                country: '',
                paymentMethod: 'bkash',
              }}
              validationSchema={CheckoutSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values, handleChange, isSubmitting }) => (
                <Form className="space-y-6">

                  <ContactSubForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                  />


                  <AddressSubForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
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