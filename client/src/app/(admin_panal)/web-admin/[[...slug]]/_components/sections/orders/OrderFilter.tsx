/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react';
import {  } from '@/components/ui/shadcn/button';
import { Input } from '@/components/ui/shadcn/input';
import {  Search } from 'lucide-react';
interface Props {
 searchQuery : string;
    setSearchQuery : React.Dispatch<React.SetStateAction<string>>;
    dateFilter : string;
    setDateFilter : React.Dispatch<React.SetStateAction<string>>;
};

const OrderFilter :FC<Props> = ({searchQuery ,setSearchQuery , dateFilter ,setDateFilter}) => {
  return (
    <Fragment>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="relative md:col-span-6">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input 
                placeholder="Search orders by ID" 
                className="pl-10 hide-num-input-arrows "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type='number'
                min={0.01}
                step={0.1}
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
    </Fragment>
  )
};

export default OrderFilter;