/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
"use client"

import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Plus, Building2, User, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/shadcn/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";
import { Input } from "@/components/ui/shadcn/input";
import { Label } from "@/components/ui/shadcn/label";
import { Textarea } from "@/components/ui/shadcn/textarea";
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
import dialogStore from './dialogStore';

const ValidationSchema = Yup.object().shape({
  type: Yup.string()
    .required('Address type is required'),
  name: Yup.string()
    .required('Name is required'),
  phone: Yup.string()
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Invalid phone number')
    .required('Phone number is required'),
  address: Yup.string()
    .required('Street address is required'),
  division: Yup.string()
    .required('Division is required'),
  district: Yup.string()
    .required('District is required'),
  upazila: Yup.string()
    .required('Upazila is required'),
  city: Yup.string()
    .required('City is required'),
});

interface FormValues {
  type: string;
  name: string;
  phone: string;
  address: string;
  division: string;
  district: string;
  upazila: string;
  city: string;
}

const addressTypes = ['Home', 'Office', 'Others'];

// Use your Bangladesh location data here
const bangladeshData = {
  divisions: ['Dhaka', 'Chittagong', 'Rajshahi', 'Khulna'],
  districts: {
    'Dhaka': ['Dhaka', 'Gazipur', 'Narayanganj'],
    // Add more
  },
  upazilas: {
    'Dhaka': ['Uttara', 'Gulshan', 'Mirpur'],
    // Add more
  },
  cities: {
    'Uttara': ['Sector 1', 'Sector 2', 'Sector 3'],
    // Add more
  }
};

const AddAddressDialog = () => {
  const store = dialogStore();
  const isDialogOpen = store.isDialogOpen;
  const setIsDialogOpen = store.setIsDialogOpen;
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const initialValues: FormValues = {
    type: '',
    name: '',
    phone: '',
    address: '',
    division: '',
    district: '',
    upazila: '',
    city: '',
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Address
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Address</DialogTitle>
          <DialogDescription>
            Add a new delivery address for your orders
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
            <Form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="type">
                    <Building2 className="w-4 h-4 inline mr-2" />
                    Address Type
                  </Label>
                  <Select
                    name="type"
                    onValueChange={(value) => setFieldValue('type', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {addressTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.type && touched.type && (
                    <p className="text-sm text-destructive">{errors.type}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </Label>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    placeholder="Enter full name"
                  />
                  {errors.name && touched.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </Label>
                  <Field
                    as={Input}
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                  />
                  {errors.phone && touched.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Street Address
                  </Label>
                  <Field
                    as={Textarea}
                    id="address"
                    name="address"
                    placeholder="Enter street address"
                    className="resize-none"
                  />
                  {errors.address && touched.address && (
                    <p className="text-sm text-destructive">{errors.address}</p>
                  )}
                </div>

                {/* Add your cascading select fields for division, district, upazila, and city here */}
                {/* Similar to the previous example */}
              </div>

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
                      <AlertDialogTitle>Confirm New Address</AlertDialogTitle>
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