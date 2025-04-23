/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"

import React, { useState, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    ShoppingBag,
    Users,
    Package,
    BarChart3,
    Layers,
    MessageSquare,
    Store,
    Tag,
    Percent,
} from 'lucide-react';
import { Separator } from "@/components/ui/shadcn/separator";
import { SidebarProps, SectionType, RouteType, CollapsedSectionsType } from './Sidebar.types'
import SideBarNavLink from './SideBarNavLink';
import SideBarLinksSection from './SideBarLinksSection';


const Sidebar: React.FC<SidebarProps> = ({ }) => {
    const mainRoutes: RouteType[] = [
        {
            label: 'Dashboard',
            icon: LayoutDashboard,
            href: '/web-admin',
            color: "text-sky-500",
            badge: null,
            description: "Overview of store performance"
        },
        {
            label: 'Orders',
            icon: ShoppingBag,
            href: '/web-admin/orders',
            color: "text-violet-500",
            badge: {
                text: "12",
                variant: "destructive"
            },
            description: "Manage customer orders"
        },
    ];
    const sections: SectionType[] = [
        {
            id: "catalog",
            title: "Catalog",
            icon: Package,
            routes: [
                {
                    label: 'Products',
                    icon: Package,
                    color: "text-pink-700",
                    href: '/web-admin/products',
                    badge: null,
                    description: "Manage product inventory"
                },
                {
                    label: 'Categories',
                    icon: Layers,
                    color: "text-orange-700",
                    href: '/web-admin/categories',
                    badge: null,
                    description: "Organize product categories"
                },
                {
                    label: 'Inventory',
                    icon: Store,
                    color: "text-emerald-600",
                    href: '/web-admin/inventory',
                    badge: null,
                    description: "Track stock levels"
                },
                {
                    label: 'Attributes',
                    icon: Tag,
                    color: "text-blue-600",
                    href: '/web-admin/attributes',
                    badge: null,
                    description: "Define product attributes"
                },
            ]
        }
    ];
    return (
        <div className="flex flex-col bg-white border-r w-64 h-dvh overflow-y-scroll scroll-smooth no-scrollbar">
            <div className="px-3 py-2 flex-1 overflow-y-auto">
          
            </div>
        </div>
    );
};

export default Sidebar;