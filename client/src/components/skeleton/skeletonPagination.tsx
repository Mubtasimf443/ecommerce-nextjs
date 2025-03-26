/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import React from 'react';

const SkeletonPagination: React.FC = () => {
    return (
        <div className="flex justify-center w-full py-10">
            <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                    <div 
                        key={index} 
                        className={`h-8 w-8 rounded ${index === 1 ? 'bg-gray-400' : 'bg-gray-200'} animate-pulse flex items-center justify-center`}
                    />
                ))}
                <div className="h-8 w-8 bg-gray-200 animate-pulse flex items-center justify-center mx-1">
                    <div className="w-4 h-1 bg-gray-300 rounded"></div>
                </div>
                {[...Array(2)].map((_, index) => (
                    <div 
                        key={index} 
                        className="h-8 w-8 bg-gray-200 animate-pulse flex items-center justify-center"
                    />
                ))}
            </div>
        </div>
    )
};

export default SkeletonPagination;