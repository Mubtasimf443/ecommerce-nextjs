/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC } from 'react';
import { Eye, MoreVertical, Package, Clock, CreditCard } from 'lucide-react';
import { format } from 'date-fns';

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
  order: Order;
}

const getStatusColor = (status: Order['status']) => {
  const colors = {
    pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    processing: 'bg-blue-50 text-blue-700 border-blue-200',
    completed: 'bg-green-50 text-green-700 border-green-200',
    failed: 'bg-red-50 text-red-700 border-red-200',
    cancelled: 'bg-gray-50 text-gray-700 border-gray-200',
  };
  return colors[status];
};

const OrderCard: FC<Props> = ({ order }) => {
  return (
    <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Order Info */}
        <div className="flex-1">
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-3 rounded-md">
              <Package className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-semibold">{order.orderNumber}</h3>
                <span className={`px-2.5 py-0.5 text-xs rounded-full border ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                {order.customerName} • {order.customerEmail}
              </div>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              {format(new Date(order.date), 'MMM dd, yyyy')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{order.paymentMethod}</span>
          </div>
          <div>
            <span className="font-medium">${order.total.toFixed(2)}</span>
            <span className="text-sm text-gray-500 ml-1">({order.items} items)</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Eye className="h-4 w-4" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;