/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
import React, { FC, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/shadcn/accordion";
import { Card } from "@/components/ui/shadcn/card";
import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/shadcn/radio-group";
import { Label } from "@/components/ui/shadcn/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/shadcn/alert-dialog";
import {
  Package,
  Truck,
  Calendar,
  DollarSign,
  ClipboardList,
  User,
  MapPin,
  ShoppingBag,
  CheckCircle2,
  XCircle,
  Clock,
  Settings
} from 'lucide-react';
import {
  Order
} from './Order.Types'
import ManageOrderAccordion from './OrderCard/ManageOrderAccordion';

interface Props {
  order: Order;
  onStatusUpdate: (orderId: string, newStatus: string) => void;
  onCancelOrder: (orderId: string, reason: string) => void;
}

const statusConfigs = {
  pending: { color: 'bg-yellow-100 text-yellow-800', icon: <Clock className="w-4 h-4" /> },
  confirmed: { color: 'bg-blue-100 text-blue-800', icon: <CheckCircle2 className="w-4 h-4" /> },
  processing: { color: 'bg-purple-100 text-purple-800', icon: <Settings className="w-4 h-4" /> },
  on_delivery: { color: 'bg-indigo-100 text-indigo-800', icon: <Truck className="w-4 h-4" /> },
  delivered: { color: 'bg-green-100 text-green-800', icon: <Package className="w-4 h-4" /> },
  completed: { color: 'bg-emerald-100 text-emerald-800', icon: <CheckCircle2 className="w-4 h-4" /> },
  cancelled: { color: 'bg-red-100 text-red-800', icon: <XCircle className="w-4 h-4" /> }
};

const OrderCard: FC<Props> = ({ order, onStatusUpdate, onCancelOrder }) => {

  const statusConfig = statusConfigs[order.status];

  return (
    <Card className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {/* Primary Accordion 1: Order Details */}
        <AccordionItem value="order-details">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="flex flex-1 items-center justify-between pr-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                {/* Order ID */}
                <div className="flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{order.orderNumber}</p>
                    <p className="text-xs text-muted-foreground">Order ID</p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-muted-foreground">Date</p>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">৳{order.total.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Total</p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-full ${statusConfig.color} bg-opacity-20`}>
                    {statusConfig.icon}
                  </div>
                  <div>
                    <Badge variant="secondary" className={statusConfig.color}>
                      {order.status.replace('_', ' ').toUpperCase()}
                    </Badge>
                    <p className="text-xs text-muted-foreground">Status</p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-6 pb-4">
            <Accordion type="multiple" className="w-full space-y-4">
              {/* Customer & Shipping Info */}
              <AccordionItem value="customer-shipping">
                <AccordionTrigger className="hover:no-underline py-2 px-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-medium">Customer & Shipping Information</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Customer Info */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold flex items-center gap-2">
                        <User className="w-4 h-4" /> Customer Details
                      </h4>
                      <div className="space-y-2">
                        <p className="text-sm">Name: {order.customer.name}</p>
                        <p className="text-sm">Email: {order.customer.email}</p>
                        <p className="text-sm">Phone: {order.customer.phone}</p>
                      </div>
                    </div>

                    {/* Shipping Info */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Shipping Address
                      </h4>
                      <div className="space-y-2">
                        <p className="text-sm">{order.shipping.address}</p>
                        <p className="text-sm">{order.shipping.city}, {order.shipping.postalCode}</p>

                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Products Info */}
              <AccordionItem value="products">
                <AccordionTrigger className="hover:no-underline py-2 px-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    <span className="text-sm font-medium">Order Items ({order.items.length})</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            Quantity: {item.quantity} × ৳{item.price.toLocaleString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">
                            ৳{(item.quantity * item.price).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>

        {/* Primary Accordion 2: Order Management */}
        <ManageOrderAccordion
          order={order}
          onStatusUpdate={onStatusUpdate}
          onCancelOrder={onCancelOrder}
        />
      </Accordion>
    </Card>
  );
};

export default OrderCard;