/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, useState, Fragment } from 'react';
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/shadcn/accordion";
import { Button } from "@/components/ui/shadcn/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/shadcn/radio-group";
import { Label } from "@/components/ui/shadcn/label";
import {  Settings } from 'lucide-react';
import {Order} from '../Order.Types'
import CancelOrderAlert from './CancelOrderAlert';

interface Props {
    order: Order;
    onStatusUpdate: (val: any, selectedStatus: string) => void;
    onCancelOrder: (val: any, selectedStatus: string) => void;
};

const ManageOrderAccordion: FC<Props> = ({ order, onStatusUpdate, onCancelOrder }) => {
    const [selectedStatus, setSelectedStatus] = useState(order.status);
    return (
        <Fragment>
            <AccordionItem value="order-management">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-2">
                        <Settings className="w-4 h-4" />
                        <span>Manage Order</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                    <div className="space-y-6">
                        {/* Status Update Section */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold">Update Order Status</h4>
                            <RadioGroup
                                value={selectedStatus}
                                onValueChange={(value) => setSelectedStatus(value as Order['status'])}
                                className="grid grid-cols-2 gap-4"
                            >
                                {['confirmed', 'processing', 'on_delivery', 'delivered', 'completed'].map((status) => (
                                    <div key={status} className="flex items-center space-x-2">
                                        <RadioGroupItem value={status} id={status} />
                                        <Label htmlFor={status} className="capitalize">
                                            {status.replace('_', ' ')}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                            <Button
                                onClick={() => onStatusUpdate(order.id, selectedStatus)}
                                className="w-full mt-4"
                            >
                                Update Status
                            </Button>
                        </div>

                        {/* Cancel Order Section */}
                        <div className="pt-4 border-t">
                            <CancelOrderAlert onCancelOrder={onCancelOrder} orderId={order.id}/>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Fragment>
    )
};

export default ManageOrderAccordion;