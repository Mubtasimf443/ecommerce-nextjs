/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import React, { FC, Fragment, useState } from 'react';
import { Search, Download, Filter, Calendar } from 'lucide-react';
import TabsWithoutContent, { TabsType } from '../../layout/TabsWithoutContent';
import OrderList from './OrderList';
import { Input } from '@/components/ui/shadcn/input';
import { Button } from '@/components/ui/shadcn/button';
import OrderStats from './OrderStats';
import OrderHeader from './OrderHeader';
import OrderFilter from './OrderFilter';

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
        <div className="space-y-6 mb-8">
          {/* Header Section */}
          <OrderHeader />
          {/* Search and Filter Bar */}
          <OrderFilter
            searchQuery={searchQuery}
            dateFilter={dateFilter}
            setDateFilter={setDateFilter}
            setSearchQuery={setSearchQuery}
          />
        </div>
        {/* Order Stats */}
        {/* <OrderStats /> */}

        {/* Tabs   */}
        <TabsWithoutContent
          tabs={tabs}
          defaultValue={selectedTab}
          onValueChange={handleTabChange}

        />
        <div className="bg-white rounded-xl shadow-sm">

          {/* Order List */}
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