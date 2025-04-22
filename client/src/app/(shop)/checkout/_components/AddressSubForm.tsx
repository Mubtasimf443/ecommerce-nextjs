/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment, useEffect, useState } from 'react'
import { IUserFormDataErrors, IUserFormDataTouched, LocationData } from './UserFormData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/card'
import { Label } from '@/components/ui/shadcn/label'
import { Input } from '@/components/ui/shadcn/input'
import { FormikErrors, FormikTouched, FormikValues } from 'formik'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/shadcn/select'

interface Props {
    values: FormikValues;
    errors: FormikErrors<IUserFormDataErrors>;
    touched: FormikTouched<IUserFormDataTouched>;
    handleChange: (v: any) => void;
    setFieldValue: (field: string, value: any) => void;
}

const AddressSubForm: FC<Props> = ({
    values,
    touched,
    errors,
    handleChange,
    setFieldValue
}) => {
    const [divisions, setDivisions] = useState<LocationData[]>([]);
    const [districts, setDistricts] = useState<LocationData[]>([]);
    const [upazilas, setUpazilas] = useState<LocationData[]>([]);
    const [cities, setCities] = useState<LocationData[]>([]);
    const [loading, setLoading] = useState({
        divisions: false,
        districts: false,
        upazilas: false,
        cities: false
    });

    // Fetch divisions on mount
    useEffect(() => {
        const fetchDivisions = async () => {
            setLoading(prev => ({ ...prev, divisions: true }));
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ORIGIN}/api/location/divisions`);
                const data = await response.json();
                setDivisions(data.data);
            } catch (error) {
                console.error('Error fetching divisions:', error);
            } finally {
                setLoading(prev => ({ ...prev, divisions: false }));
            }
        };
        fetchDivisions();
    }, []);

    // Fetch districts when division changes
    useEffect(() => {
        if (!values.division) return;
        
        const fetchDistricts = async () => {
            setLoading(prev => ({ ...prev, districts: true }));
            try {
                const divisionId = divisions.find(d => d.name === values.division)?.id;
                if (!divisionId) return;

                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ORIGIN}/api/location/district?division_id=${divisionId}`);
                const data = await response.json();
                setDistricts(data.data);
            } catch (error) {
                console.error('Error fetching districts:', error);
            } finally {
                setLoading(prev => ({ ...prev, districts: false }));
            }
        };
        fetchDistricts();
    }, [values.division]);

    // Similar useEffects for upazilas and cities...

    return (
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Shipping Address</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">Division</Label>
                        <Select
                            name="division"
                            value={values.division}
                            onValueChange={(value) => {
                                setFieldValue('division', value);
                                setFieldValue('district', '');
                                setFieldValue('upazila', '');
                                setFieldValue('city', '');
                            }}
                        >
                            <SelectTrigger className={`${errors.division && touched.division ? 'border-red-500' : ''}`}>
                                <SelectValue placeholder="Select division" />
                            </SelectTrigger>
                            <SelectContent>
                                {divisions.map((division) => (
                                    <SelectItem key={division.id} value={division.name}>
                                        {division.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.division && touched.division && (
                            <p className="text-xs text-red-500 mt-1">{errors.division}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">District</Label>
                        <Select
                            name="district"
                            value={values.district}
                            onValueChange={(value) => {
                                setFieldValue('district', value);
                                setFieldValue('upazila', '');
                                setFieldValue('city', '');
                            }}
                            disabled={!values.division || loading.districts}
                        >
                            <SelectTrigger className={`${errors.district && touched.district ? 'border-red-500' : ''}`}>
                                <SelectValue placeholder="Select district" />
                            </SelectTrigger>
                            <SelectContent>
                                {districts.map((district) => (
                                    <SelectItem key={district.id} value={district.name}>
                                        {district.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.district && touched.district && (
                            <p className="text-xs text-red-500 mt-1">{errors.district}</p>
                        )}
                    </div>
                </div>

                {/* Similar Select components for Upazila and City */}

                <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                        Street Address
                    </Label>
                    <Input
                        id="address"
                        name="address"
                        onChange={handleChange}
                        value={values.address}
                        className={`transition-all duration-200 ${
                            errors.address && touched.address
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-gray-300 focus:ring-green-500'
                        }`}
                        placeholder="House number, street name, area"
                    />
                    {errors.address && touched.address && (
                        <p className="text-xs text-red-500 mt-1">{errors.address}</p>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export default AddressSubForm