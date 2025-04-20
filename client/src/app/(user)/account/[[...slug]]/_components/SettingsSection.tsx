/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

"use client"

import React, { useState } from 'react';
import {
  Settings,
  Bell,
  Lock,
  Eye,
  Globe,
  CreditCard,
  Mail,
  Moon,
  Sun,
  DollarSign,
  Trash2,
  Fingerprint,
  BellRing,
  Share2,
  Package,
  Shield,
  Smartphone,
  AlertTriangle
} from 'lucide-react';
import { Switch } from "@/components/ui/shadcn/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/shadcn/card"
import { Button } from "@/components/ui/shadcn/button"
import { Separator } from "@/components/ui/shadcn/separator"

interface SettingOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isEnabled: boolean;
}

const SettingsSection: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [notificationSettings, setNotificationSettings] = useState<SettingOption[]>([
    {
      id: 'push_notifications',
      title: 'Push Notifications',
      description: 'Allow push notifications to stay updated',
      icon: <Bell className="w-5 h-5 text-indigo-500" />,
      isEnabled: true,
    },
    {
      id: 'order_delivered',
      title: 'Order Delivery Notifications',
      description: 'Get notified when your order is delivered',
      icon: <Package className="w-5 h-5 text-green-500" />,
      isEnabled: true,
    },
    {
      id: 'price_alerts',
      title: 'Price Drop Alerts',
      description: 'Receive alerts when items in your wishlist go on sale',
      icon: <BellRing className="w-5 h-5 text-orange-500" />,
      isEnabled: true,
    },
    {
      id: 'security_alerts',
      title: 'Security Alerts',
      description: 'Get notified about important security updates',
      icon: <Shield className="w-5 h-5 text-red-500" />,
      isEnabled: true,
    },
    {
      id: 'mobile_notifications',
      title: 'Mobile App Notifications',
      description: 'Enable notifications in our mobile app',
      icon: <Smartphone className="w-5 h-5 text-purple-500" />,
      isEnabled: false,
    },
  ]);

  const [securitySettings, setSecuritySettings] = useState<SettingOption[]>([
    {
      id: 'two_factor',
      title: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account',
      icon: <Fingerprint className="w-5 h-5 text-blue-500" />,
      isEnabled: false,
    },
    {
      id: 'activity_log',
      title: 'Activity Log',
      description: 'Track all activities on your account',
      icon: <Eye className="w-5 h-5 text-teal-500" />,
      isEnabled: true,
    },
    {
      id: 'data_sharing',
      title: 'Data Sharing',
      description: 'Control how your data is shared and used',
      icon: <Share2 className="w-5 h-5 text-yellow-500" />,
      isEnabled: false,
    },
  ]);

  const toggleSetting = (settingId: string, category: 'notification' | 'security') => {
    const targetSettings = category === 'notification' ? notificationSettings : securitySettings;
    const setTargetSettings = category === 'notification' ? setNotificationSettings : setSecuritySettings;

    setTargetSettings(targetSettings.map(setting => 
      setting.id === settingId ? { ...setting, isEnabled: !setting.isEnabled } : setting
    ));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between pb-6">
        <div className="flex items-center space-x-2">
          <Settings className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage how you receive notifications and alerts</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            {notificationSettings.map((setting) => (
              <div key={setting.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {setting.icon}
                  <div className="space-y-0.5">
                    <p className="font-medium">{setting.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {setting.description}
                    </p>
                  </div>
                </div>
                <Switch
                  checked={setting.isEnabled}
                  onCheckedChange={() => toggleSetting(setting.id, 'notification')}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Account Management */}
        <Card>
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Danger Zone
            </CardTitle>
            <CardDescription>
              Permanent actions that cannot be undone
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-destructive/10 rounded-lg bg-destructive/5">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-destructive">Delete Account</h3>
                  <p className="text-sm text-muted-foreground">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <Button 
                    variant="destructive" 
                    className="w-full sm:w-auto mt-4"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsSection;