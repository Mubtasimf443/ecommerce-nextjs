/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC } from 'react';
import Header from './_components/Header';
import Sidebar from './_components/Sidebar';

interface Props {
    children: React.ReactNode
}

const layout: FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-8 overflow-y-auto bg-gray-50">
                    {children}
                </main>
            </div>
        </div>
    )
};

export default layout;