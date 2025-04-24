/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { usePathname } from 'next/navigation';
import React, { FC, Fragment } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/shadcn/tooltip";
import { Badge } from '@/components/ui/shadcn/badge';
import Link from 'next/link';
import { BadgeType } from './Sidebar.types';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
interface Props {
    label: string;
    icon: LucideIcon;
    href: string;
    badge: BadgeType | null;
    description?: string;
};

const SideBarNavLink: FC<Props> = (props) => {
    const pathname = usePathname();
    let isActive = pathname === props.href; 
    return (
        <Fragment>
            <TooltipProvider key={props.href}>
                <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                        <Link
                            href={props.href}
                            className={cn(
                                "flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "hover:bg-primary/5 hover:text-primary"
                            )}
                        >
                            <div className="flex items-center">
                                <props.icon className={cn("h-5 w-5 mr-3")} />
                                <span>{props.label}</span>
                            </div>
                            {props.badge && (
                                <Badge variant={props.badge.variant} className="ml-auto">
                                    {props.badge.text}
                                </Badge>
                            )}
                        </Link>
                    </TooltipTrigger>
                    {props.description && (
                        <TooltipContent>
                            <p>{props.description}</p>
                        </TooltipContent>
                    )}
                </Tooltip>
            </TooltipProvider>
        </Fragment>
    )
};

export default SideBarNavLink;