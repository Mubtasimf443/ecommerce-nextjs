/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import React, { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronRight as ArrowRight, ChevronLeft as ArrowLeft } from 'lucide-react'
import MenuBarItem from './MenuBarItem';
import categoriesAndproductsTypes from './categoriesAndproductsTypes';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';


const HeaderBottom: FC = () => {
    // const items = [
    //     { id: 1, name: "Electronics", type: "category", url: "/category/electronics" },
    //     { id: 2, name: "Clothing", type: "category", url: "/category/clothing" },
    //     { id: 3, name: "Home & Garden", type: "category", url: "/category/home-garden" },
    //     { id: 4, name: "Sports", type: "category", url: "/category/sports" },
    //     { id: 5, name: "Beauty", type: "category", url: "/category/beauty" },
    //     { id: 6, name: "Books", type: "category", url: "/category/books" },
    //     { id: 7, name: "Apple", type: "brand", url: "/brand/apple" },
    //     { id: 8, name: "Samsung", type: "brand", url: "/brand/samsung" },
    //     { id: 9, name: "Nike", type: "brand", url: "/brand/nike" },
    //     { id: 10, name: "Adidas", type: "brand", url: "/brand/adidas" },
    //     { id: 11, name: "Sony", type: "brand", url: "/brand/sony" },
    //     { id: 12, name: "Toys", type: "category", url: "/category/toys" },
    // ];
    const sliderRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkArrows = () => {
        if (sliderRef.current) {
            // Check if we can scroll left
            setShowLeftArrow(sliderRef.current.scrollLeft > 0);

            // Check if we can scroll right
            const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
            setShowRightArrow(sliderRef.current.scrollLeft < maxScrollLeft - 10); // 10px buffer
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('scroll', checkArrows);
            // Initial check
            checkArrows();

            // Check again when window resizes
            window.addEventListener('resize', checkArrows);

            return () => {
                slider.removeEventListener('scroll', checkArrows);
                window.removeEventListener('resize', checkArrows);
            };
        }
    }, []);

    const scroll = (direction: string) => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.clientWidth / 2;
            if (direction === 'left') {
                sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="relative w-full bg-[color:--theme-bg] py-3 border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 relative">

                <ArrowComponent
                    scroll={scroll}
                    move='left'
                    showComponent={showLeftArrow}
                    Icon={<ArrowLeft className="h-5 w-5 text-gray-600" />}
                    position='left-0'
                />
                {/* Slider container */}
                <div
                    ref={sliderRef}
                    className="overflow-x-auto scrollbar-hide flex space-x-6 items-center mx-6 scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    
                    
                    {categoriesAndproductsTypes.map((item,key) => (
                        <MenuBarItem 
                        key={key}
                        title={item.categoryName}  
                        items={
                            <div  className="flex flex-col gap-1">
                                {item.productsTypes.map((element, index) => (
                                    
                                        <DropdownMenuItem asChild className="cursor-pointer rounded px-2 py-1.5 focus:bg-blue-50 focus:text-blue-600 data-[highlighted]:bg-green-50 data-[highlighted]:text-green-600 outline-none" key={key}>
                                            <Link href={element.slug}>{element.name} </Link>
                                        </DropdownMenuItem>
                                ))}
                            </div>
                        } 
                        /> 
                    ))}
                    
                   
                </div>

                <ArrowComponent
                    scroll={scroll}
                    move='right'
                    showComponent={showRightArrow}
                    Icon={<ArrowRight className="h-5 w-5 text-gray-600" />}
                />

            </div>
        </div>
    );
}


interface ArrowComponentProps {
    showComponent: boolean,
    Icon: React.ReactElement,
    scroll: (str: string) => void
    move: string;
    position?: string;
}
function ArrowComponent(props: ArrowComponentProps) {
    switch (props.showComponent) {
        case true:
            return (
                <>
                    <button
                        onClick={() => props.scroll(props.move)}
                        className={"absolute " + (props.position || "right-0") + "  top-1/2 transform -translate-y-1/2 z-10 p-1 rounded-full bg-white shadow hover:bg-gray-200 focus:outline-none"}
                        aria-label="Scroll right"
                    >
                        {props.Icon}
                    </button>
                </>
            );

        case false:
            return (
                <>
                </>
            );
    }
}
export default HeaderBottom
