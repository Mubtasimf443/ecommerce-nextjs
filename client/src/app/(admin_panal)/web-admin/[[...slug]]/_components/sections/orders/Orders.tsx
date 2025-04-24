/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import React, { FC, Fragment, useState } from 'react';
import TabsWithoutContent, { TabsType } from '../../layout/TabsWithoutContent';


interface Props { }

const Orders: FC<Props> = () => {
  let [selectedTab, setSelectedTab] = useState<string>('all');
  let tabs: TabsType = [
      { title: 'All Orders', value: 'all' },
      { title: 'Pending', value: 'pending', badge: '12' },
      { title: 'Processing', value: 'processing', badge: '5' },
      { title: 'Completed', value: 'completed', badge: '28' },
      { title: 'Failed', value: 'failed', badge: '3' },
      { title: 'Cancelled', value: 'cancelled', badge: '7' },
  ];
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Orders Management
          </h1>
        </div>
      </div>

      <TabsWithoutContent
        tabs={tabs}
        defaultValue={selectedTab}
        onValueChange={setSelectedTab}
      />


    
    </section>
  );
};

export default Orders;