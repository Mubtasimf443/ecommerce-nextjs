/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import { Badge } from '@/components/ui/shadcn/badge';  // Changed the import path
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';  // Import LucideIcon type
import { title } from 'process';

interface Props {
    href: string;
    Icon: LucideIcon;  // Changed to LucideIcon type
    BadgeNumber?: number;
    title ?: string ;
}

export const HeaderLinks: FC<Props> = ({ Icon, href, BadgeNumber }) => {
    return (
        <Link
            className="relative h-8 w-7 pt-2"
            href={href}
            title={title || ""}
        >
            <Icon className="h-5 w-5" /> 
            {
                typeof BadgeNumber === 'number' &&
                (
                    <Badge
                        variant="destructive"
                        className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0"
                    >
                        {BadgeNumber}
                    </Badge>
                )
            }
        </Link>
    )
};

interface ContainerProps {
    children: ReactNode;
}

export const HeaderLinksContainer: FC<ContainerProps> = ({ children }) => {
    return (
        <div className="flex items-center gap-2">
            {children}
        </div>
    )
};