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
const OTPVerificationSchema = Yup.object().shape({
  digit1: Yup.string().required('Required').length(1, 'Enter a digit'),
  digit2: Yup.string().required('Required').length(1, 'Enter a digit'),
  digit3: Yup.string().required('Required').length(1, 'Enter a digit'),
  digit4: Yup.string().required('Required').length(1, 'Enter a digit'),
  digit5: Yup.string().required('Required').length(1, 'Enter a digit'),
  digit6: Yup.string().required('Required').length(1, 'Enter a digit'),
});

const Page: React.FC = () => {
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleSubmit = async (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      // Combine all digits into a single OTP code
      const otpCode = Object.values(values).join('');
      console.log('OTP Code:', otpCode);
      
      // Simulate API call to verify OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Handle successful verification (e.g., redirect to next step)
    } catch (error) {
      console.error('OTP verification error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle input focus movement
  const handleDigitInput = (e: React.ChangeEvent<HTMLInputElement>, nextFieldName: string | null) => {
    const value = e.target.value;
    
    if (value && nextFieldName) {
      const nextField = document.querySelector(`input[name="${nextFieldName}"]`) as HTMLInputElement;
      if (nextField) {
        nextField.focus();
      }
    }
  };

  const handleResendOTP = () => {
    // Logic to resend OTP
    console.log('Resending OTP...');
    setCountdown(60);
    setCanResend(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Left side - Brand/Welcome section */}
      <div className="hidden md:flex md:w-1/2 bg-indigo-600 text-white flex-col justify-center items-center p-12">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-6">Verification Required</h1>
          <p className="text-lg mb-8">Please enter the 6-digit code we sent to your email or phone to verify your account.</p>
          <div className="w-64 h-64 mx-auto relative mb-8">
            {/* Illustration for OTP verification */}
            <div className="w-full h-full bg-indigo-500 rounded-full opacity-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - OTP verification form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Verify Your Account</h2>
            <p className="mt-2 text-gray-600">Enter the 6-digit code we sent to your email/phone</p>
          </div>
          
          <Formik
            initialValues={{ digit1: '', digit2: '', digit3: '', digit4: '', digit5: '', digit6: '' }}
            validationSchema={OTPVerificationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-8">
                <div className="flex justify-center space-x-3">
                  {[1, 2, 3, 4, 5, 6].map((digit, index) => (
                    <div key={digit} className="w-12">
                      <Field
                        name={`digit${digit}`}
                        type="text"
                        maxLength={1}
                        className={`appearance-none block w-full px-0 py-4 border-b-2 text-center text-2xl bg-transparent text-black ${
                          errors[`digit${digit}` as keyof typeof errors] && touched[`digit${digit}` as keyof typeof touched] 
                            ? 'border-red-500' 
                            : 'border-indigo-300 focus:border-indigo-600'
                        } focus:outline-none transition-colors duration-200`}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                          handleDigitInput(e, digit < 6 ? `digit${digit + 1}` : null)
                        }
                      />
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-sm text-center">
                    {canResend ? (
                      <button
                        type="button"
                        onClick={handleResendOTP}
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                      >
                        Resend Code
                      </button>
                    ) : (
                      <p className="text-gray-600">
                        Resend code in <span className="font-medium text-indigo-600">{countdown}s</span>
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Verifying...
                      </>
                    ) : 'Verify & Continue'}
                  </button>
                </div>
                
                <div className="text-center mt-6">
                  <Link href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Login
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
