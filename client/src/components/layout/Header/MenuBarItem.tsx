/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu"
import Link from "next/link";
import { ChevronDown as ArrowDown } from "lucide-react";
import React, { FC, Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { cn } from "@/lib/utils";
import Loader from "@/components/custom/Loader";
import { useRouter } from "next/navigation";
import publicRequestClient from "@/_lib/core/PublicRequestClient";




interface ISubcategory {
    name: string;
    slug: string;
    id: number;
}

interface Props {
    title: string;
    slug: string;
    SubCategories: ISubcategory[]
    id: number;
}
const MenuBarItem: FC<Props> = ({ title, SubCategories, slug, id }) => {
    const [isOpen, setIsOpen] = useState(false);
   
    return (
        <Fragment>
            <DropdownMenu  >
                <DropdownMenuTrigger
                    className={
                        "text-md font-medium flex items-center gap-1 rounded-md transition-all duration-200 px-3 py-2 text-nowrap "
                        +
                        "outline-none"
                    }>
                    {title}
                    <ArrowDown
                        size={16}
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </DropdownMenuTrigger>

                <DropdownMenuContent className=" min-w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 px-1 animate-in fade-in-80 slide-in-from-top-5 ">
                    <Link className="text-sm font-medium text-gray-500 px-2 pb-1 cursor-pointer"
                        href={`/categories/${slug}?prime_category=${id}`}
                        children={title}
                    />
                    <DropdownMenuSeparator className="my-1 border-gray-200" />
                    <div className="flex flex-col gap-1">
                        {
                            SubCategories.map((element, key) => (
                                <Fragment >
                                    <SubMenuBar
                                        title={element.name}
                                        key={key}
                                        slug={element.slug}
                                        id={element.id}
                                        parentCategory={slug}
                                        parentCategoryId={id}
                                    />
                                </Fragment>
                            ))
                        }
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </Fragment>
    )
}

interface ISubMenuBarProps {
    title: string;
    onSelect?: (productType: IProductTypes) => void;
    slug : string;
    id : number;
    parentCategory : string;
    parentCategoryId : number;
}

export interface IProductTypes {
    id: number;
    name: string;
    slug: string;
    parentPrimeCategoryId: number;
    parentSubCategoryId: number;
}

const SubMenuBar: FC<ISubMenuBarProps> = ({ title, onSelect , id , slug , parentCategory, parentCategoryId}) => {
    const [productTypes, setProductTypes] = useState<IProductTypes[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    useEffect(() => {
        const fetchProductTypes = async () => {
            setIsLoading(true);
            try {
                let response = await publicRequestClient.get(process.env.NEXT_PUBLIC_SERVER_ORIGIN + "/api/products/data/attributes/product_types?sub_category_id=" + id, { giveDetails: true });
                switch (response.status) {
                    case 200:
                        let data = response.json.data;
                        setProductTypes(data)
                        break;
                    default:
                        console.error("Failed to Load Products Data");
                        break;
                }
                
            } catch (error) {
                console.error('Failed to fetch product types:', error);
            } finally {
                setIsLoading(false);
            }
        };
        if ( isOpen && productTypes.length === 0) {
            fetchProductTypes();
        }
       
    }, [isOpen]);

    return (
        <Fragment>
            <DropdownMenuSub onOpenChange={setIsOpen}>
                <DropdownMenuSubTrigger
                    className={cn(
                        "cursor-pointer rounded px-2 py-1.5",
                        "outline-none transition-colors",
                        "hover:bg-blue-50 hover:text-blue-600",
                        "focus:bg-blue-50 focus:text-blue-600"
                    )}
                >
                    {title}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                    <DropdownMenuSubContent className="min-w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 px-1 animate-in fade-in-80 slide-in-from-top-5">
                        <Link
                            className="text-sm font-medium text-gray-500 px-2 pb-1 cursor-pointer"
                            children={title}
                            href={`/categories/${parentCategory}/${slug}?prime_category=${parentCategoryId}&sub_category=${id}`}
                           
                        />
                        <DropdownMenuSeparator className="my-1 border-gray-200" />
                        {isLoading ? (
                            <DropdownMenuItem disabled>
                                Loading...
                            </DropdownMenuItem>
                            // <DropdownMenuItem disabled>
                            //     <Loader widthClass="w-5 h-5" />
                            // </DropdownMenuItem>
                        ) : productTypes.map((productType , key) => (
                            <DropdownMenuItem
                                key={key}
                                onClick={() => onSelect?.(productType)}
                                className={cn(
                                    "cursor-pointer",
                                    "hover:bg-blue-50 hover:text-blue-600"
                                )}
                            >
                                {productType.name}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuSubContent>
                </DropdownMenuPortal>
            </DropdownMenuSub>
        </Fragment>
    );
};


export default MenuBarItem
