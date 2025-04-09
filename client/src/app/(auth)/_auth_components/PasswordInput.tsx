/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import { ErrorMessage, Field } from 'formik';
import React, { FC, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';


interface Props {
    name: string;
    hasError?: boolean;
    title: string;
    placeholder: string;
}

const PasswordInput: FC<Props> = ({ name, hasError, title, placeholder, }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div>
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{title}</label>
                <div className=' relative' >


                    <Field
                        id={name}
                        name={name}
                        type={showPassword ? "text" : "password"}
                        autoComplete={name}
                        placeholder={placeholder}
                        className={`block w-full px-4 py-3 rounded-lg border ${hasError ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`}

                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? (
                            <EyeOff size={20} />
                        ) : (
                            <Eye size={20} />
                        )}
                    </button>
                </div>

                <ErrorMessage name={name} component="div" className="mt-1 text-sm text-red-600" />
            </div>
        </>
    )
}

export default PasswordInput
