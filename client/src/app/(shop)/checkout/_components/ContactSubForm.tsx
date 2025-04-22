/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import { IUserFormDataErrors, IUserFormDataTouched } from './UserFormData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { Label } from '@/components/ui/shadcn/label';
import { Input } from '@/components/ui/shadcn/input';
import { Textarea } from '@/components/ui/shadcn/textarea';
import { FormikErrors, FormikTouched, FormikValues } from 'formik';
import PhoneInput from './PhoneInput'; // Assuming you have this component

interface Props {
    values: FormikValues;
    errors: FormikErrors<IUserFormDataErrors>;
    touched: FormikTouched<IUserFormDataTouched>;
    handleChange: (v: any) => void;
    setPhoneDetails?: (details: any) => void;
}

const ContactSubForm: FC<Props> = ({ values, touched, errors, handleChange, setPhoneDetails }) => {
    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First name</Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                onChange={handleChange}
                                className={errors.firstName && touched.firstName ? 'border-red-500' : ''}
                            />
                            {errors.firstName && touched.firstName && (
                                <p className="text-xs text-red-500">{errors.firstName}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last name</Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                onChange={handleChange}
                                className={errors.lastName && touched.lastName ? 'border-red-500' : ''}
                            />
                            {errors.lastName && touched.lastName && (
                                <p className="text-xs text-red-500">{errors.lastName}</p>
                            )}
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            className={errors.email && touched.email ? 'border-red-500' : ''}
                        />
                        {errors.email && touched.email && (
                            <p className="text-xs text-red-500">{errors.email}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <PhoneInput
                            name="phone"
                            setValue={handleChange}
                            hasError={!!(errors.phone && touched.phone)}
                            setPhoneDetails={setPhoneDetails}
                        />
                        {errors.phone && touched.phone && (
                            <p className="text-xs text-red-500">{errors.phone}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                            id="notes"
                            name="notes"
                            placeholder="Add any special delivery instructions or notes..."
                            onChange={handleChange}
                            className="min-h-[100px] resize-y"
                        />
                    </div>
                </CardContent>
            </Card>
        </Fragment>
    )
}

export default ContactSubForm