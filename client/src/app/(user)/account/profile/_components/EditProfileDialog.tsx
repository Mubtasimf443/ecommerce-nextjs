/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import React , { FC} from 'react'
import { 
    User, Mail, Phone, Calendar, MapPin, 
   Edit, Upload
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
  import { Input } from "@/components/ui/shadcn/input";
  import { Label } from "@/components/ui/shadcn/label";
  import { Separator } from "@/components/ui/shadcn/separator";
  import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/shadcn/avatar";
  
interface Props {

}
const EditProfileDialog :FC<Props> = () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="inline-flex items-center px-4 py-2 text-white rounded-xl hover:bg-primary-700 transition-colors">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile information here.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            {/* Profile Picture Upload */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/images/avatar.png" alt="Profile" />
                  <AvatarFallback>MF</AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8"
                >
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Click the button to upload a new profile picture
              </p>
            </div>
  
            <Separator />
  
            {/* Personal Information */}
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="fullName">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  defaultValue="Mubtasim"
                  className="rounded-lg"
                />
              </div>
  
              <div className="grid gap-2">
                <Label htmlFor="email">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="mubtasim@example.com"
                  className="rounded-lg"
                />
              </div>
  
              <div className="grid gap-2">
                <Label htmlFor="phone">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  defaultValue="+880 1234567890"
                  className="rounded-lg"
                />
              </div>
  
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="dob">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Date of Birth
                  </Label>
                  <Input
                    id="dob"
                    type="date"
                    defaultValue="2000-01-01"
                    className="rounded-lg"
                  />
                </div>
  
                <div className="grid gap-2">
                  <Label htmlFor="location">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    defaultValue="Dhaka, Bangladesh"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
  
            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-4">
              <DialogTrigger asChild>
                <Button variant="outline" className="rounded-lg">Cancel</Button>
              </DialogTrigger>
              <Button 
                type="submit" 
                className="rounded-lg"
                onClick={() => {
                  // Handle save logic here
                  console.log('Saving profile changes...');
                }}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  export default EditProfileDialog;