/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

"use client"


import React, { FC, Fragment, Suspense, useEffect, useRef, useState } from 'react'
import Form from '../../_auth_components/Form'
import { Formik, Form as FormikForm } from 'formik'
import * as Yup from 'yup'
import InputBox from '../../_auth_components/InputBox'
import CheckInputBox from '../../_auth_components/CheckInputBox'
import AuthButton from '../../_auth_components/AuthButton'
import Link from 'next/link'
import ElseContinueWith from '../../_auth_components/ElseContinueWith'
import Facebook from '../../_auth_components/icons/Facebook'
import Google from '../../_auth_components/icons/Google'
import Awaiter from '@/_lib/utils/awaiter'
import { errorToast, successToast } from '@/_lib/core/toast'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import AuthRequestClient from '../../_core/AuthRequest'
import PasswordInput from '../../_auth_components/PasswordInput'


// Validation schema using Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required')
    .max(100, "email is to long")
    .min(7, "email is too short"),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password is too long')
    .required('Password is required'),
});


let initialValues = {
  email: '',
  password: '',
}




const SignInPage :FC= () => {
    let searchParams = useSearchParams();
    let [redirect, setRedirect] = useState(() => {
      try {
        let r = searchParams.get('redirect') || '/account';
        let url = new URL(r);
        return url.toString();
      } catch (error) {
        return '/search'
      }
    });
    const router = useRouter();
    
    useEffect(() => {
      async function starter() {
        try {
          let response = await AuthRequestClient.get(process.env.NEXT_PUBLIC_SERVER_ORIGIN + '/api/auth/is-authenticated', { giveDetails: true })
          switch (response.status) {
            case 200:
              console.log("Client : User Is Still Logged In , Making User Logged Out");
              let res = await AuthRequestClient.post(process.env.NEXT_PUBLIC_SERVER_ORIGIN + '/api/auth/log-out', {}, { giveDetails: true });
              if (res.status === 200) {
                console.log("Client : User is Logged Out SuccessFully");
              } else {
                console.log("Client : Failed to Logged Out The user");
              }
              break;
            case 401:
              console.log("Client : User is not Logged In");
              break;
            default:
              console.log("Client :Server Error in making user logged out");
              break;
          }
        } catch (error) {
          console.log(error);
        }
      }
      starter();
    }, []);
  
    async function handleSubmit(values: { email: string; password: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) {
      try {
        let requestUrl = process.env.NEXT_PUBLIC_SERVER_ORIGIN + "/api/auth/sign-in";
        let response = await AuthRequestClient.post(requestUrl, values, { giveDetails: true });
  
        switch (response.status) {
          case 204:
            successToast("You Are Already Logged In");
            router.push(redirect);
            break;
  
          case 200:
            successToast("You Are Logged In SuccessFully");
            router.push(redirect);
            break;
  
          case 400:
            console.log(response.json);
            if (response.json?.message) errorToast(response.json?.message);
            else errorToast("Unknown Server Error Failed To Logged In");
            break;
  
          default:
            errorToast("Unknow server Error , Please Contact Support");
            break;;
        }
  
      } catch (error) {
        if (typeof error === "string") {
          errorToast(error)
        } else {
          errorToast("Unknow Server Error")
        }
      } finally {
        setSubmitting(false);
      }
    }
    return (
      <>
        <Form
          title='Sign In'
          details='Please enter your credentials to continue'
        >
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched, setFieldValue, values }) => (
              <FormikForm className="space-y-6 w-full">
  
  
                <InputBox
                  title='Email address'
                  name='email'
                  type='email'
                  placeholder='jondue@gmail.com'
                  hasError={(errors.email && touched.email) ? true : false}
                />
  
  
                <PasswordInput
                  title='Password'
                  name='password'
            
                  placeholder='*******'
                  hasError={(errors.email && touched.email) ? true : false}
                />
  
  
  
                <CheckInputBox
                  title='Remember Me'
                  name='remember-me'
                  
                />
  
  
                <AuthButton
                  isSubmitting={isSubmitting}
                  submitName='Sign In'
                  submitingName='Signing In ...'
                />
  
  
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link href={"/sign-up?" + (new URLSearchParams({redirect }).toString() ) } className="font-medium text-indigo-600 hover:text-indigo-500">
                      Create an account
                    </Link>
                  </p>
                </div>
  
  
                <ElseContinueWith
                  elseOption={
                    [
                      {
                        name: 'Facebook',
                        Icon: Facebook,
                        Action: () => { }
                      },
                      {
                        name: "Google",
                        Icon: Google,
                        Action: () => { }
                      }
                    ]
                  }
                />
              </FormikForm>
  
  
  
            )}
  
          </Formik>
        </Form>
      </>
    );
  }



export default SignInPage;