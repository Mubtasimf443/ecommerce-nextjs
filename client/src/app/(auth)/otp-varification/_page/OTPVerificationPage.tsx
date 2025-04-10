/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import Form from '../../_auth_components/Form';
import { Formik, Form as FormikForm } from 'formik';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/shadcn/input-otp';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { successToast, errorToast } from '@/_lib/core/toast';
import AuthButton from '../../_auth_components/AuthButton';
import * as Yup from 'yup';
import AuthRequestClient from '../../_core/AuthRequest';

// Validation schema for OTP
const otpValidationSchema = Yup.object().shape({
    otp: Yup.string()
        .required('OTP is required')
        .matches(/^\d{6}$/, 'OTP must be exactly 6 digits')
});

const OTPVerificationPage = () => {
    const searchParams = useSearchParams();
    const [otp, setOTP] = useState("");
    const remainingAuthSessionTime =useRef(600);
    const [isResending, setIsResending] = useState(false);
    const [remainingTime, setRemainingTime] = useState(60);
    const [verificationError, setVerificationError] = useState("");
    const router = useRouter();

    // Get and validate redirect URL
    const redirect = useRef(searchParams.get('redirect') || '/account').current;

    // Get email/phone for display
    const contactInfo = searchParams.get('contact') || 'your email';

    // Timer for resend cooldown
    useEffect(() => {
        let timer: any;

        if (remainingTime > 0) {
            timer = setTimeout(() => {
                setRemainingTime(prev => prev - 1);
            }, 1000);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [remainingTime]);


    useEffect(function () {
        let timer: any;

        if (remainingAuthSessionTime.current <= 0) {
            errorToast("Your Account Creation Session Expired. Please Create Your Account Again");
            router.push('/sign-up?' + new URLSearchParams({redirect}).toString());
        }

        if (remainingAuthSessionTime.current > 0) {
            timer = setTimeout(() => {
                remainingAuthSessionTime.current = remainingAuthSessionTime.current -1;
            }, 1000);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    },[remainingAuthSessionTime] )
    // Focus first input on mount
    useEffect(() => {
        const firstInput = document.querySelector('input[aria-label="Digit 1"]') as HTMLInputElement;
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }, []);

    useEffect(() => {
        if (otp.length === 6) {
            // Add a small delay for better UX
            const timer = setTimeout(() => {
                document.getElementById('verify-button')?.click();
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [otp]);

    const initialValues = {
        otp: ""
    };

    const handleResendOTP = async () => {
        if (remainingTime > 0) return;

        setIsResending(true);
        try {
            let res =await AuthRequestClient.post(process.env.NEXT_PUBLIC_SERVER_ORIGIN +'/api/auth/sign-up/resend-verification-code' , {} , {giveDetails:true})
            switch (res.status) {
                case 200:
                    successToast('A new verification code has been sent');
                    setRemainingTime(60);
                    break;
                case 400:
                    if (res.json?.success === false && res.json?.message) errorToast(res.json.message);
                    else errorToast('Failed to Resend Otp');
                    console.error(res.json);
                    break;
                case 500:
                    errorToast('Failed to Resend Otp as Server error');
                    console.error(res.json);
                    break;
            }
           
        } catch (error) {
            errorToast('Failed to resend verification code');
            console.error('Resend OTP error:', error);
        } finally {
            setIsResending(false);
        }
    };

    const handleSubmit = async (values: any, { setSubmitting }: any) => {
        setVerificationError("");

        try {
            let response = await AuthRequestClient.post(process.env.NEXT_PUBLIC_SERVER_ORIGIN + '/api/auth/sign-up/verification', {otp :Number( values.otp)}, { giveDetails: true })
            switch (response.status ) {
                case 200:
                    successToast('Verification successful!');
                    router.push(redirect);
                    break;
                case 400:
                    console.log(response.json);
                    if (response.json?.message) errorToast(response.json.message);
                    else errorToast("Unknown Server Error");
                    break;
                case 500:
                    console.log(response.json);
                    errorToast("Server Error Please Contact Us");
                    break;
            }
        } catch (error) {
            setVerificationError("Verification failed. Please try again.");
            console.error('OTP verification error:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Form title='Verify Your Account' details={`Enter the 6-digit code we sent to ${contactInfo}`}>
            <Formik
                initialValues={initialValues}
                validationSchema={otpValidationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, errors, touched, setFieldValue }) => (
                    <FormikForm>
                        <div className="space-y-6">
                            <div className="flex flex-col items-center">
                                <InputOTP
                                    maxLength={6}
                                    pattern={REGEXP_ONLY_DIGITS}
                                    onChange={(value) => {
                                        setOTP(value);
                                        setFieldValue('otp', value);
                                    }}
                                    value={otp}
                                    disabled={isSubmitting}
                                    containerClassName="gap-2 sm:gap-4"
                                >
                                    <InputOTPGroup className='gap-x-2'>
                                        <InputOTPSlot index={0} className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 h-12 w-12 text-xl" />
                                        <InputOTPSlot index={1} className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 h-12 w-12 text-xl" />
                                        <InputOTPSlot index={2} className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 h-12 w-12 text-xl" />
                                        {/* <InputOTPSeparator>-</InputOTPSeparator> */}
                                        <InputOTPSlot index={3} className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 h-12 w-12 text-xl" />
                                        <InputOTPSlot index={4} className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 h-12 w-12 text-xl" />
                                        <InputOTPSlot index={5} className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 h-12 w-12 text-xl" />
                                    </InputOTPGroup>
                                </InputOTP>

                                {verificationError && (
                                    <div className="text-red-500 text-sm mt-2">{verificationError}</div>
                                )}

                                {errors.otp && touched.otp && (
                                    <div className="text-red-500 text-sm mt-2">{errors.otp}</div>
                                )}
                            </div>

                            <div className="py-5">
                                <AuthButton
                                    id="verify-button"
                                    isSubmitting={isSubmitting}
                                    submitName='Verify'
                                    submitingName='Verifying'
                                //   disabled={otp.length !== 6 || isSubmitting}
                                />
                            </div>

                            <div className="text-center text-sm">
                                <p className="text-gray-600">
                                    Didn't receive a code?{' '}

                                    {remainingTime > 0 ? (
                                        <span className="text-gray-500">
                                            Resend in {remainingTime}s
                                        </span>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={handleResendOTP}
                                            disabled={isResending}
                                            className="text-primary-600 hover:text-primary-800 font-medium focus:outline-none"
                                        >
                                            {isResending ? 'Sending...' : 'Resend Code'}
                                        </button>
                                    )}
                                </p>
                            </div>
                        </div>
                    </FormikForm>
                )}
            </Formik>
        </Form>
    );
};

export default OTPVerificationPage;