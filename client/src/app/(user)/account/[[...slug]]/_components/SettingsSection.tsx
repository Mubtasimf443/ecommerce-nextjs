/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings,
  Bell,
  Lock,
  Eye,
  Globe,
  CreditCard,
  Smartphone,
  Mail,
  Moon,
  Sun,
  ToggleLeft as Toggle,
  LanguagesIcon as Languages ,
  DollarSign,
  Trash2,
  Fingerprint,
  BellRing,
  Share2,
  Package,
  Shield,
}  from 'lucide-react';




interface SettingOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isEnabled: boolean;
}

const SettingsSection: React.FC = () => {
  // Theme state (you can integrate this with your theme system)
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Settings categories and their options
  const [notificationSettings, setNotificationSettings] = useState<SettingOption[]>([
    {
      id: 'order_updates',
      title: 'Order Updates',
      description: 'Get notified about your order status changes',
      icon: <Package className="w-5 h-5 text-indigo-500" />,
      isEnabled: true,
    },
    {
      id: 'price_alerts',
      title: 'Price Alerts',
      description: 'Receive alerts when items in your wishlist go on sale',
      icon: <BellRing className="w-5 h-5 text-green-500" />,
      isEnabled: true,
    },
    {
      id: 'security_alerts',
      title: 'Security Alerts',
      description: 'Get notified about important security updates',
      icon: <Shield className="w-5 h-5 text-red-500" />,
      isEnabled: true,
    },
  ]);

  const [privacySettings, setPrivacySettings] = useState<SettingOption[]>([
    {
      id: 'two_factor',
      title: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account',
      icon: <Fingerprint className="w-5 h-5 text-purple-500" />,
      isEnabled: false,
    },
    {
      id: 'activity_log',
      title: 'Activity Log',
      description: 'Track all activities on your account',
      icon: <Eye className="w-5 h-5 text-blue-500" />,
      isEnabled: true,
    },
    {
      id: 'data_sharing',
      title: 'Data Sharing',
      description: 'Control how your data is shared and used',
      icon: <Share2 className="w-5 h-5 text-orange-500" />,
      isEnabled: false,
    },
  ]);

  const toggleSetting = (settingId: string, category: 'notification' | 'privacy') => {
    const targetSettings = category === 'notification' ? notificationSettings : privacySettings;
    const setTargetSettings = category === 'notification' ? setNotificationSettings : setPrivacySettings;

    setTargetSettings(targetSettings.map(setting => 
      setting.id === settingId ? { ...setting, isEnabled: !setting.isEnabled } : setting
    ));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-6">
        <div className="flex items-center space-x-2">
          <Settings className="w-6 h-6 text-primary-600" />
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-8"
      >
        {/* Quick Settings */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Quick Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {isDarkMode ? (
                    <Moon className="w-5 h-5 text-purple-500" />
                  ) : (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  )}
                  <div>
                    <p className="font-medium text-gray-900">Theme</p>
                    <p className="text-sm text-gray-500">
                      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isDarkMode ? 'bg-purple-500' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isDarkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </motion.div>

            {/* Language Selector */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-900">Language</p>
                    <p className="text-sm text-gray-500">English (US)</p>
                  </div>
                </div>
                <button className="text-primary-600 hover:text-primary-700">
                  Change
                </button>
              </div>
            </motion.div>

            {/* Currency Selector */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-900">Currency</p>
                    <p className="text-sm text-gray-500">USD ($)</p>
                  </div>
                </div>
                <button className="text-primary-600 hover:text-primary-700">
                  Change
                </button>
              </div>
            </motion.div>

            {/* Email Preferences */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="font-medium text-gray-900">Email Preferences</p>
                    <p className="text-sm text-gray-500">Manage subscriptions</p>
                  </div>
                </div>
                <button className="text-primary-600 hover:text-primary-700">
                  Manage
                </button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Notification Settings */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
          <div className="space-y-4">
            {notificationSettings.map((setting) => (
              <motion.div
                key={setting.id}
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {setting.icon}
                    <div>
                      <p className="font-medium text-gray-900">{setting.title}</p>
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting(setting.id, 'notification')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      setting.isEnabled ? 'bg-primary-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        setting.isEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Privacy & Security */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Privacy & Security</h2>
          <div className="space-y-4">
            {privacySettings.map((setting) => (
              <motion.div
                key={setting.id}
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {setting.icon}
                    <div>
                      <p className="font-medium text-gray-900">{setting.title}</p>
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting(setting.id, 'privacy')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      setting.isEnabled ? 'bg-primary-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        setting.isEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Account Management */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Account Management</h2>
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100 hover:bg-red-100 transition-colors"
            >
              <div className="flex items-center justify-center space-x-2">
                <Trash2 className="w-5 h-5" />
                <span>Delete Account</span>
              </div>
            </motion.button>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default SettingsSection;