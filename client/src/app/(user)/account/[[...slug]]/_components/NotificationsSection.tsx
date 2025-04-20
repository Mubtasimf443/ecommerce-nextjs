import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Filter
} from 'lucide-react';

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
    {
      id: '2',
      type: 'payment',
      title: 'Payment Successful',
      message: 'Payment of $299.99 for order #12345 was successful.',
      timestamp: '2025-04-19 23:35:00',
      isRead: false,
      icon: <CreditCard className="w-5 h-5 text-green-500" />
    },
    {
      id: '3',
      type: 'promotion',
      title: 'Special Offer',
      message: 'Get 20% off on all electronics! Limited time offer.',
      timestamp: '2025-04-19 20:15:00',
      isRead: true,
      icon: <Tag className="w-5 h-5 text-purple-500" />
    },
    {
      id: '4',
      type: 'wishlist',
      title: 'Item Back in Stock',
      message: 'An item from your wishlist is back in stock!',
      timestamp: '2025-04-19 18:20:00',
      isRead: true,
      icon: <Heart className="w-5 h-5 text-red-500" />
    },
    {
      id: '5',
      type: 'shipping',
      title: 'Order Shipped',
      message: 'Your order #12344 has been shipped. Track your package now.',
      timestamp: '2025-04-19 15:10:00',
      isRead: true,
      icon: <Truck className="w-5 h-5 text-orange-500" />
    },
    {
      id: '6',
      type: 'security',
      title: 'Security Alert',
      message: 'New login detected from Chrome on Windows.',
      timestamp: '2025-04-19 12:30:00',
      isRead: false,
      icon: <Shield className="w-5 h-5 text-red-500" />
    },
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-6">
        <div className="flex items-center space-x-2">
          <Bell className="w-6 h-6 text-primary-600" />
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <span className="px-2.5 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
            {notifications.filter(n => !n.isRead).length} New
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowUnreadOnly(!showUnreadOnly)}
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              showUnreadOnly 
                ? 'bg-primary-50 text-primary-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Filter className="w-4 h-4 mr-2" />
            {showUnreadOnly ? 'Showing Unread' : 'Show All'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-gray-500"
          >
            <Settings className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
        {filterTypes.map(({ type, label, icon: Icon }) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedType(type as NotificationType)}
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
              selectedType === type
                ? 'bg-primary-50 text-primary-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Icon className="w-4 h-4 mr-2" />
            {label}
          </motion.button>
        ))}
      </div>

      {/* Notifications List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        <AnimatePresence mode="wait">
          {filteredNotifications.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-12 text-gray-500"
            >
              <Bell className="w-12 h-12 mb-4 text-gray-400" />
              <p className="text-lg font-medium">No notifications found</p>
              <p className="text-sm">Check back later for updates</p>
            </motion.div>
          ) : (
            filteredNotifications.map((notification) => (
              <motion.div
                key={notification.id}
                variants={itemVariants}
                layout
                className={`relative flex items-start p-4 rounded-2xl transition-colors ${
                  notification.isRead ? 'bg-white' : 'bg-blue-50'
                }`}
              >
                <div className="flex-shrink-0 mr-4">
                  {notification.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </p>
                    <div className="flex items-center space-x-2 ml-4">
                      <span className="text-xs text-gray-500">
                        {new Date(notification.timestamp).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                      {!notification.isRead && (
                        <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                      )}
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    {notification.message}
                  </p>
                  <div className="mt-2 flex items-center space-x-4">
                    {notification.link && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={notification.link}
                        className="text-sm font-medium text-primary-600 hover:text-primary-700"
                      >
                        View Details
                      </motion.a>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      {notification.isRead ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        'Mark as Read'
                      )}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-sm font-medium text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>

      {/* Clear All Button */}
      {filteredNotifications.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center pt-6 border-t"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Clear All Notifications
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default NotificationsSection;