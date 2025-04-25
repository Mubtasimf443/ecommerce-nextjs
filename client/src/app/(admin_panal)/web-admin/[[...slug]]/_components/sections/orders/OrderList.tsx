/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"

import React, { FC, Fragment, useRef } from 'react';
import OrderCard from './OrderCard';
import { Loader2 } from 'lucide-react';
import Pagination from '@/components/custom/Pagination';
import { Order } from './Order.Types';
import { orders } from './Order.data';


interface Props {
  orderType: string;
  searchQuery: string;
  dateFilter: string;
}

const OderList: FC<Props> = ({ orderType, searchQuery, dateFilter }) => {
  // Mock data - replace with actual API call
  let currentPage = useRef(1);
  let totalPages = useRef(3);
  function onPageChange(page: number) {

  }
  const handleStatusUpdate = (orderId: string, newStatus: string) => {
    // Implement status update logic
    console.log('Updating status:', orderId, newStatus);
  };

  const handleCancelOrder = (orderId: string, reason: string) => {
    // Implement order cancellation logic
    console.log('Cancelling order:', orderId, reason);
  };
  return (
    <div className="p-6">
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No orders found</p>
        </div>
      ) : (
        <div className="space-y-4">
         <div className="p-6">
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No orders found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              onStatusUpdate={handleStatusUpdate}
              onCancelOrder={handleCancelOrder}
            />
          ))}
        </div>
      )}
    </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing 1 to 10 of 100 entries
            </p>
            {/* <div className="flex gap-2">
              <button className="px-4 py-2 text-sm border rounded-md hover:bg-gray-50 disabled:opacity-50">
                Previous
              </button>
              <button className="px-4 py-2 text-sm border rounded-md hover:bg-gray-50">
                Next
              </button>
            </div> */}
            <Pagination
              currentPage={currentPage.current}
              totalPages={totalPages.current}
              onPageChange={onPageChange}
              marginTop=''
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OderList;