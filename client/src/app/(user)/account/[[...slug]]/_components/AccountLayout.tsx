"use client"
import React from 'react';
import SideBar from './SideBar';

interface AccountLayoutProps {
    children: React.ReactNode;
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Sidebar */}
                <SideBar/>

                {/* Main Content */}
                <div className="lg:col-span-9">
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountLayout;