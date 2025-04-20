"use client"

import React, { useState } from 'react';
import { 
  Bell,
  Package,
  CreditCard,
  Tag,
  Heart,
  Truck,
  Shield,
  Settings,
  Trash2,
  Check,
  Filter,
  X
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn/card";
import { Button } from "@/components/ui/shadcn/button";
import { Badge } from "@/components/ui/shadcn/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs";
import { ScrollArea } from "@/components/ui/shadcn/scroll-area";

type NotificationType = 'all' | 'order' | 'payment' | 'promotion' | 'wishlist' | 'shipping' | 'security';

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  icon: React.ReactNode;
  link?: string;
}

const NotificationsSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<NotificationType>('all');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  // Sample notifications data
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'order',
      title: 'Order Confirmed',
      message: 'Your order #12345 has been confirmed and is being processed.',
      timestamp: '2025-04-19 23:40:09',
      isRead: false,
      icon: <Package className="w-5 h-5 text-blue-500" />
    },
    // ... (keep your existing notifications data)
  ];

  const filterTypes = [
    { type: 'all', label: 'All', icon: Bell },
    { type: 'order', label: 'Orders', icon: Package },
    { type: 'payment', label: 'Payments', icon: CreditCard },
    { type: 'promotion', label: 'Promotions', icon: Tag },
    { type: 'wishlist', label: 'Wishlist', icon: Heart },
    { type: 'shipping', label: 'Shipping', icon: Truck },
    { type: 'security', label: 'Security', icon: Shield },
  ];

  const filteredNotifications = notifications
    .filter(notification => 
      (selectedType === 'all' || notification.type === selectedType) &&
      (!showUnreadOnly || !notification.isRead)
    );

  return (
    <Card className="border-none shadow-none">
      {/* Header */}
      <CardHeader className="px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-primary" />
            <CardTitle className="text-2xl">Notifications</CardTitle>
            <Badge variant="secondary" className="rounded-full">
              {notifications.filter(n => !n.isRead).length} New
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowUnreadOnly(!showUnreadOnly)}
              className={showUnreadOnly ? 'bg-primary/10 text-primary' : ''}
            >
              <Filter className="w-4 h-4 mr-2" />
              {showUnreadOnly ? 'Showing Unread' : 'Show All'}
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-0">
        {/* Filter Tabs */}
        <ScrollArea className="w-full" >
          <Tabs 
            defaultValue="all" 
            value={selectedType}
            onValueChange={(value) => setSelectedType(value as NotificationType)}
            className="w-full mb-6"
          >
            <TabsList className="inline-flex w-auto p-1 bg-muted/50">
              {filterTypes.map(({ type, label, icon: Icon }) => (
                <TabsTrigger
                  key={type}
                  value={type}
                  className="flex items-center gap-2 px-4 py-2"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </ScrollArea>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <Bell className="w-12 h-12 mb-4 opacity-20" />
              <p className="text-lg font-medium">No notifications found</p>
              <p className="text-sm">Check back later for updates</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredNotifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`transition-colors ${
                    notification.isRead ? 'bg-card' : 'bg-primary/5'
                  }`}
                >
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex-shrink-0">
                      {notification.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-x-4">
                        <p className="font-medium">
                          {notification.title}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {new Date(notification.timestamp).toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </span>
                          {!notification.isRead && (
                            <span className="w-2 h-2 bg-primary rounded-full" />
                          )}
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {notification.message}
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        {notification.link && (
                          <Button variant="link" className="h-auto p-0">
                            View Details
                          </Button>
                        )}
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="h-8"
                        >
                          {notification.isRead ? (
                            <Check className="w-4 h-4 mr-2" />
                          ) : (
                            'Mark as Read'
                          )}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="h-8 w-8 text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Clear All Button */}
        {filteredNotifications.length > 0 && (
          <div className="flex justify-center pt-6 border-t mt-6">
            <Button variant="ghost" className="text-muted-foreground">
              Clear All Notifications
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NotificationsSection;