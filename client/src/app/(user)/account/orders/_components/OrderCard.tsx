/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC } from 'react'
import OrderProduct from './OrderProduct'
import { Card } from "@/components/ui/shadcn/card"
import { Badge } from "@/components/ui/shadcn/badge"
import { Button } from "@/components/ui/shadcn/button"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/shadcn/accordion"
import { 
  ChevronDown, 
  Package, 
  Truck, 
  Calendar, 
  DollarSign,
  ClipboardList,
  AlertCircle
} from 'lucide-react'

interface Iitems {
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface Props {
    id: string | number;
    date: string;
    total: number;
    status: "Processing" | "Delivered" | "Cancelled" | string;
    items: Iitems[];
    cancelReason?: string;
}

const OrderCard: FC<Props> = ({ id, date, total, items, status, cancelReason }) => {
    const getStatusConfig = (status: string) => {
        const config = {
            delivered: {
                color: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300',
                icon: <Package className="w-4 h-4" />,
                iconColor: 'text-green-600'
            },
            processing: {
                color: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300',
                icon: <Truck className="w-4 h-4" />,
                iconColor: 'text-blue-600'
            },
            cancelled: {
                color: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300',
                icon: <AlertCircle className="w-4 h-4" />,
                iconColor: 'text-red-600'
            }
        }[status.toLowerCase()] || {
            color: 'bg-gray-100 text-gray-800',
            icon: null,
            iconColor: 'text-gray-600'
        };

        return config;
    };

    const statusConfig = getStatusConfig(status);

    return (
        <Card className="w-full">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="order-details" className="border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex flex-1 items-center justify-between pr-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                                {/* Order ID */}
                                <div className="flex items-center gap-2">
                                    <ClipboardList className="w-4 h-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">{id}</p>
                                        <p className="text-xs text-muted-foreground">Order ID</p>
                                    </div>
                                </div>

                                {/* Date */}
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">
                                            {new Date(date).toLocaleDateString('en-US', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </p>
                                        <p className="text-xs text-muted-foreground">Date Placed</p>
                                    </div>
                                </div>

                                {/* Amount */}
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">${total.toFixed(2)}</p>
                                        <p className="text-xs text-muted-foreground">Total Amount</p>
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="flex items-center gap-2">
                                    <div className={`p-1.5 rounded-full ${statusConfig.iconColor} bg-opacity-10`}>
                                        {statusConfig.icon}
                                    </div>
                                    <div>
                                        <Badge 
                                            variant="secondary" 
                                            className={`${statusConfig.color}`}
                                        >
                                            {status}
                                        </Badge>
                                        <p className="text-xs text-muted-foreground">Status</p>
                                    </div>
                                </div>
                            </div>
                            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                        </div>
                    </AccordionTrigger>
                    
                    <AccordionContent>
                        <div className="px-6 pb-4 space-y-6">
                            {/* Nested Accordion for Products */}
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="products">
                                    <AccordionTrigger className="hover:no-underline py-2 px-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            <Package className="w-4 h-4" />
                                            <span className="text-sm font-medium">
                                                Order Items ({items.length})
                                            </span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="space-y-4 mt-4">
                                            {items.map((item, index) => (
                                                <OrderProduct
                                                    key={index}
                                                    name={item.name}
                                                    quantity={item.quantity}
                                                    image={item.image}
                                                    price={item.price}
                                                />
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                {/* Cancellation Reason (if applicable) */}
                                {status.toLowerCase() === 'cancelled' && cancelReason && (
                                    <AccordionItem value="cancel-reason">
                                        <AccordionTrigger className="hover:no-underline py-2 px-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                                                <AlertCircle className="w-4 h-4" />
                                                <span className="text-sm font-medium">
                                                    Cancellation Reason
                                                </span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="p-4 mt-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                                <p className="text-sm text-red-600 dark:text-red-400">
                                                    {cancelReason}
                                                </p>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                )}
                            </Accordion>

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-3">
                                {status.toLowerCase() === 'processing' && (
                                    <Button variant="outline" size="sm" className="gap-2">
                                        <Truck className="w-4 h-4" />
                                        Track Order
                                    </Button>
                                )}
                                <Button size="sm" className="gap-2">
                                    <Package className="w-4 h-4" />
                                    View Details
                                </Button>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Card>
    )
}

export default OrderCard