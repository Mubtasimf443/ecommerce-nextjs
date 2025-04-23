/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    ShoppingBag,
    Users,
    Settings,
    Package,
    Tags,
    BarChart3,
    LayersIcon,
    MessageSquare
} from 'lucide-react';

const Sidebar = () => {
    const routes = [
        {
            label: 'Dashboard',
            icon: LayoutDashboard,
            href: '/web-admin',
            color: "text-sky-500"
        },
        {
            label: 'Orders',
            icon: ShoppingBag,
            href: '/web-admin/orders',
            color: "text-violet-500",
        },
        {
            label: 'Products',
            icon: Package,
            color: "text-pink-700",
            href: '/web-admin/products',
        },
        {
            label: 'Categories',
            icon: LayersIcon,
            color: "text-orange-700",
            href: '/web-admin/categories',
        },
        {
            label: 'Customers',
            icon: Users,
            color: "text-green-700",
            href: '/web-admin/customers',
        },
        {
            label: 'Analytics',
            icon: BarChart3,
            color: "text-yellow-600",
            href: '/web-admin/analytics',
        },
        {
            label: 'Reviews',
            icon: MessageSquare,
            color: "text-indigo-500",
            href: '/web-admin/reviews',
        },
        {
            label: 'Settings',
            icon: Settings,
            href: '/web-admin/settings',
        },
    ];

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-white border-r w-64">
            <div className="px-3 py-2 flex-1">
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                                route.color
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3")} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;