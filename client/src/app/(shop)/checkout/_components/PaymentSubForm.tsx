/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import { FormikErrors, FormikTouched, FormikValues } from 'formik';
import { IUserFormDataErrors, IUserFormDataTouched } from './UserFormData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { Label } from '@/components/ui/shadcn/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/shadcn/radio-group';
import { Badge } from '@/components/ui/shadcn/badge';

interface Props {
    values: FormikValues;
    errors: FormikErrors<IUserFormDataErrors>;
    touched: FormikTouched<IUserFormDataTouched>;
    handleChange: (v: any) => void
}

const PaymentSubForm: FC<Props> = ({ values, touched, errors, handleChange }) => {
  return (
    <Fragment>
           <Card>
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <RadioGroup
                        name="paymentMethod"
                        value={values.paymentMethod}
                        onValueChange={(value) => handleChange({ target: { name: 'paymentMethod', value } })}
                        className="grid grid-cols-2 gap-4"
                      >
                        <Label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="bkash" id="bkash" />
                          <span>bKash</span>
                          <Badge className="ml-auto">Popular</Badge>
                        </Label>
                        <Label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="nagad" id="nagad" />
                          <span>Nagad</span>
                        </Label>
                        <Label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="rocket" id="rocket" />
                          <span>Rocket</span>
                        </Label>
                        <Label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="cod" id="cod" />
                          <span>Cash on Delivery</span>
                        </Label>
                      </RadioGroup>
                    </CardContent>
                  </Card>
    </Fragment>
  )
}

export default PaymentSubForm