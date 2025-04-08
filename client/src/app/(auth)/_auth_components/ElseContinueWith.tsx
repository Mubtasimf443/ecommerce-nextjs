/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

"use client"
import React from 'react'


interface IElseOption {
    
        name: string;
        Icon: React.ElementType
        Action: () => void
    
}
interface Props {
    elseOption: IElseOption[]
}

const ElseContinueWith = (props: Props) => {
    return (
        <>
            <div className="mt-8">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                    {props.elseOption.map((element, index) => (
                        
                            <button
                                key={index}
                                type="button"
                                className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <element.Icon className="w-5 h-5 mr-2"/>
                                <span>{element.name}</span>
                            </button>
                        
                    ))}
                </div>
            </div>
        </>
    )
}

export default ElseContinueWith
