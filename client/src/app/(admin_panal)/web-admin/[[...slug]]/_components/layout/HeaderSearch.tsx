/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import { Button } from '@/components/ui/shadcn/button';
import { Search, Settings, Users, ShoppingBag, Box, BarChart2, Tag, FileText, Mail, Bell, Palette, Shield, Gift, HelpCircle } from 'lucide-react';
import React, { FC, Fragment, useLayoutEffect, useMemo, useState } from 'react';
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/shadcn/command";
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface SearchItem {
    title: string;
    href: string;
    icon: React.ElementType;
    description: string;
    shortcut?: string[];
    category: 'pages' | 'products' | 'users' | 'settings' | 'help';
}

const searchItems: SearchItem[] = [
    // Pages
    {
        title: "Dashboard",
        href: "/web-admin/dashboard",
        icon: BarChart2,
        description: "View analytics and statistics",
        shortcut: ["g", "d"],
        category: "pages"
    },
    {
        title: "Products",
        href: "/web-admin/products",
        icon: Box,
        description: "Manage your product inventory",
        shortcut: ["g", "p"],
        category: "pages"
    },
    {
        title: "Orders",
        href: "/web-admin/orders",
        icon: ShoppingBag,
        description: "View and manage orders",
        shortcut: ["g", "o"],
        category: "pages"
    },
    {
        title: "Customers",
        href: "/web-admin/customers",
        icon: Users,
        description: "Manage customer accounts",
        shortcut: ["g", "c"],
        category: "pages"
    },

    // Products
    {
        title: "Add New Product",
        href: "/web-admin/products/new",
        icon: Box,
        description: "Create a new product listing",
        category: "products"
    },
    {
        title: "Categories",
        href: "/web-admin/products/categories",
        icon: Tag,
        description: "Manage product categories",
        category: "products"
    },
    {
        title: "Inventory",
        href: "/web-admin/products/inventory",
        icon: Box,
        description: "Check stock levels",
        category: "products"
    },

    // Users
    {
        title: "User Management",
        href: "/web-admin/users",
        icon: Users,
        description: "Manage user accounts and permissions",
        category: "users"
    },
    {
        title: "Role Management",
        href: "/web-admin/users/roles",
        icon: Shield,
        description: "Configure user roles and permissions",
        category: "users"
    },

    // Settings
    {
        title: "General Settings",
        href: "/web-admin/settings",
        icon: Settings,
        description: "Configure store settings",
        category: "settings"
    },
    {
        title: "Appearance",
        href: "/web-admin/settings/appearance",
        icon: Palette,
        description: "Customize store appearance",
        category: "settings"
    },
    {
        title: "Notifications",
        href: "/web-admin/settings/notifications",
        icon: Bell,
        description: "Manage notification preferences",
        category: "settings"
    },

    // Help
    {
        title: "Documentation",
        href: "/web-admin/help/docs",
        icon: FileText,
        description: "View admin panel documentation",
        category: "help"
    },
    {
        title: "Support",
        href: "/web-admin/help/support",
        icon: HelpCircle,
        description: "Get help and support",
        category: "help"
    },
];

const HeaderSearch: FC = () => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');

    useLayoutEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const filteredItems = search.length > 0
        ? searchItems.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase())
        )
        : searchItems;

    const groupedItems = filteredItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, SearchItem[]>);

    return (
        <Fragment>
            <Button
                variant="outline"
                className="relative h-9 w-9 p-0 xl:h-10 xl:w-80 xl:justify-start xl:px-3 xl:py-2"
                onClick={() => setOpen(true)}
            >
                <Search className="h-4 w-4 xl:mr-2" />
                <span className="hidden xl:inline-flex">Search admin panel (Ctl + K)</span>
                <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <Command className="rounded-lg border shadow-md">
                    <CommandInput 
                        placeholder="Type to search..." 
                        value={search}
                        onValueChange={setSearch}
                    />
                    <CommandList className="max-h-[500px] overflow-y-auto">
                        <CommandEmpty>No results found.</CommandEmpty>
                        
                        {Object.entries(groupedItems).map(([category, items]) => (
                            <Fragment key={category}>
                                <CommandGroup heading={category.charAt(0).toUpperCase() + category.slice(1)}>
                                    {items.map((item) => (
                                        <Link key={item.href} href={item.href}>
                                            <CommandItem
                                                className="flex items-center gap-2 px-4 py-2 hover:bg-accent cursor-pointer"
                                                onSelect={() => {
                                                    setOpen(false);
                                                }}
                                            >
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg border bg-background">
                                                    <item.icon className="h-4 w-4" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-medium">{item.title}</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                {item.shortcut && (
                                                    <div className="flex items-center gap-1">
                                                        {item.shortcut.map((key, index) => (
                                                            <Fragment key={index}>
                                                                <kbd className="rounded bg-muted px-1.5 py-0.5 text-xs font-medium">
                                                                    {key}
                                                                </kbd>
                                                                {index < item.shortcut!.length - 1 && 
                                                                    <span className="text-muted-foreground">+</span>
                                                                }
                                                            </Fragment>
                                                        ))}
                                                    </div>
                                                )}
                                            </CommandItem>
                                        </Link>
                                    ))}
                                </CommandGroup>
                                <CommandSeparator />
                            </Fragment>
                        ))}
                    </CommandList>
                </Command>
            </CommandDialog>
        </Fragment>
    );
};

export default HeaderSearch;