/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/shadcn/select"
import { Input } from "@/components/ui/shadcn/input"
import { Package, Search } from 'lucide-react'
export type FilterStatus = 'all' | 'processing' | 'delivered' | 'cancelled';

export interface OrderFilterProps {
    filterStatus: FilterStatus;
    setFilterStatus: (value: FilterStatus) => void;
    hasOrders?: boolean; // Optional prop to disable filter when no orders exist
}
const OrderSectionHeader :FC<OrderFilterProps> = ({filterStatus ,setFilterStatus}) => {
  return (
    <Fragment>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
                          <div className="flex items-center gap-3">
                              <Package className="w-8 h-8 text-primary" />
                              <h1 className="text-3xl font-bold tracking-tight">My Orders</h1>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-4">
                              <div className="relative">
                                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                                  <Input 
                                      placeholder="Search orders..." 
                                      className="pl-9 w-[200px]"
                                  />
                              </div>
                              
                              <Select 
                                  value={filterStatus} 
                                  onValueChange={setFilterStatus}
                              >
                                  <SelectTrigger className="w-[180px]">
                                      <SelectValue placeholder="Filter by status" />
                                  </SelectTrigger>
                                  <SelectContent>
                                      <SelectItem value="all">All Orders</SelectItem>
                                      <SelectItem value="processing">Processing</SelectItem>
                                      <SelectItem value="delivered">Delivered</SelectItem>
                                      <SelectItem value="cancelled">Cancelled</SelectItem>
                                  </SelectContent>
                              </Select>
                          </div>
                      </div>
    </Fragment>
  )
}

export default OrderSectionHeader