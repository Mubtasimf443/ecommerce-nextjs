/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, useRef } from 'react';
import NotificationListCard from './NotificationListCard';
import Pagination from '@/components/custom/Pagination';
import { notifications } from './Notification.Data';

interface Props {
  type?: string;
  searchQuery?: string;
  dateFilter?: string;
}

const NotificationList: FC<Props> = ({ type, searchQuery, dateFilter }) => {
  const currentPage = useRef(1);
  const totalPages = useRef(3);

  const handleDelete = (id: string) => {
    console.log('Deleting notification:', id);
  };

  const handleResend = (id: string) => {
    console.log('Resending notification:', id);
  };

  return (
    <div className="p-6">
      {notifications.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No notifications found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <NotificationListCard
              key={notification.id}
              notification={notification}
              onDelete={handleDelete}
              onResend={handleResend}
            />
          ))}

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing 1 to {notifications.length} of {notifications.length} entries
            </p>
            <Pagination
              currentPage={currentPage.current}
              totalPages={totalPages.current}
              onPageChange={(page) => console.log('Page changed:', page)}
              marginTop=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationList;