/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import { IUserFormData, IUserFormDataErrors, IUserFormDataTouched } from './UserFormData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { Label } from '@/components/ui/shadcn/label';
import { Input } from '@/components/ui/shadcn/input';
import { Textarea } from '@/components/ui/shadcn/textarea';
import { FormikErrors, FormikTouched, FormikValues } from 'formik';
import PhoneInput from './PhoneInput';
import { PhoneDetailsState } from './PhoneDetails.types';
import { cn } from '@/lib/utils';
interface Props {
    values: FormikValues;
    errors: FormikErrors<IUserFormDataErrors>;
    touched: FormikTouched<IUserFormDataTouched>;
    handleChange: (v: any) => void;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    setPhoneDetails: React.Dispatch<React.SetStateAction<PhoneDetailsState>>;
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
            <Card>
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName" className="font-medium">
                                First name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                placeholder="John"
                                className={cn(
                                    "transition-all duration-200 placeholder:text-muted-foreground/60",
                                    "focus:ring-2 focus:ring-offset-0 focus:ring-primary/20",
                                    errors.firstName && touched.firstName
                                        ? 'border-red-500 focus:border-red-500 placeholder-red-300'
                                        : 'hover:border-primary/50'
                                )}
                                aria-invalid={errors.firstName && touched.firstName ? "true" : "false"}
                                required
                            />
                            {errors.firstName && touched.firstName && (
                                <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                        <path d="M12 8v4m0 4h.01" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    {errors.firstName}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName" className="font-medium">
                                Last name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                placeholder="Doe"
                                className={cn(
                                    "transition-all duration-200 placeholder:text-muted-foreground/60",
                                    "focus:ring-2 focus:ring-offset-0 focus:ring-primary/20",
                                    errors.lastName && touched.lastName
                                        ? 'border-red-500 focus:border-red-500 placeholder-red-300'
                                        : 'hover:border-primary/50'
                                )}
                                aria-invalid={errors.lastName && touched.lastName ? "true" : "false"}
                                required
                            />
                            {errors.lastName && touched.lastName && (
                                <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                        <path d="M12 8v4m0 4h.01" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    {errors.lastName}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email" className="font-medium">
                            Email address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="john.doe@example.com"
                            className={cn(
                                "transition-all duration-200 placeholder:text-muted-foreground/60",
                                "focus:ring-2 focus:ring-offset-0 focus:ring-primary/20",
                                errors.email && touched.email
                                    ? 'border-red-500 focus:border-red-500 placeholder-red-300'
                                    : 'hover:border-primary/50'
                            )}
                            aria-invalid={errors.email && touched.email ? "true" : "false"}
                            required
                        />
                        {errors.email && touched.email && (
                            <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                    <path d="M12 8v4m0 4h.01" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <PhoneInput
                        name="phone"
                        setValue={(name, value) => setFieldValue(name, value)}
                        hasError={!!(errors.phone && touched.phone)}
                        setPhoneDetails={setPhoneDetails}
                        value={values.phone}
                    />

                    <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                            id="notes"
                            name="notes"
                            value={values.notes}
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

export default ContactSubForm;