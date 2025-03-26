/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Image from 'next/image';

// Validation schema using Yup
const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name is too short')
    .max(50, 'First name is too long')
    .required('First name is required'),
  lastName: Yup.string()
    .min(2, 'Last name is too short')
    .max(50, 'Last name is too long')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password is too long')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  address: Yup.string()
    .required('Shipping address is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, 'Phone number must be between 10-15 digits')
    .required('Phone number is required'),
});

const Page: React.FC = () => {
  const handleSubmit = async (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      // Here you would typically make an API call to register the user
      console.log('Signup values:', values);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Handle successful registration (e.g., redirect to shop, show success message)
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Left side - Brand/Welcome section */}
      <div className="hidden md:flex md:w-1/2 bg-indigo-600 text-white flex-col justify-center items-center p-12">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-6">Join Our Shop</h1>
          <p className="text-lg mb-8">Create an account to start shopping and get access to exclusive deals and offers.</p>
          <div className="w-64 h-64 mx-auto relative mb-8">
            {/* Shopping illustration placeholder */}
            <div className="w-full h-full bg-indigo-500 rounded-full opacity-50 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Right side - Sign up form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Create Shopping Account</h2>
            <p className="mt-2 text-gray-600">Fill in your details to start shopping with us</p>
          </div>
          
          <Formik
            initialValues={{ 
              firstName: '', 
              lastName: '', 
              email: '', 
              password: '', 
              confirmPassword: '',
              address: '',
              phone: '' 
            }}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <Field
                        id="firstName"
                        name="firstName"
                        type="text"
                        className={`appearance-none rounded-md relative block w-full px-3 py-3 border ${
                          errors.firstName && touched.firstName ? 'border-red-500' : 'border-gray-300'
                        } placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        placeholder="Enter your first name"
                      />
                      <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <Field
                        id="lastName"
                        name="lastName"
                        type="text"
                        className={`appearance-none rounded-md relative block w-full px-3 py-3 border ${
                          errors.lastName && touched.lastName ? 'border-red-500' : 'border-gray-300'
                        } placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        placeholder="Enter your last name"
                      />
                      <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={`appearance-none rounded-md relative block w-full px-3 py-3 border ${
                        errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                      } placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Enter your email address"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Field
                      id="phone"
                      name="phone"
                      type="tel"
                      className={`appearance-none rounded-md relative block w-full px-3 py-3 border ${
                        errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'
                      } placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Enter your phone number"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
                    <Field
                      as="textarea"
                      id="address"
                      name="address"
                      rows={3}
                      className={`appearance-none rounded-md relative block w-full px-3 py-3 border ${
                        errors.address && touched.address ? 'border-red-500' : 'border-gray-300'
                      } placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Enter your shipping address"
                    />
                    <ErrorMessage name="address" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      className={`appearance-none rounded-md relative block w-full px-3 py-3 border ${
                        errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                      } placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Create a password"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <Field
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      className={`appearance-none rounded-md relative block w-full px-3 py-3 border ${
                        errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : 'border-gray-300'
                      } placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Confirm your password"
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          <svg className="animate-spin h-5 w-5 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </span>
                        Creating Account...
                      </>
                    ) : 'Create Shopping Account'}
                  </button>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
                      Sign in
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Page;
