/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu"
import Link from "next/link";
import { ChevronDown as ArrowDown } from "lucide-react";
import React, { FC, useState } from 'react'


interface Item {
    name: string;
    slug: string
}

interface Props {
    title: string;
    items: React.ReactElement;
}
const MenuBarItem: FC<Props> = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <DropdownMenu >
                <DropdownMenuTrigger className={
                    "text-md font-medium flex items-center gap-1 rounded-md transition-all duration-200 px-3 py-2 text-nowrap "
                    +
                    ""
                }>
                    {title}
                    <ArrowDown
                        size={16}
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" min-w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 px-1 animate-in fade-in-80 slide-in-from-top-5 ">
                    <div className="text-sm font-medium text-gray-500 px-2 pb-1">{title}</div>
                    <DropdownMenuSeparator className="my-1 border-gray-200" />
                    <div className="flex flex-col gap-1">
                        {items}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default MenuBarItem
