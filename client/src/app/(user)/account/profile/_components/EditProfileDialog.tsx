"use client"

import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { 
  User, Mail, Phone, Calendar, MapPin, 
  Edit, Upload, Camera, ArrowLeft, ArrowRight
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
import { Separator } from "@/components/ui/shadcn/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/shadcn/avatar";

// Validation Schema
const ValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Invalid phone number')
    .required('Phone number is required'),
  dateOfBirth: Yup.date()
    .max(new Date(), 'Date of birth cannot be in the future')
    .required('Date of birth is required'),
  location: Yup.string()
    .min(2, 'Location is too short')
    .required('Location is required'),
  avatar: Yup.string(),
});

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  location: string;
  avatar: string;
}

const EditProfileDialog = () => {
  const [step, setStep] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const initialValues: FormValues = {
    fullName: "Mubtasimf443",
    email: "mubtasim@example.com",
    phone: "+880 1234567890",
    dateOfBirth: "2000-01-01",
    location: "Dhaka, Bangladesh",
    avatar: "/images/avatar.png",
  };

  const steps = [
    {
      title: "Basic Information",
      description: "Let's start with your basic details",
      fields: ["fullName", "email"],
    },
    {
      title: "Contact Information",
      description: "How can others reach you?",
      fields: ["phone", "location"],
    },
  ];

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

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Step {step} of {steps.length}: {steps[step - 1].description}
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
              {step === 1 && (
                <div className="space-y-6">
                  {/* Profile Picture Upload */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                      <Avatar className="w-24 h-24">
                        <AvatarImage 
                          src={selectedImage || values.avatar} 
                          alt="Profile" 
                        />
                        <AvatarFallback>
                          {values.fullName?.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <label htmlFor="avatar-upload">
                        <Button
                          type="button"
                          size="icon"
                          variant="secondary"
                          className="absolute bottom-0 right-0 rounded-full h-8 w-8 cursor-pointer"
                        >
                          <Camera className="h-4 w-4" />
                        </Button>
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
                      Click the camera icon to upload a new profile picture
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name
                      </Label>
                      <Field
                        as={Input}
                        id="fullName"
                        name="fullName"
                        className={`mt-1 rounded-lg ${
                          errors.fullName && touched.fullName ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.fullName && touched.fullName && (
                        <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address
                      </Label>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        className={`mt-1 rounded-lg ${
                          errors.email && touched.email ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="phone">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </Label>
                    <Field
                      as={Input}
                      id="phone"
                      name="phone"
                      className={`mt-1 rounded-lg ${
                        errors.phone && touched.phone ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.phone && touched.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="location">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Location
                    </Label>
                    <Field
                      as={Input}
                      id="location"
                      name="location"
                      className={`mt-1 rounded-lg ${
                        errors.location && touched.location ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.location && touched.location && (
                      <p className="mt-1 text-sm text-red-500">{errors.location}</p>
                    )}
                  </div>
                </div>
              )}

         

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  disabled={step === 1}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {step < steps.length ? (
                  <Button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    disabled={!isValid}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
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
                )}
              </div>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;