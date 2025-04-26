/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { RouteType, SectionType } from "./Sidebar.types";
import {
    LayoutDashboard,
    ShoppingBag,
    Users,
    Package,
    Clock,
    CheckCircle,
    XCircle,
    Settings,
    Bell,
    Plus,
    Grid,
    Mail,
    BellRing,
    History,
    ListPlus,
    Store,
    UserX,
    UserCheck,
    MessageSquare,

    HeartHandshake,

    HelpCircle,
    
    FileText,
    Heart,
    ThumbsUp,
    Star,

    Share2,
    StarHalf,
    MessagesSquare,
    Bookmark,
    AlertCircle,
} from 'lucide-react';

export const mainRoutes: RouteType[] = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/web-admin',
        badge: null,
        description: "Overview of store performance"
    },
    {
        label: 'Messages',
        icon: MessageSquare,
        href: '/web-admin/messages',
        badge: {
            text: "5",
            variant: "destructive"
        },
        description: "View customer messages"
    },
];

export const sections: SectionType[] = [
    {
        id: "products",
        title: "Products Management",
        icon: Package,
        route: "/web-admin/products",
        routes: [
            {
                label: 'Create Product',
                icon: Plus,
                href: '/web-admin/products/create',
                badge: {
                    text: "New",
                    variant: "default"
                },
                description: "Add new product to store"
            },
            {
                label: 'All Products',
                icon: Grid,
                href: '/web-admin/products/list',
                badge: null,
                description: "View and manage products"
            },
        ]
    },
    {
        id: "orders",
        title: "Orders Management",
        icon: ShoppingBag,
        route: "/web-admin/orders",
        routes: [
            {
                label: 'All Orders',
                icon: ShoppingBag,
                href: '/web-admin/orders/all',
                badge: {
                    text: "25",
                    variant: "default"
                },
                description: "View all orders"
            },
            {
                label: 'Pending Orders',
                icon: Clock,
                href: '/web-admin/orders/pending',
                badge: {
                    text: "12",
                    variant: "destructive"
                },
                description: "Orders awaiting processing"
            },
            {
                label: 'Successful Orders',
                icon: CheckCircle,
                href: '/web-admin/orders/completed',
                badge: null,
                description: "Completed orders"
            },
            {
                label: 'Cancelled Orders',
                icon: XCircle,
                href: '/web-admin/orders/cancelled',
                badge: null,
                description: "Cancelled or rejected orders"
            },
        ]
    },
    {
        id: "notifications",
        title: "Notifications",
        icon: Bell,
        route: "/web-admin/notifications",
        routes: [
            {
                label: 'Notification History',
                icon: History,
                href: '/web-admin/notifications/history',
                badge: null,
                description: "View sent notifications"
            },
            {
                label: 'Create Notification',
                icon: ListPlus,
                href: '/web-admin/notifications/create',
                badge: null,
                description: "Create new notification"
            },
         
        ]
    },
    {
        id: "users",
        title: "User Management",
        icon: Users,
        route: "/web-admin/users",
        routes: [
            {
                label: 'Create',
                icon: Plus,
                href: '/web-admin/users/create',
                badge: null,
                description: "Create a user Account"
            },
            {
                label: 'Users',
                icon: Users,
                href: '/web-admin/users/list',
                badge: null,
                description: "Manage user accounts"
            },
        ]
  
    },
    {
        id: "customer-actions",
        title: "Customer Actions",
        icon: Star,
        route: "/web-admin/customer-actions",
        routes: [
            {
                label: 'Product Reviews',
                icon: Star,
                href: '/web-admin/customer-actions/reviews',
                badge: {
                    text: "18",
                    variant: "default"
                },
                description: "Manage product reviews"
            },
            {
                label: 'Questions & Answers',
                icon: HelpCircle,
                href: '/web-admin/customer-actions/questions',
                badge: {
                    text: "5",
                    variant: "destructive"
                },
                description: "Handle product questions"
            },
            {
                label: 'Customer Ratings',
                icon: StarHalf,
                href: '/web-admin/customer-actions/ratings',
                badge: null,
                description: "View product ratings"
            },
            {
                label: 'Likes & Saves',
                icon: Heart,
                href: '/web-admin/customer-actions/likes',
                badge: null,
                description: "Track product engagement"
            }
        ]
    },
    {
        id: "customers",
        title: "Customer Management",
        icon: Users,
        route: "/web-admin/customers",
        routes: [
            {
                label: 'All Customers',
                icon: UserCheck,
                href: '/web-admin/customers/all',
                badge: {
                    text: "150",
                    variant: "default"
                },
                description: "View all customers"
            },
            {
                label: 'Banned Customers',
                icon: UserX,
                href: '/web-admin/customers/banned',
                badge: {
                    text: "3",
                    variant: "destructive"
                },
                description: "View banned customers"
            }
        ]
    },
    {
        id: 'contact',
        title: "Contact Management",
        icon: HeartHandshake,
        route: "/web-admin/contact",
        routes: [
            {
                label: 'Contact Forms',
                icon: FileText,
                href: '/web-admin/contact/forms',
                badge: null,
                description: "Manage contact forms"
            },
            {
                label:'Support',
                icon : HelpCircle,
                href :'/web-admin/contact/support',
                badge : null ,
        
            }
        ]
    },
   
    {
        id: "settings",
        title: "Settings",
        icon: Settings,
        route: "/web-admin/settings/general",
        routes: [
            {
                label: 'General',
                icon: Store,
                href: '/web-admin/settings/General',
                badge: null,
                description: "Configure store details"
            },
            {
                label: 'Notifications',
                icon: Bell,
                href: '/web-admin/settings/notifications',
                badge: null,
                description: "Customize store appearance"
            }
        ]
    },
   
];

