import React from 'react';
import Image from 'next/image';

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
          image: '/placeholder-product.jpg',
        },
        {
          name: 'Phone Case',
          price: 79.99,
          quantity: 1,
          image: '/placeholder-product.jpg',
        },
      ],
    },
    // Add more orders as needed
  ];

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
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white border rounded-lg overflow-hidden"
          >
            <div className="p-6 border-b">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Order Number</p>
                  <p className="font-medium">{order.id}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Date Placed</p>
                  <p className="font-medium">{order.date}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="font-medium">${order.total.toFixed(2)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Status</p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 py-4 border-b last:border-0"
                >
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
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
        ))}
      </div>
    </div>
  );
};

export default OrderSection;