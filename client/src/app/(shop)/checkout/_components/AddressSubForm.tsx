/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment, useEffect, useState } from 'react'
import { IUserFormDataErrors, IUserFormDataTouched } from './UserFormData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { Label } from '@/components/ui/shadcn/label';
import { Input } from '@/components/ui/shadcn/input';
import { FormikErrors, FormikTouched, FormikValues } from 'formik';
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@/components/ui/shadcn/select';

interface Props {
    values: FormikValues;
    errors: FormikErrors<IUserFormDataErrors>;
    touched: FormikTouched<IUserFormDataTouched>;
    handleChange: (v: any) => void;
}

const AddressSubForm: FC<Props> = ({ values, touched, errors, handleChange }) => {
    const [selectedDivisionID, setSelectedDivisionID] = useState<string>('');
    const [selectedDistrictID, setSelectedDistrictID] = useState<string>('');
    const [selectedUpazilaID, setSelectedUpazilaID] = useState<string>('');
    const [divisions, setDivisions] = useState<any[]>([]);
    const [districtList, setDistrictList] = useState<any[]>([]);
    const [upazilaList, setUpazilaList] = useState<any[]>([]);
    const [citiesList, setCitiesList] = useState<any[]>([]);
    const [enableDistrict, setEnableDistrict] = useState(false);
    const [enableUpazila, setEnableUpazila] = useState(false);
    const [enableCity, setEnableCity] = useState(false);

    // Fetch divisions on mount
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_SERVER_ORIGIN + "/api/location/divisions")
            .then(res => res.json())
            .then(data => setDivisions(data.data))
            .catch(error => console.error('Error fetching divisions:', error));
    }, []);

    // Fetch districts when division changes
    useEffect(() => {
        if (selectedDivisionID) {
            fetch(`${process.env.NEXT_PUBLIC_SERVER_ORIGIN}/api/location/district?division_id=${selectedDivisionID}`)
                .then(res => res.json())
                .then(data => {
                    setDistrictList(data.data);
                    setEnableDistrict(true);
                })
                .catch(error => console.error('Error fetching districts:', error));
        }
    }, [selectedDivisionID]);

    // Fetch upazilas when district changes
    useEffect(() => {
        if (selectedDistrictID) {
            fetch(`${process.env.NEXT_PUBLIC_SERVER_ORIGIN}/api/location/upazila?district_id=${selectedDistrictID}`)
                .then(res => res.json())
                .then(data => {
                    setUpazilaList(data.data);
                    setEnableUpazila(true);
                })
                .catch(error => console.error('Error fetching upazilas:', error));
        }
    }, [selectedDistrictID]);

    // Fetch cities when upazila changes
    useEffect(() => {
        if (selectedUpazilaID) {
            fetch(`${process.env.NEXT_PUBLIC_SERVER_ORIGIN}/api/location/city?upazila_id=${selectedUpazilaID}`)
                .then(res => res.json())
                .then(data => {
                    setCitiesList(data.data);
                    setEnableCity(true);
                })
                .catch(error => console.error('Error fetching cities:', error));
        }
    }, [selectedUpazilaID]);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Delivery Location</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="grid sm:grid-cols-2 gap-4">
                    {/* Division Select */}
                    <div className="space-y-2">
                        <Label htmlFor="division">Division</Label>
                        <Select
                            name="division"
                            onValueChange={(value) => {
                                handleChange({ target: { name: 'division', value } });
                                const division = divisions.find(d => d.name === value);
                                if (division) {
                                    setSelectedDivisionID(division.id);
                                    // Reset dependent fields
                                    handleChange({ target: { name: 'district', value: '' } });
                                    handleChange({ target: { name: 'upazila', value: '' } });
                                    handleChange({ target: { name: 'city', value: '' } });
                                    setEnableUpazila(false);
                                    setEnableCity(false);
                                }
                            }}
                        >
                            <SelectTrigger className={errors.division && touched.division ? 'border-red-500' : ''}>
                                <SelectValue placeholder="Select Division" />
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
                            <p className="text-xs text-red-500">{errors.division}</p>
                        )}
                    </div>

                    {/* District Select */}
                    <div className="space-y-2">
                        <Label htmlFor="district">District</Label>
                        <Select
                            name="district"
                            disabled={!enableDistrict}
                            onValueChange={(value) => {
                                handleChange({ target: { name: 'district', value } });
                                const district = districtList.find(d => d.name === value);
                                if (district) {
                                    setSelectedDistrictID(district.id);
                                    // Reset dependent fields
                                    handleChange({ target: { name: 'upazila', value: '' } });
                                    handleChange({ target: { name: 'city', value: '' } });
                                    setEnableCity(false);
                                }
                            }}
                        >
                            <SelectTrigger className={errors.district && touched.district ? 'border-red-500' : ''}>
                                <SelectValue placeholder="Select District" />
                            </SelectTrigger>
                            <SelectContent>
                                {districtList.map((district) => (
                                    <SelectItem key={district.id} value={district.name}>
                                        {district.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.district && touched.district && (
                            <p className="text-xs text-red-500">{errors.district}</p>
                        )}
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {/* Upazila Select */}
                    <div className="space-y-2">
                        <Label htmlFor="upazila">Upazila</Label>
                        <Select
                            name="upazila"
                            disabled={!enableUpazila}
                            onValueChange={(value) => {
                                handleChange({ target: { name: 'upazila', value } });
                                const upazila = upazilaList.find(u => u.name === value);
                                if (upazila) {
                                    setSelectedUpazilaID(upazila.id);
                                    // Reset city
                                    handleChange({ target: { name: 'city', value: '' } });
                                }
                            }}
                        >
                            <SelectTrigger className={errors.upazila && touched.upazila ? 'border-red-500' : ''}>
                                <SelectValue placeholder="Select Upazila" />
                            </SelectTrigger>
                            <SelectContent>
                                {upazilaList.map((upazila) => (
                                    <SelectItem key={upazila.id} value={upazila.name}>
                                        {upazila.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.upazila && touched.upazila && (
                            <p className="text-xs text-red-500">{errors.upazila}</p>
                        )}
                    </div>

                    {/* City Select */}
                    <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Select
                            name="city"
                            disabled={!enableCity}
                            onValueChange={(value) => {
                                handleChange({ target: { name: 'city', value } });
                            }}
                        >
                            <SelectTrigger className={errors.city && touched.city ? 'border-red-500' : ''}>
                                <SelectValue placeholder="Select City" />
                            </SelectTrigger>
                            <SelectContent>
                                {citiesList.map((city) => (
                                    <SelectItem key={city.id} value={city.name}>
                                        {city.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.city && touched.city && (
                            <p className="text-xs text-red-500">{errors.city}</p>
                        )}
                    </div>
                </div>

                {/* Postal Code */}
                <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                        id="postalCode"
                        name="postalCode"
                        onChange={handleChange}
                        className={errors.postalCode && touched.postalCode ? 'border-red-500' : ''}
                        placeholder="Enter postal code"
                    />
                    {errors.postalCode && touched.postalCode && (
                        <p className="text-xs text-red-500">{errors.postalCode}</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default AddressSubForm;