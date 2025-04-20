/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

'use client'
import React from 'react';
import { 
  User, Mail, Phone, MapPin, 
  Camera, Shield, Building2,
  Home, Map, Navigation
} from 'lucide-react';
import { Button } from '@/components/ui/shadcn/button';
import { Input } from "@/components/ui/shadcn/input";
import { Label } from "@/components/ui/shadcn/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Separator } from "@/components/ui/shadcn/separator";
import { Badge } from "@/components/ui/shadcn/badge";
import EditProfileDialog from './EditProfileDialog';

const InfoSection: React.FC = () => {
  return (
    <div className="space-y-8 transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile Information</h1>
          <p className="text-sm text-muted-foreground mt-1">
            View and manage your personal information
          </p>
        </div>
        <EditProfileDialog />
      </div>

      {/* Profile Summary Card */}
      <Card className="bg-gradient-to-r from-primary-50/50 to-white border-none shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="relative">
              <img
                src="/images/avatar.png"
                alt="Profile"
                className="w-32 h-32 rounded-2xl object-cover ring-4 ring-white shadow-lg"
                loading='lazy'
              />
              <button className="absolute bottom-2 right-2 p-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-900">Mubtasimf443</h2>
                <Badge variant="secondary" className="bg-primary-100 text-primary-700">
                  <Shield className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">Member since April 2025</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Contact Information</CardTitle>
            <CardDescription>Your primary contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="flex items-center text-sm">
                <User className="w-4 h-4 mr-2 text-primary-600" />
                Full Name
              </Label>
              <Input
                type="text"
                value="Mubtasim"
                readOnly
                className="bg-gray-50"
              />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2 text-primary-600" />
                Email Address
              </Label>
              <Input
                type="email"
                value="mubtasim@example.com"
                readOnly
                className="bg-gray-50"
              />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2 text-primary-600" />
                Phone Number
              </Label>
              <Input
                type="tel"
                value="+880 1234567890"
                readOnly
                className="bg-gray-50"
              />
            </div>
          </CardContent>
        </Card>

        {/* Address Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Address Details</CardTitle>
            <CardDescription>Your location information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="flex items-center text-sm">
                <Building2 className="w-4 h-4 mr-2 text-primary-600" />
                Division
              </Label>
              <Input
                type="text"
                value="Dhaka"
                readOnly
                className="bg-gray-50"
              />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center text-sm">
                <Map className="w-4 h-4 mr-2 text-primary-600" />
                District
              </Label>
              <Input
                type="text"
                value="Dhaka"
                readOnly
                className="bg-gray-50"
              />
            </div>

           
              <div className="space-y-2">
                <Label className="flex items-center text-sm">
                  <Navigation className="w-4 h-4 mr-2 text-primary-600" />
                  Upazila
                </Label>
                <Input
                  type="text"
                  value="Uttara"
                  readOnly
                  className="bg-gray-50"
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center text-sm">
                  <Home className="w-4 h-4 mr-2 text-primary-600" />
                  City/Area
                </Label>
                <Input
                  type="text"
                  value="Sector 10"
                  readOnly
                  className="bg-gray-50"
                />
              </div>
        
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoSection;