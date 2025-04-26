/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { Notification } from './Notification.Types';

export const notifications: Notification[] = [
  {
    id: 'notif_001',
    title: 'Eid Special Discount!',
    message: 'Get 20% off on all products during our Eid celebration sale!',
    type: 'success',
    targetAudience: 'all',
    status: 'sent',
    createdAt: '2025-04-25T08:00:00Z',
    sentAt: '2025-04-25T08:00:00Z',
    createdBy: {
      id: 'admin_001',
      name: 'Admin User',
      avatar: 'https://ui-avatars.com/api/?name=Admin+User',
    },
    readBy: 150,
    deliveredTo: 200,
    metadata: {
      link: '/sale',
      expiresAt: '2025-05-01T23:59:59Z'
    }
  },
  {
    id: 'notif_002',
    title: 'System Maintenance Notice',
    message: 'Our website will undergo maintenance on Saturday, 10 PM to 12 AM.',
    type: 'warning',
    targetAudience: 'all',
    status: 'scheduled',
    scheduledFor: '2025-04-28T10:00:00Z',
    createdAt: '2025-04-24T15:30:00Z',
    createdBy: {
      id: 'admin_002',
      name: 'System Admin',
      avatar: 'https://ui-avatars.com/api/?name=System+Admin',
    }
  }
];