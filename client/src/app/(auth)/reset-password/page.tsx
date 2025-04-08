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
const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password is too long')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

const Page: React.FC = () => {
  const handleSubmit = async (values: { password: string; confirmPassword: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      // Here you would typically make an API call to reset the password
      console.log('Reset password values:', values);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Handle successful password reset (e.g., redirect to login page)
    } catch (error) {
      console.error('Reset password error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Left side - Brand/Welcome section */}
      <div className="hidden md:flex md:w-1/2 bg-indigo-600 text-white flex-col justify-center items-center p-12">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-6">Reset Password</h1>
          <p className="text-lg mb-8">Create a new secure password for your account to keep your data protected.</p>
          <div className="w-64 h-64 mx-auto relative mb-8">
            {/* Illustration placeholder */}
            <div className="w-full h-full bg-indigo-500 rounded-full opacity-50 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Right side - Reset password form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Create New Password</h2>
            <p className="mt-2 text-gray-600">Please enter your new password below</p>
          </div>
          
          <Formik
            initialValues={{ password: '', confirmPassword: '' }}
            validationSchema={ResetPasswordSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      className={`appearance-none rounded-md relative block w-full px-3 py-3 border ${
                        errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                      } placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Enter your new password"
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
                      placeholder="Confirm your new password"
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
                        Resetting...
                      </>
                    ) : 'Reset Password'}
                  </button>
                </div>
                
                <div className="text-center mt-4">
                  <Link href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
                    Back to login
                  </Link>
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
