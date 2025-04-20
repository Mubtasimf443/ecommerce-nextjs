/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
"use client"

import React from 'react';
import { Plus, MapPin, Edit2, Trash2, Star, Building, Phone } from 'lucide-react';
import { Button } from '@/components/ui/shadcn/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Badge } from "@/components/ui/shadcn/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import { cn } from "@/lib/utils";
import AddAddressDialog from './AddAddressDialog';
import dialogStore from './dialogStore';

interface Address {
  id: number;
  type: string;
  name: string;
  address: string;
  division: string;
  district: string;
  upazila: string;
  city: string;
  phone: string;
  isDefault: boolean;
}

const AddressSection: React.FC = () => {
  const store = dialogStore();
  const setIsDialogOpen =store.setIsDialogOpen;
  const addresses: Address[] = [
    {
      id: 1,
      type: 'Home',
      name: 'Mubtasim',
      address: 'House #123, Road #12',
      division: 'Dhaka',
      district: 'Dhaka',
      upazila: 'Uttara',
      city: 'Sector 10',
      phone: '+880 1234567890',
      isDefault: true,
    },
    {
      id: 2,
      type: 'Office',
      name: 'Mubtasim',
      address: 'House #456, Road #7',
      division: 'Dhaka',
      district: 'Dhaka',
      upazila: 'Gulshan',
      city: 'Gulshan 2',
      phone: '+880 1987654321',
      isDefault: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Addresses</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your delivery addresses
          </p>
        </div>
        <AddAddressDialog />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add New Address Card */}
        <Card 
        onClick={() => setIsDialogOpen(true)}
        className="border-dashed hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer group">
          <CardContent className="flex flex-col items-center justify-center h-[250px] gap-4">
            <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Plus className="w-6 h-6 text-primary" />
            </div>
            <div className="text-center">
              <h3 className="font-medium text-lg">Add New Address</h3>
              <p className="text-sm text-muted-foreground">
                Add a new delivery address for your orders
              </p>
            </div>
          </CardContent>
        </Card>

        {addresses.map((address) => (
          <Card 
            key={address.id} 
            className={cn(
              "relative group hover:shadow-md transition-all duration-200",
              address.isDefault && "border-primary/50 bg-primary/5"
            )}
          >
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {address.type}
                </CardTitle>
                <CardDescription>{address.name}</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                    <Edit2 className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Address
                  </DropdownMenuItem>
                  {!address.isDefault && (
                    <DropdownMenuItem>
                      <Star className="w-4 h-4 mr-2" />
                      Set as Default
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Address
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>

            <CardContent className="space-y-4">
              {address.isDefault && (
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 absolute top-4 right-4">
                  Default
                </Badge>
              )}

              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span>{address.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>
                    {address.city}, {address.upazila}, {address.district}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{address.phone}</span>
                </p>
              </div>

              {!address.isDefault && (
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => console.log('Set as default:', address.id)}
                >
                  Set as Default
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AddressSection;