/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"

import Head from 'next/head'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { FC } from 'react'



const page: FC = () => {
    const searchParams = useSearchParams()
    let title = searchParams.get("title");
    let description = searchParams.get("description");

    if (!title || !description) {
        title = "Unknown Error";
        description = "Could Not Find the reason Of the error ";
    }
    

    const router = useRouter()
    const goBack = () => router.back();
    return (
        <>
            <Head>
                <title>{title} - Error</title>
            </Head>
            <div className="min-h-screen flex justify-center bg-gray-100 py-8">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full  h-fit">
                    <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                          <ErrorIcon />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
                        <p className="text-gray-600 mb-6">{description}</p>

                        <button
                            onClick={goBack}
                            className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page


function ErrorIcon() {
    return (
        <svg className="h-8 w-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    )
}