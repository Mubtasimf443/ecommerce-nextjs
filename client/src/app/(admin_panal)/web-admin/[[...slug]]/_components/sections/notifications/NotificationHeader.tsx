/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC } from 'react';
import { Bell } from 'lucide-react';

interface Props {
  totalNotifications?: number;
  unreadNotifications?: number;
}

const NotificationHeader: FC<Props> = ({
  totalNotifications = 0,
  unreadNotifications = 0
}) => {
  return (
    <div className="p-6 border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Bell className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
            <p className="text-sm text-muted-foreground">
              Manage and send notifications to your users
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm font-medium">{totalNotifications}</p>
            <p className="text-xs text-muted-foreground">Total</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-primary">{unreadNotifications}</p>
            <p className="text-xs text-muted-foreground">Unread</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationHeader;