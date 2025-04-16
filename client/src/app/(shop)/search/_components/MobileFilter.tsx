/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/shadcn/button";
import { Filter } from 'lucide-react';


interface Props {
    set : (val : any) => void
    state : boolean;
   
}
const MobileFilter: React.FC<Props > = (props ) => {
    
    return (
        <React.Fragment>
            {/* Mobile Filter Button */}
            <div className="lg:hidden flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">
                    Search Results
                </h1>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => props.set(!props.state)}
                    className="flex items-center gap-2"
                >
                    <Filter size={16} />
                    Filters
                </Button>
            </div>
        </React.Fragment>
    )
}

export default MobileFilter
