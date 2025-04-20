import React from 'react';
import Image from 'next/image';
import OrderCard from './OrderCard';

const OrderSection: React.FC = () => {
  const orders = [
    {
      id: '#ORD-2023-1234',
      date: '2023-04-15',
      status: 'Delivered',
      total: 239.99,
      items: [
        {
          name: 'Wireless Headphones',
          price: 159.99,
          quantity: 1,
          image: '/images/600x400.svg',
        },
        {
          name: 'Phone Case',
          price: 79.99,
          quantity: 1,
          image: '/images/600x400.svg',
        },
      ],
    },
    // Add more orders as needed
  ];


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b pb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
        <div className="flex space-x-2">
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
            <option>All Orders</option>
            <option>Processing</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {orders.map((order, key) => (
          <OrderCard
            id={order.id}
            items={order.items}
            date={order.date}
            status={order.status}
            total={order.total}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderSection;