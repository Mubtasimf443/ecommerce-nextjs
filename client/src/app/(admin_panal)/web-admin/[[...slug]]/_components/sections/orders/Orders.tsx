/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import React, { FC, Fragment, useState } from 'react';
import { Search, Download, Filter, Calendar } from 'lucide-react';
import TabsWithoutContent, { TabsType } from '../../layout/TabsWithoutContent';
import OrderList from './OrderList';
import { Input } from '@/components/ui/shadcn/input';
import { Button } from '@/components/ui/shadcn/button';

interface Props { }

const Orders: FC<Props> = () => {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dateFilter, setDateFilter] = useState<string>('7days');

  const tabs: TabsType = [
    { title: 'All Orders', value: 'all' },
    { title: 'Pending', value: 'pending', badge: '12' },
    { title: 'Processing', value: 'processing', badge: '5' },
    { title: 'Completed', value: 'completed', badge: '28' },
    { title: 'Failed', value: 'failed', badge: '3' },
    { title: 'Cancelled', value: 'cancelled', badge: '7' },
  ];

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="space-y-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Orders Management
              </h1>
              <p className="mt-2 text-gray-500">Manage and track all your orders in one place</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="relative md:col-span-6">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input 
                placeholder="Search orders by ID, customer name or email..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="md:col-span-3">
              <select 
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="3months">Last 3 months</option>
                <option value="custom">Custom range</option>
              </select>
            </div>
          </div>
        </div>

        {/* Order Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Orders', value: '1,234', change: '+12.5%', color: 'blue' },
            { label: 'Total Revenue', value: '$45,678', change: '+8.2%', color: 'green' },
            { label: 'Average Order Value', value: '$89.99', change: '+5.3%', color: 'yellow' },
            { label: 'Pending Orders', value: '56', change: '-2.4%', color: 'red' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <div className="mt-2 flex items-baseline justify-between">
                <h3 className="text-2xl font-semibold">{stat.value}</h3>
                <span className={`text-sm ${
                  stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs and Order List */}
        <div className="bg-white rounded-xl shadow-sm">
          <TabsWithoutContent
            tabs={tabs}
            defaultValue={selectedTab}
            onValueChange={handleTabChange}
            // className="p-1"
          />
          
          <OrderList 
            orderType={selectedTab}
            searchQuery={searchQuery}
            dateFilter={dateFilter}
          />
        </div>
      </div>
    </section>
  );
};

export default Orders;