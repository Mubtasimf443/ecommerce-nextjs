/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import {  IUserFormDataErrors, IUserFormDataTouched } from './UserFormData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { Label } from '@/components/ui/shadcn/label';
import { Input } from '@/components/ui/shadcn/input';
import { FormikErrors, FormikTouched, FormikValues } from 'formik';
import { Select,SelectItem,SelectTrigger,SelectContent, SelectValue } from '@/components/ui/shadcn/select';

interface Props {
    values: FormikValues;
    errors: FormikErrors<IUserFormDataErrors>;
    touched: FormikTouched<IUserFormDataTouched>;
    handleChange: (v: any) => void
}



const AddressSubForm: FC<Props> = ({ values, touched, errors, handleChange }) => {
    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                            id="address"
                            name="address"
                            onChange={handleChange}
                            className={errors.address && touched.address ? 'border-red-500' : ''}
                        />
                        {errors.address && touched.address && (
                            <p className="text-xs text-red-500">{errors.address}</p>
                        )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input
                                id="city"
                                name="city"
                                onChange={handleChange}
                                className={errors.city && touched.city ? 'border-red-500' : ''}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="state">State / Province</Label>
                            <Input
                                id="state"
                                name="state"
                                onChange={handleChange}
                                className={errors.state && touched.state ? 'border-red-500' : ''}
                            />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="postalCode">Postal code</Label>
                            <Input
                                id="postalCode"
                                name="postalCode"
                                onChange={handleChange}
                                className={errors.postalCode && touched.postalCode ? 'border-red-500' : ''}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Select name="country" onValueChange={(value) => handleChange({ target: { name: 'country', value } })}>
                                <SelectTrigger className={errors.country && touched.country ? 'border-red-500' : ''}>
                                    <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="BD">Bangladesh</SelectItem>
                                    <SelectItem value="US">United States</SelectItem>
                                    <SelectItem value="UK">United Kingdom</SelectItem>
                                    <SelectItem value="CA">Canada</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Fragment>
    )
}

export default AddressSubForm