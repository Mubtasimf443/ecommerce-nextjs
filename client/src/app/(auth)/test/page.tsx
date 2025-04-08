/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"


import { useRouter, useSearchParams } from 'next/navigation';
import React, { useRef, useState } from 'react'
import Form from '../_auth_components/Form';
import { Formik , Form as FormikForm} from 'formik';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/shadcn/input-otp';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';


const page = () => {
    let searchParams = useSearchParams();
    let otp = useRef("")
    let [redirect, setRedirect] = useState(() => {
        try {
            let r = searchParams.get('redirect') || '/search';
            let url = new URL(r);
            return url.toString();
        } catch (error) {
            return '/search'
        }
    });
    const router = useRouter();

    const initialValues ={}
    async function HandleSubmit() {
        
    }
    return (
        <Form title='Verify Your Account' details='Enter the 6-digit code we sent to your email/phone'>
            <Formik 
            initialValues={initialValues}
            onSubmit={HandleSubmit}
            >
                {({ isSubmitting, errors, touched, setFieldValue, values }) => (
                    <>
                    <FormikForm >
                            <InputOTP 
                            onChange={(val : any) => {
                                
                            }}
                             maxLength={6}
                             pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                             value={otp.current}
                            >
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                    </FormikForm>
                    </>
                )}

            </Formik>
        </Form>
    )
}

export default page
