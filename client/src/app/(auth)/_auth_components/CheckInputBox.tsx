
/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import { Field } from 'formik'
import React from 'react'
interface Props {
    title : string
    name : string
}

const CheckInputBox = (props : Props) => {
    return (
        <div className="flex items-center">
            <Field
                required={true}
                id={props.name}
                name={props.name}
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                {props.title}
            </label>
        </div>
    )
}

export default CheckInputBox
