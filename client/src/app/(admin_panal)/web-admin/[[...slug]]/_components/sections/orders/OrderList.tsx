/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"

import React, { FC, Fragment } from 'react';
import OrderCard from './OrderCard';
import { Loader2 } from 'lucide-react';

interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
  paymentMethod: string;
  items: number;
}

interface Props {
  orderType: string;
  searchQuery: string;
  dateFilter: string;
}

const OderList: FC<Props> = ({ orderType, searchQuery, dateFilter }) => {
  // Mock data - replace with actual API call
  const orders: Order[] = [
    {
      id: '1',
      orderNumber: 'ORD-2025-001',
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      date: '2025-04-24',
      total: 299.99,
      status: 'pending',
      paymentMethod: 'Credit Card',
      items: 3,
    },
    // Add more orders...
  ];

  return (
    <div className="p-6">
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No orders found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
          
          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing 1 to 10 of 100 entries
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm border rounded-md hover:bg-gray-50 disabled:opacity-50">
                Previous
              </button>
              <button className="px-4 py-2 text-sm border rounded-md hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OderList;