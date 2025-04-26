/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  targetAudience: 'all' | 'specific_users' | 'customer_group';
  targetUserIds?: string[];
  customerGroup?: string;
  status: 'draft' | 'scheduled' | 'sent' | 'failed';
  scheduledFor?: string;
  sentAt?: string;
  createdAt: string;
  createdBy: {
    id: string;
    name: string;
    avatar: string;
  };
  readBy?: number;
  deliveredTo?: number;
  metadata?: {
    link?: string;
    action?: string;
    expiresAt?: string;
  };
}