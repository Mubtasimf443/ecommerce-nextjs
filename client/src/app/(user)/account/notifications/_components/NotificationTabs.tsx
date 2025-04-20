/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment, useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs";
import { ScrollArea } from "@/components/ui/shadcn/scroll-area";
interface Props {

}
import {
    Bell,
    Package,
    CreditCard,
    Tag,
    Heart,
    Truck,
    Shield,
} from 'lucide-react'
type NotificationType = 'all' | 'order' | 'payment' | 'promotion' | 'wishlist' | 'shipping' | 'security';

const NotificationTabs: FC<Props> = ({ }) => {
    const [selectedType, setSelectedType] = useState<NotificationType>('all');

    const filterTypes = [
        { type: 'all', label: 'All', icon: Bell },
        { type: 'order', label: 'Orders', icon: Package },
        { type: 'payment', label: 'Payments', icon: CreditCard },
        { type: 'promotion', label: 'Promotions', icon: Tag },
        { type: 'wishlist', label: 'Wishlist', icon: Heart },
        { type: 'shipping', label: 'Shipping', icon: Truck },
        { type: 'security', label: 'Security', icon: Shield },
    ];

    

    return (
        <Fragment>
            <ScrollArea className="w-full" >
                <Tabs
                    defaultValue="all"
                    value={selectedType}
                    onValueChange={(value) => setSelectedType(value as NotificationType)}
                    className="w-full mb-6"
                >
                    <TabsList className="inline-flex w-auto p-1 bg-muted/50">
                        {filterTypes.map(({ type, label, icon: Icon }) => (
                            <TabsTrigger
                                key={type}
                                value={type}
                                className="flex items-center gap-2 px-4 py-2"
                            >
                                <Icon className="w-4 h-4" />
                                {label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </ScrollArea>
        </Fragment>
    )
}

export default NotificationTabs