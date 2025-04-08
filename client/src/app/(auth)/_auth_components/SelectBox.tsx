/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import { ErrorMessage, Field } from 'formik';
import React from 'react';


interface Iitem {
    name: string;
    value: string;
}
interface Props {
    name: string;
    hasError?: boolean;
    title: string;
    items: any[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled ?: boolean
}


const SelectBox = ({ hasError, name, title, items, onChange , disabled }: Props) => {
    return (
        <div className="relative">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {title}
            </label>
            <Field
                as="select"
                id={name}
                name={name}
                className={`block w-full px-4 py-3 border ${hasError ? 'border-red-500' : 'border-gray-300'} bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none`}
                onChange={onChange}
                disabled={disabled ? true : false}

            >
                <option value="">Select {title}</option>
                {items.map((element, index) => (
                    <option key={index} id={element.id} value={element.name} >{element.name}</option>
                ))}
            </Field>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
            <ErrorMessage name={name} component="span" className="text-red-500 text-xs mt-1" />

        </div>
    )
}



export default SelectBox
