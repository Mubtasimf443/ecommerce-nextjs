/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */


import { usePathname } from 'next/navigation';
import React, { FC, Fragment, useState } from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/shadcn/collapsible";
import { RouteType } from './Sidebar.types';
import { ChevronDown, LucideIcon } from 'lucide-react';
import SideBarNavLink from './SideBarNavLink';
import { Button } from '@/components/ui/shadcn/button';
import { cn } from '@/lib/utils';

interface Props {
    id: string;
    title: string;
    icon: LucideIcon;
    routes: RouteType[];
}


const SideBarLinksSection: FC<Props> = ({ id , title , icon , routes }) => {
    let Icon = icon;
    let [isOpen , setIsOpen] = useState<boolean>(false);
    let toggleOpen = () => setIsOpen(prev => !prev)
    return (
        <Fragment>
            <Collapsible
                key={id}
                open={isOpen}
                onOpenChange={() => toggleOpen()}
                className="mb-2"
            >
                <CollapsibleTrigger asChild>
                    <Button
                        variant="ghost"
                        className="w-full justify-between font-medium text-sm"
                    >
                        <div className="flex items-center">
                            <Icon className="h-4 w-4 mr-2" />
                            <span>{title}</span>
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
                    {routes.map((route: RouteType) => <SideBarNavLink {...route} />)}
                </CollapsibleContent>
            </Collapsible>
        </Fragment>
    )
};

export default SideBarLinksSection;