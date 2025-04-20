/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
"use client"
import React, { useState } from 'react'
import OrderCard from './OrderCard'

import { Package, Search } from 'lucide-react'
import OrderSectionHeader from './OrderSectionHeader'
import Pagination from '@/components/custom/Pagination'

const OrderSection: React.FC = () => {
  type FilterStatus = 'all' | 'processing' | 'delivered' | 'cancelled';
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all')

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
    {
      id: '#ORD-2023-1235',
      date: '2023-04-16',
      status: 'Cancelled',
      total: 199.99,
      cancelReason: 'Out of stock - Customer requested cancellation',
      items: [
        {
          name: 'Smart Watch',
          price: 199.99,
          quantity: 1,
          image: '/images/600x400.svg',
        },
      ],
    },
    // Add more orders as needed
  ]

  const filteredOrders = orders.filter(order =>
    filterStatus === 'all' || order.status.toLowerCase() === filterStatus.toLowerCase()
  )

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="space-y-6">
        <OrderSectionHeader

          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />

        {
          filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <Package className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-semibold text-gray-900">No orders found</h3>
              <p className="mt-1 text-sm text-gray-500">
                No orders match your current filters.
              </p>
            </div>
          )
        }


        {
        filteredOrders.length !== 0 && (
          <div className="grid gap-6">
            {filteredOrders.map((order, index) => (
              <OrderCard
                key={index}
                id={order.id}
                items={order.items}
                date={order.date}
                status={order.status}
                total={order.total}
                cancelReason={order.cancelReason}
              />
            ))}
          </div>
        )}


        <Pagination 
        currentPage={1}
        totalPages={3}
        onPageChange={() => {}}
        />
      </div>


    </div>
  )
}

export default OrderSection