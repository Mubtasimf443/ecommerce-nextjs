/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"

import React, { useState, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Settings,
  Package,
  ChevronDown,
  BarChart3,
  Layers,
  MessageSquare,
  Store,
  Tag,
  Percent,
  CreditCard,
  Bell,
  HelpCircle,
  LogOut,
  LucideIcon,
} from 'lucide-react';
import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";
import { Separator } from "@/components/ui/shadcn/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/shadcn/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/shadcn/collapsible";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/shadcn/tooltip";
import {SidebarProps , SectionType ,BadgeType , RouteType , CollapsedSectionsType } from './Sidebar.types'


const Sidebar: React.FC<SidebarProps> = ({
  userName = "Admin User",
  userEmail = "admin@store.com",
  userAvatar = "/placeholder-avatar.jpg",
  onLogout = () => console.log("Logout clicked"),
  storeName = "StoreAdmin",
  collapsed = false,
  onToggleCollapse = () => {}
}) => {
  const pathname = usePathname();
  const [collapsedSections, setCollapsedSections] = useState<CollapsedSectionsType>({
    catalog: false,
    marketing: false
  });

  const toggleSection = (section: string): void => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Main routes definition
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

  // All sections definition with their routes
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
    },
    {
      id: "marketing",
      title: "Marketing & Sales",
      icon: BarChart3,
      routes: [
        {
          label: 'Discounts',
          icon: Percent,
          color: "text-amber-600",
          href: '/web-admin/discounts',
          badge: null,
          description: "Manage sales and promotions"
        },
        {
          label: 'Customers',
          icon: Users,
          color: "text-green-700",
          href: '/web-admin/customers',
          badge: null,
          description: "Customer management"
        },
        {
          label: 'Reviews',
          icon: MessageSquare,
          color: "text-indigo-500",
          href: '/web-admin/reviews',
          badge: {
            text: "3",
            variant: "secondary"
          },
          description: "Product reviews and ratings"
        },
        {
          label: 'Analytics',
          icon: BarChart3,
          color: "text-yellow-600",
          href: '/web-admin/analytics',
          badge: null,
          description: "Performance insights"
        },
      ]
    }
  ];

  // Additional routes outside of collapsible sections
  const miscRoutes: RouteType[] = [
    {
      label: 'Transactions',
      icon: CreditCard,
      color: "text-violet-700",
      href: '/web-admin/transactions',
      badge: null,
      description: "Payment processing"
    },
    {
      label: 'Notifications',
      icon: Bell,
      color: "text-rose-500",
      href: '/web-admin/notifications',
      badge: {
        text: "5",
        variant: "destructive"
      },
      description: "System alerts and messages"
    },
    {
      label: 'Settings',
      icon: Settings,
      href: '/web-admin/settings',
      color: "text-gray-700",
      badge: null,
      description: "System configuration"
    },
    {
      label: 'Help & Support',
      icon: HelpCircle,
      href: '/web-admin/support',
      color: "text-blue-600",
      badge: null,
      description: "Get assistance"
    },
  ];

  // Component to render individual navigation links
  const renderNavLink = (route: RouteType): ReactNode => {
    const isActive = pathname === route.href;
    
    return (
      <TooltipProvider key={route.href}>
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            <Link
              href={route.href}
              className={cn(
                "flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-primary/5 hover:text-primary",
                route.color
              )}
            >
              <div className="flex items-center">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                <span>{route.label}</span>
              </div>
              {route.badge && (
                <Badge variant={route.badge.variant} className="ml-auto">
                  {route.badge.text}
                </Badge>
              )}
            </Link>
          </TooltipTrigger>
          {route.description && (
            <TooltipContent>
              <p>{route.description}</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    );
  };

  // Render a collapsible section with its routes
  const renderSection = (section: SectionType): ReactNode => {
    const isOpen = collapsedSections[section.id];
    
    return (
      <Collapsible 
        key={section.id}
        open={isOpen} 
        onOpenChange={() => toggleSection(section.id)}
        className="mb-2"
      >
        <CollapsibleTrigger asChild>
          <Button 
            variant="ghost" 
            className="w-full justify-between font-medium text-sm"
          >
            <div className="flex items-center">
              <section.icon className="h-4 w-4 mr-2" />
              <span>{section.title}</span>
            </div>
            <ChevronDown 
              className={cn(
                "h-4 w-4 transition-transform",
                isOpen && "transform rotate-180"
              )} 
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-2 space-y-1 mt-1">
          {section.routes.map(renderNavLink)}
        </CollapsibleContent>
      </Collapsible>
    );
  };

  // Count total notifications from all routes' badges
  const getTotalNotifications = (): number => {
    let count = 0;
    
    // Count from main routes
    mainRoutes.forEach(route => {
      if (route.badge && route.badge.text) {
        count += parseInt(route.badge.text) || 0;
      }
    });
    
    // Count from sections
    sections.forEach(section => {
      section.routes.forEach(route => {
        if (route.badge && route.badge.text) {
          count += parseInt(route.badge.text) || 0;
        }
      });
    });
    
    // Count from misc routes
    miscRoutes.forEach(route => {
      if (route.badge && route.badge.text) {
        count += parseInt(route.badge.text) || 0;
      }
    });
    
    return count;
  };

  const notificationCount = getTotalNotifications();

  return (
    <div className="flex flex-col bg-white border-r w-64 h-dvh overflow-y-scroll scroll-smooth no-scrollbar">
      {/* Navigation */}
      <div className="px-3 py-2 flex-1 overflow-y-auto">
        {/* Main routes */}
        <div className="space-y-1 mb-4">
          {mainRoutes.map(renderNavLink)}
        </div>

        {/* Sections */}
        {sections.map(renderSection)}

        <Separator className="my-2" />

        {/* Misc Routes */}
        <div className="space-y-1">
          {miscRoutes.map(renderNavLink)}
        </div>
      </div>

    </div>
  );
};

export default Sidebar;