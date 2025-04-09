
/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/"use client"
import { Field, useField } from 'formik'
import React, { FC, useRef } from 'react'

interface Props {
    title: string
    name: string
    required?: boolean
}

const CheckInputBox: FC<Props> = (props) => {
    let checked = useRef(false)
    
    return (
        <div className="flex items-center">
           
            <Field
                id={props.name}
                name={props.name}
                type="checkbox"
                checked={checked.current}
                onClick={() => checked.current = !checked.current}
                required={props.required || true}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor={props.name} className="ml-2 block text-sm text-gray-700" onFocus={() => checked.current = !checked.current} >
                {props.title}
            </label>
        </div>
    )
}

export default CheckInputBox