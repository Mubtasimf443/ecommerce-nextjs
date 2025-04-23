/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import { LucideIcon } from "lucide-react";

export type BadgeType = {
    text: string;
    variant: "default" | "secondary" | "destructive" | "outline";
};

export type RouteType = {
    label: string;
    icon: LucideIcon;
    href: string;
    color: string;
    badge: BadgeType | null;
    description?: string;
};

export type CollapsedSectionsType = {
    [key: string]: boolean;
};

export type SectionType = {
    id: string;
    title: string;
    icon: LucideIcon;
    routes: RouteType[];
};

export interface SidebarProps {
}