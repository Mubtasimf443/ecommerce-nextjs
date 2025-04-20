"use client"

import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/shadcn/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/shadcn/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";
import { Label } from "@/components/ui/shadcn/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/shadcn/alert-dialog";
import { Card } from "@/components/ui/shadcn/card";
import dialogStore from './dialogStore';

const ValidationSchema = Yup.object().shape({
  division: Yup.string()
    .min(3, 'Division must be at least 3 characters')
    .max(35, 'Division must be at most 35 characters')
    .required('Division is required'),
  district: Yup.string()
    .min(3, 'District must be at least 3 characters')
    .max(35, 'District must be at most 35 characters')
    .required('District is required'),
  upazila: Yup.string()
    .min(3, 'Upazila must be at least 3 characters')
    .max(35, 'Upazila must be at most 35 characters')
    .required('Upazila is required'),
  city: Yup.string()
    .min(3, 'City must be at least 3 characters')
    .max(35, 'City must be at most 35 characters')
    .required('City is required')
});

interface FormValues {
  division: string;
  district: string;
  upazila: string;
  city: string;
}

// Bangladesh location data
const bangladeshData = {
  divisions: [
    'Dhaka',
    'Chittagong',
    'Rajshahi',
    'Khulna',
    'Barisal',
    'Sylhet',
    'Rangpur',
    'Mymensingh'
  ],
  districts: {
    'Dhaka': ['Dhaka', 'Gazipur', 'Narayanganj', 'Tangail', 'Munshiganj'],
    'Chittagong': ['Chittagong', "Cox's Bazar", 'Rangamati', 'Bandarban', 'Khagrachari'],
    // Add more as needed
  },
  upazilas: {
    'Dhaka': ['Uttara', 'Mirpur', 'Gulshan', 'Mohammadpur', 'Dhanmondi'],
    'Gazipur': ['Gazipur Sadar', 'Kapasia', 'Kaliganj', 'Kaliakair'],
    // Add more as needed
  },
  cities: {
    'Uttara': ['Sector 1', 'Sector 4', 'Sector 7', 'Sector 10', 'Sector 13'],
    'Mirpur': ['Mirpur 1', 'Mirpur 2', 'Mirpur 10', 'Mirpur 11', 'Mirpur 12'],
    // Add more as needed
  }
};

const AddAddressDialog = () => {
  const { isDialogOpen, setIsDialogOpen } = dialogStore();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  
  const initialValues: FormValues = {
    division: '',
    district: '',
    upazila: '',
    city: '',
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <MapPin className="w-5 h-5 text-primary" />
            Add New Address
          </DialogTitle>
          <DialogDescription>
            Select your location details for delivery
          </DialogDescription>
        </DialogHeader>

        <Formik
          initialValues={initialValues}
          validationSchema={ValidationSchema}
          onSubmit={(values) => {
            setShowConfirmDialog(true);
          }}
        >
          {({ errors, touched, setFieldValue, values, isValid }) => (
            <Form className="space-y-6 py-4">
              <Card className="p-6 border-dashed">
                <div className="grid gap-6">
                  {/* Division Select */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      Division
                    </Label>
                    <Select
                      name="division"
                      onValueChange={(value) => {
                        setFieldValue('division', value);
                        setFieldValue('district', '');
                        setFieldValue('upazila', '');
                        setFieldValue('city', '');
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select division" />
                      </SelectTrigger>
                      <SelectContent>
                        {bangladeshData.divisions.map((division) => (
                          <SelectItem key={division} value={division}>
                            {division}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.division && touched.division && (
                      <p className="text-sm text-destructive mt-1">{errors.division}</p>
                    )}
                  </div>

                  {/* District Select */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      District
                    </Label>
                    <Select
                      name="district"
                      onValueChange={(value) => {
                        setFieldValue('district', value);
                        setFieldValue('upazila', '');
                        setFieldValue('city', '');
                      }}
                      disabled={!values.division}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        {values.division &&
                          bangladeshData.districts[values.division]?.map((district) => (
                            <SelectItem key={district} value={district}>
                              {district}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    {errors.district && touched.district && (
                      <p className="text-sm text-destructive mt-1">{errors.district}</p>
                    )}
                  </div>

                  {/* Upazila Select */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      Upazila
                    </Label>
                    <Select
                      name="upazila"
                      onValueChange={(value) => {
                        setFieldValue('upazila', value);
                        setFieldValue('city', '');
                      }}
                      disabled={!values.district}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select upazila" />
                      </SelectTrigger>
                      <SelectContent>
                        {values.district &&
                          bangladeshData.upazilas[values.district]?.map((upazila) => (
                            <SelectItem key={upazila} value={upazila}>
                              {upazila}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    {errors.upazila && touched.upazila && (
                      <p className="text-sm text-destructive mt-1">{errors.upazila}</p>
                    )}
                  </div>

                  {/* City Select */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      City/Area
                    </Label>
                    <Select
                      name="city"
                      onValueChange={(value) => setFieldValue('city', value)}
                      disabled={!values.upazila}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select city/area" />
                      </SelectTrigger>
                      <SelectContent>
                        {values.upazila &&
                          bangladeshData.cities[values.upazila]?.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    {errors.city && touched.city && (
                      <p className="text-sm text-destructive mt-1">{errors.city}</p>
                    )}
                  </div>
                </div>
              </Card>

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>

                <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
                  <AlertDialogTrigger asChild>
                    <Button type="submit" disabled={!isValid}>
                      Save Address
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirm Address</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to add this address?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => {
                          console.log('Saving address...', values);
                          setIsDialogOpen(false);
                          setShowConfirmDialog(false);
                        }}
                      >
                        Add Address
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddAddressDialog;