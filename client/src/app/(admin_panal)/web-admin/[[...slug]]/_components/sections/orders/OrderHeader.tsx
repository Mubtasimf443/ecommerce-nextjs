/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { Button } from '@/components/ui/shadcn/button';
import { Input } from '@/components/ui/shadcn/input';
import { Download, Search } from 'lucide-react';
import React, { FC, Fragment } from 'react';

interface Props {
   
};


const OrderHeader :FC<Props> = ({}) => {
  return (
    <Fragment>
       
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Orders Management
              </h1>
              <p className="mt-2 text-gray-500">Manage and track all your orders in one place</p>
            </div>
            
            <div className="flex items-center gap-3">
        
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

        

    </Fragment>
  )
};

export default OrderHeader;