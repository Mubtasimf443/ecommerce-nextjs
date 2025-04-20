/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, Mail, Phone, Calendar, Map,
  Camera, Shield, Lock, Key
} from 'lucide-react';

const InfoSection: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };



  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-6">
        <h1 className="text-2xl font-bold text-gray-900">Profile Information</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
        >
          Edit Profile
        </motion.button>
      </div>

      {/* Profile Picture Section */}
      <motion.div {...fadeInUp} className="flex items-center space-x-6">
        <div className="relative">
          <img
            src="https://api.dicebear.com/6.x/avataaars/svg?seed=Mubtasimf443"
            alt="Profile"
            className="w-32 h-32 rounded-2xl object-cover"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute bottom-2 right-2 p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700"
          >
            <Camera className="w-4 h-4" />
          </motion.button>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Mubtasimf443</h2>
          <p className="text-gray-500">Member since April 2025</p>
        </div>
      </motion.div>

      {/* Personal Information */}
      <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <User className="w-4 h-4 mr-2" />
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value="Mubtasim"
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Mail className="w-4 h-4 mr-2" />
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value="mubtasim@example.com"
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Phone className="w-4 h-4 mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value="+880 1234567890"
              readOnly
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Calendar className="w-4 h-4 mr-2" />
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value="2000-01-01"
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Map className="w-4 h-4 mr-2" />
              Location
            </label>
            <input
              type="text"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value="Dhaka, Bangladesh"
              readOnly
            />
          </div>
        </div>
      </motion.div>

      {/* Security Section */}
      <motion.div {...fadeInUp} className="pt-8 border-t">
        <h3 className="text-xl font-semibold mb-6 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-primary-600" />
          Security Settings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center px-6 py-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <Lock className="w-5 h-5 mr-3 text-gray-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Change Password</p>
              <p className="text-sm text-gray-500">Update your password regularly</p>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center px-6 py-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <Key className="w-5 h-5 mr-3 text-gray-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Two-Factor Authentication</p>
              <p className="text-sm text-gray-500">Add an extra layer of security</p>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default InfoSection;