/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import OrderProduct from './OrderProduct';

interface Iitems {
    name: string;
    price: number;
    quantity: number;
    image:string;
}
interface Props {
    id: string | number;
    date: string;
    total: number;
    status: "Processing" | "Delivered" | "Cancelled" | string;
    items: Iitems[]
}

const OrderCard: FC<Props> = ({ id, date, total, items ,status }) => {
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
          case 'delivered':
            return 'bg-green-100 text-green-800';
          case 'processing':
            return 'bg-blue-100 text-blue-800';
          case 'cancelled':
            return 'bg-red-100 text-red-800';
          default:
            return 'bg-gray-100 text-gray-800';
        }
      };
    return (
        <Fragment>
            <div
                className="bg-white border rounded-lg overflow-hidden"
            >
                <div className="p-6 border-b">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="space-y-1">
                            <p className="text-sm text-gray-600">Order Number</p>
                            <p className="font-medium">{id}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-gray-600">Date Placed</p>
                            <p className="font-medium">{date}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-gray-600">Total Amount</p>
                            <p className="font-medium">${total.toFixed(2)}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-gray-600">Status</p>
                            <span
                                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}        >
                                {status}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-4">
                    {items.map((item, index) => (
                        <OrderProduct
                            name={item.name}
                            quantity={item.quantity}
                            image={item.image}
                            price={item.price}
                            key={index}
                        />
                    ))}
                </div>

                <div className="p-6 bg-gray-50 border-t">
                    <div className="flex justify-end space-x-4">
                        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                            Track Order
                        </button>
                        <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default OrderCard;