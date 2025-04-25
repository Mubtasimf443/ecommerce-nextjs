/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
import React, { FC } from 'react';
import { Eye, MoreVertical, Package, Calendar, Wallet2 } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/shadcn/dropdown-menu';
import { Button } from '@/components/ui/shadcn/button';
import { Order , PaymentMethod} from './Order.Types';


interface Props {
  order: Order;
  onViewProducts: (orderId: string) => void;
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

const getPaymentMethodColor = (method: PaymentMethod) => {
  const colors = {
    bkash: 'bg-pink-50 text-pink-700',
    nagad: 'bg-orange-50 text-orange-700',
    rocket: 'bg-purple-50 text-purple-700',
    cod: 'bg-green-50 text-green-700',
  };
  return colors[method];
};

const getPaymentMethodIcon = (method: PaymentMethod) => {
  // You can replace these with actual payment method logos/icons
  return <Wallet2 className="h-4 w-4" />;
};

const OrderCard: FC<Props> = ({ order, onViewProducts }) => {
  return (
    <div className="bg-white border rounded-xl p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex flex-col space-y-4">
        {/* Header - Order ID and Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gray-100 p-2.5 rounded-lg">
              <Package className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <span className="text-sm text-gray-500">Order ID</span>
              <h3 className="font-semibold text-gray-900">{order.orderNumber}</h3>
            </div>
          </div>
          <span 
            className={cn(
              "px-3 py-1 text-xs font-medium rounded-full border",
              getStatusColor(order.status)
            )}
          >
            {order.status}
          </span>
        </div>

        {/* Order Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-3">
          {/* Date */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Order Date
            </span>
            <span className="font-medium text-gray-900">
              {format(new Date(order.date), 'MMM dd, yyyy')}
            </span>
          </div>

          {/* Payment Method */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Payment Method</span>
            <span className={cn(
              "inline-flex items-center gap-1.5 text-sm font-medium px-2.5 py-0.5 rounded-full w-fit mt-0.5",
              getPaymentMethodColor(order.paymentMethod)
            )}>
              {getPaymentMethodIcon(order.paymentMethod)}
              {order.paymentMethod.toUpperCase()}
            </span>
          </div>

          {/* Total Amount */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Total Amount</span>
            <span className="font-semibold text-gray-900">
              ৳{order.total.toLocaleString()}
            </span>
          </div>

          {/* Items Count */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Items</span>
            <span className="font-medium text-gray-900">{order.items} items</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end space-x-3 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            onClick={() => onViewProducts(order.id)}
          >
            <Eye className="h-4 w-4 mr-2" />
            View Products
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Order Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Download Invoice</DropdownMenuItem>
              <DropdownMenuItem>Track Order</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Cancel Order</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;