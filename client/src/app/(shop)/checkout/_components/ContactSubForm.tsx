/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import { IUserFormDataErrors, IUserFormDataTouched } from './UserFormData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/card'
import { Label } from '@/components/ui/shadcn/label'
import { Input } from '@/components/ui/shadcn/input'
import { FormikErrors, FormikTouched, FormikValues } from 'formik'
import PhoneInput from '@/app/(auth)/_auth_components/PhoneInput'

interface Props {
    values: FormikValues;
    errors: FormikErrors<IUserFormDataErrors>;
    touched: FormikTouched<IUserFormDataTouched>;
    handleChange: (v: any) => void;
    setFieldValue: (field: string, value: any) => void;
    setPhoneDetails: React.Dispatch<React.SetStateAction<any>>;
}

const ContactSubForm: FC<Props> = ({
    values,
    touched,
    errors,
    handleChange,
    setFieldValue,
    setPhoneDetails
}) => {
    return (
        <Fragment>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <CardTitle className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span>Contact Information</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 p-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                                First name
                            </Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                onChange={handleChange}
                                value={values.firstName}
                                className={`transition-all duration-200 ${
                                    errors.firstName && touched.firstName
                                        ? 'border-red-500 focus:ring-red-500'
                                        : 'border-gray-300 focus:ring-blue-500'
                                }`}
                                placeholder="John"
                            />
                            {errors.firstName && touched.firstName && (
                                <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                                Last name
                            </Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                onChange={handleChange}
                                value={values.lastName}
                                className={`transition-all duration-200 ${
                                    errors.lastName && touched.lastName
                                        ? 'border-red-500 focus:ring-red-500'
                                        : 'border-gray-300 focus:ring-blue-500'
                                }`}
                                placeholder="Doe"
                            />
                            {errors.lastName && touched.lastName && (
                                <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <PhoneInput
                            name="phone"
                            setValue={setFieldValue}
                            hasError={!!(errors.phone && touched.phone)}
                            setPhoneDetails={setPhoneDetails}
                            className="w-full"
                        />
                    </div>
                </CardContent>
            </Card>
        </Fragment>
    )
}

export default ContactSubForm