/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react';
import Header from './_components/Header';
import Sidebar from './_components/Sidebar';

interface Props {
    children: React.ReactNode
}

const layout: FC<Props> = ({ children }) => {
    return (
        <>
            <main className='flex flex-col justify-start items-start'>
                <Header />
                <div className='flex flex-row justify-between items-center' >
                    <Sidebar />
                    {children}
                </div>
            </main>
        </>
    )
};

export default layout;