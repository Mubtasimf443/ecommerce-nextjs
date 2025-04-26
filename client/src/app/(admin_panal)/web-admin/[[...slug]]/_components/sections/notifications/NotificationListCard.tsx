/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC } from 'react';
import { Card } from "@/components/ui/shadcn/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";
import { Badge } from "@/components/ui/shadcn/badge";
import { Bell, Calendar, Users, CheckCircle2, Clock, AlertTriangle, Info, AlertCircle } from 'lucide-react';
import { Notification } from './Notification.Types';

interface Props {
  notification: Notification;
  onDelete: (id: string) => void;
  onResend: (id: string) => void;
}

const typeConfigs = {
  info: { color: 'bg-blue-100 text-blue-800', icon: <Info className="w-4 h-4" /> },
  success: { color: 'bg-green-100 text-green-800', icon: <CheckCircle2 className="w-4 h-4" /> },
  warning: { color: 'bg-yellow-100 text-yellow-800', icon: <AlertTriangle className="w-4 h-4" /> },
  error: { color: 'bg-red-100 text-red-800', icon: <AlertCircle className="w-4 h-4" /> },
};

const statusConfigs = {
  draft: { color: 'bg-gray-100 text-gray-800', icon: <Clock className="w-4 h-4" /> },
  scheduled: { color: 'bg-purple-100 text-purple-800', icon: <Calendar className="w-4 h-4" /> },
  sent: { color: 'bg-green-100 text-green-800', icon: <CheckCircle2 className="w-4 h-4" /> },
  failed: { color: 'bg-red-100 text-red-800', icon: <AlertCircle className="w-4 h-4" /> },
};

const NotificationListCard: FC<Props> = ({ notification, onDelete, onResend }) => {
  const typeConfig = typeConfigs[notification.type];
  const statusConfig = statusConfigs[notification.status];

  return (
    <Card className="w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="notification-details">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="flex flex-1 items-center justify-between pr-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                {/* Title */}
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">Title</p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">
                      {new Date(notification.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-muted-foreground">Created</p>
                  </div>
                </div>

                {/* Target Audience */}
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium capitalize">
                      {notification.targetAudience.replace('_', ' ')}
                    </p>
                    <p className="text-xs text-muted-foreground">Audience</p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-full ${statusConfig.color} bg-opacity-20`}>
                    {statusConfig.icon}
                  </div>
                  <div>
                    <Badge variant="secondary" className={statusConfig.color}>
                      {notification.status.toUpperCase()}
                    </Badge>
                    <p className="text-xs text-muted-foreground">Status</p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-6 pb-4">
            <div className="space-y-4">
              {/* Message Content */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">Message</h4>
                <p className="text-sm">{notification.message}</p>
              </div>

              {/* Additional Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold">Notification Details</h4>
                  <div className="space-y-2">
                    <p className="text-sm">Type: {notification.type}</p>
                    {notification.scheduledFor && (
                      <p className="text-sm">
                        Scheduled for: {new Date(notification.scheduledFor).toLocaleString()}
                      </p>
                    )}
                    {notification.sentAt && (
                      <p className="text-sm">
                        Sent at: {new Date(notification.sentAt).toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>

                {/* Statistics */}
                {notification.status === 'sent' && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold">Statistics</h4>
                    <div className="space-y-2">
                      <p className="text-sm">Delivered to: {notification.deliveredTo} users</p>
                      <p className="text-sm">Read by: {notification.readBy} users</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default NotificationListCard;