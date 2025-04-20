import React from 'react';
import { 
  User, Mail, Phone, Calendar, MapPin, 
  Camera, Shield, Lock, Key, Edit
} from 'lucide-react';
import { Button } from '@/components/ui/shadcn/button';

const InfoSection: React.FC = () => {
  return (
    <div className="space-y-8 transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-6">
        <h1 className="text-2xl font-bold text-gray-900">Profile Information</h1>
        <Button className="inline-flex items-center px-4 py-2 text-white rounded-xl hover:bg-primary-700 transition-colors">
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      {/* Profile Summary */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 bg-gradient-to-r from-primary-50 to-white rounded-2xl">
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
          <h2 className="text-2xl font-bold text-gray-900">Mubtasimf443</h2>
          <p className="text-gray-500 flex items-center">
            <Shield className="w-4 h-4 mr-2 text-primary-600" />
            Premium Member
          </p>
          <p className="text-sm text-gray-500">Member since April 2025</p>
        </div>
      </div>

      {/* Personal Information Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <User className="w-4 h-4 mr-2 text-primary-600" />
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              value="Mubtasim"
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Mail className="w-4 h-4 mr-2 text-primary-600" />
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              value="mubtasim@example.com"
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Phone className="w-4 h-4 mr-2 text-primary-600" />
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              value="+880 1234567890"
              readOnly
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Calendar className="w-4 h-4 mr-2 text-primary-600" />
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              value="2000-01-01"
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <MapPin className="w-4 h-4 mr-2 text-primary-600" />
              Location
            </label>
            <input
              type="text"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              value="Dhaka, Bangladesh"
              readOnly
            />
          </div>
        </div>
      </div>

    
 

    </div>
  );
};

export default InfoSection;