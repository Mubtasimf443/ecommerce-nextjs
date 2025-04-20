/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
"use client"

import React, { useMemo, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
    User, Mail, Phone, MapPin,
    Edit, Camera, Building2
} from 'lucide-react';
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
import { Input } from "@/components/ui/shadcn/input";
import { Label } from "@/components/ui/shadcn/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/shadcn/avatar";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/shadcn/select';


// Validation Schema
const ValidationSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name is too long')
        .required('Name is required'),
    email: Yup.string()
        .email('Please enter a valid email')
        .required('Email is required'),
    phone: Yup.string()
        .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Invalid phone number')
        .required('Phone number is required'),
    avatar: Yup.string(),
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
        .required('City is required'),
});


interface FormValues {
    fullName: string;
    email: string;
    phone: string;
    avatar: string;
    division: string;
    district: string;
    upazila: string;
    city: string;
}


const EditProfileDialog = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    let [districtList, setDistrictList] = useState<any[]>([]);
    let [upazilaList, setUpazilaList] = useState<any[]>([]);
    let [citiestList, setCitiesList] = useState<any[]>([]);
    let [divisions, setDivisions] = useState<any[]>([]);
    let [EnableDistrictSelect, setEnableDistricSelect] = useState<boolean>(false);
    let [EnableUpazilaSelect, setEnableUpazilaSelect] = useState<boolean>(false);
    let [EnableCitiesSelect, setEnableCitiesSelect] = useState<boolean>(false);
    const [selectedDivisionID, setSelectedDivisionID] = useState<string>('');
    const [selectedDistrictID, setSelectedDistrictID] = useState<string>('');
    const [selectedUpazilaID, setSelectedUpazilaID] = useState<string>('');

    useMemo(async () => {
        try {
            
        } catch (error) {
            
        } finally {

        }
    } , [])
    const initialValues: FormValues = {
        fullName: "Mubtasimf443",
        email: "mubtasim@example.com",
        phone: "+880 1234567890",
        avatar: "/images/avatar.png",
        division: "",
        district: "",
        upazila: "",
        city: "",
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, setFieldValue: (field: string, value: any) => void) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
                setFieldValue('avatar', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button
                    className="inline-flex items-center px-4 py-2 text-white rounded-xl hover:bg-primary-700 transition-colors"
                >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[500px] max-h-dvh overflow-y-scroll">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold">Edit Profile</DialogTitle>
                    <DialogDescription>
                        Update your personal information
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
                            <Card className="border-dashed">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-4">
                                        <div className="relative">
                                            <Avatar className="w-24 h-24">
                                                <AvatarImage
                                                    src={selectedImage || values.avatar}
                                                    alt="Profile"
                                                />
                                                <AvatarFallback className="bg-primary-50 text-primary-700">
                                                    {values.fullName?.substring(0, 2).toUpperCase()}
                                                </AvatarFallback>
                                            </Avatar>
                                            <label htmlFor="avatar-upload">
                                                <div className="absolute bottom-0 right-0 rounded-full h-8 w-8 cursor-pointer shadow-lg hover:shadow-xl transition-all flex items-center justify-center bg-primary-600 hover:bg-primary-700">
                                                    <Camera className="h-4 w-4 text-white" />
                                                </div>
                                            </label>
                                            <input
                                                id="avatar-upload"
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => handleImageUpload(e, setFieldValue)}
                                            />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Click the camera icon to change your profile picture
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <Label htmlFor="fullName" className="flex items-center text-sm font-medium">
                                        <User className="w-4 h-4 mr-2" />
                                        Full Name
                                    </Label>
                                    <Field
                                        as={Input}
                                        id="fullName"
                                        name="fullName"
                                        className={`mt-1.5 ${errors.fullName && touched.fullName ? 'border-red-500 focus:ring-red-500' : ''
                                            }`}
                                    />
                                    {errors.fullName && touched.fullName && (
                                        <p className="mt-1.5 text-sm text-red-500">{errors.fullName}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="email" className="flex items-center text-sm font-medium">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Email Address
                                    </Label>
                                    <Field
                                        as={Input}
                                        id="email"
                                        name="email"
                                        type="email"
                                        className={`mt-1.5 ${errors.email && touched.email ? 'border-red-500 focus:ring-red-500' : ''
                                            }`}
                                    />
                                    {errors.email && touched.email && (
                                        <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="phone" className="flex items-center text-sm font-medium">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Phone Number
                                    </Label>
                                    <Field
                                        as={Input}
                                        id="phone"
                                        name="phone"
                                        className={`mt-1.5 ${errors.phone && touched.phone ? 'border-red-500 focus:ring-red-500' : ''
                                            }`}
                                    />
                                    {errors.phone && touched.phone && (
                                        <p className="mt-1.5 text-sm text-red-500">{errors.phone}</p>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-lg font-medium flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-primary-600" />
                                        Address Information
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="division" className="flex items-center text-sm font-medium">
                                                <Building2 className="w-4 h-4 mr-2" />
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
                                                <SelectTrigger className="mt-1.5">
                                                    <SelectValue placeholder="Select division" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {divisions.map((division , key) => (
                                                        <SelectItem value={division} key={key}>{division}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.division && touched.division && (
                                                <p className="mt-1.5 text-sm text-red-500">{errors.division}</p>
                                            )}
                                        </div>

                                        <div>
                                            <Label htmlFor="district" className="flex items-center text-sm font-medium">
                                                <Building2 className="w-4 h-4 mr-2" />
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
                                                <SelectTrigger className="mt-1.5">
                                                    <SelectValue placeholder="Select district" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {values.division &&
                                                        districtList.map((district) => (
                                                            <SelectItem key={district} value={district}>
                                                                {district}
                                                            </SelectItem>
                                                        ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.district && touched.district && (
                                                <p className="mt-1.5 text-sm text-red-500">{errors.district}</p>
                                            )}
                                        </div>

                                        <div>
                                            <Label htmlFor="upazila" className="flex items-center text-sm font-medium">
                                                <Building2 className="w-4 h-4 mr-2" />
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
                                                <SelectTrigger className="mt-1.5">
                                                    <SelectValue placeholder="Select upazila" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {values.district &&
                                                       upazilaList.map((upazila) => (
                                                            <SelectItem key={upazila} value={upazila}>
                                                                {upazila}
                                                            </SelectItem>
                                                        ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.upazila && touched.upazila && (
                                                <p className="mt-1.5 text-sm text-red-500">{errors.upazila}</p>
                                            )}
                                        </div>

                                        <div>
                                            <Label htmlFor="city" className="flex items-center text-sm font-medium">
                                                <Building2 className="w-4 h-4 mr-2" />
                                                City/Area
                                            </Label>
                                            <Select
                                                name="city"
                                                onValueChange={(value) => setFieldValue('city', value)}
                                                disabled={!values.upazila}
                                            >
                                                <SelectTrigger className="mt-1.5">
                                                    <SelectValue placeholder="Select city/area" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {values.upazila &&
                                                        citiestList.map((city) => (
                                                            <SelectItem key={city} value={city}>
                                                                {city}
                                                            </SelectItem>
                                                        ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.city && touched.city && (
                                                <p className="mt-1.5 text-sm text-red-500">{errors.city}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-4 pt-6">
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
                                            Save Changes
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Confirm Changes</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Are you sure you want to save these changes to your profile?
                                                This action cannot be undone.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction
                                                onClick={() => {
                                                    console.log('Saving changes...', values);
                                                    setIsDialogOpen(false);
                                                    setShowConfirmDialog(false);
                                                }}
                                            >
                                                Confirm
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

export default EditProfileDialog;