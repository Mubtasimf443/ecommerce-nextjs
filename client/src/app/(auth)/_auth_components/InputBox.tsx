/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import { ErrorMessage, Field } from 'formik';
import React, { FC } from 'react'



interface Props {
    name: string;
    hasError ?: boolean ;
    title : string;
    placeholder : string;
    type : string;
    
}
const InputBox: FC<Props> = ({ hasError, name , title , placeholder , type, } ) => {
    return (
        <div>
            
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{title}</label>
            <Field
                id={name}
                name={name}
                type={type}
                autoComplete={name}
                placeholder={placeholder}
                className={`block w-full px-4 py-3 rounded-lg border ${hasError ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`}
              
            />
            <ErrorMessage name={name} component="div" className="mt-1 text-sm text-red-600" />
        </div>
    )
}

export default InputBox
