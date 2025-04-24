/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import React  from 'react';

import { Separator } from "@/components/ui/shadcn/separator";
import { SidebarProps, } from './Sidebar.types';
import SideBarNavLink from './SideBarNavLink';
import SideBarLinksSection from './SideBarLinksSection';
import { mainRoutes, sections } from './SideBar.Data';

const Sidebar: React.FC<SidebarProps> = ({ }) => {
  

    return (
        <div className="flex flex-col bg-white border-r w-64 h-dvh overflow-y-scroll scroll-smooth no-scrollbar">
            <div className="px-3 py-4 flex-1">
                {/* Main Routes */}
                <div className="space-y-1">
                    {mainRoutes.map((route) => (
                        <SideBarNavLink key={route.href} {...route} />
                    ))}
                </div>

                <Separator className="my-4" />

                {/* Sections */}
                <div className="space-y-2">
                    {sections.map((section) => (
                        <SideBarLinksSection
                            key={section.id}
                            {...section}
                        />
                    ))}
                </div>

                
                
            </div>
        </div>
    );
};

export default Sidebar;