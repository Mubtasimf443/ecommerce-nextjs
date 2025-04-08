
/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import { Formik, Form as FormikForm } from 'formik';
import React from 'react'
import { ObjectSchema } from 'yup';

interface Props {
    title: string;
    details: string;
    children: React.ReactNode,
}
const Form = ({ title, details, children }: Props) => {
    return (
        <section className='w-full flex flex-row justify-center items-start py-5'>
            
            {/* Login form */}
            <div className="w-full max-w-md flex flex-col items-center justify-center p-6 md:p-12">
              
                <FormHeader title={title} details={details} />
                {children}
            </div>

            
            
            


        </section>
    )
}


export function FormHeader({title, details} : { title : string , details : string}) {
    return (
        <div className="w-full max-w-md">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
                <p className="mt-2 text-gray-600">{details}</p>
            </div>
        </div>
    )
}

export default Form




