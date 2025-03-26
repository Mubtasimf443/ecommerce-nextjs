/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"

import React, { useId, useState } from 'react';

interface ModernCheckboxProps {
  label: string;
}

const Checkbox : React.FC<ModernCheckboxProps> = ({label}) => {
    const id = useId();
    const [isChecked, setIsChecked] = useState(false);

    return (
        <label key={label} className='inline-flex relative items-center cursor-pointer'>
        <input type="checkbox" id={label} className='sr-only peer' />
        <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-md peer-checked:bg-indigo-600 peer-checked:border-indigo-600 peer-hover:border-gray-500 transition-all duration-200 ease-in-out flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white hidden peer-checked:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
        </div>
        <span className="ml-3 text-gray-700">{label}</span>
    </label>
    )
}

export default Checkbox;
