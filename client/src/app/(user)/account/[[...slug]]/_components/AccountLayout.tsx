/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, ShoppingBag, MapPin, Bell, Settings, LogOut } from 'lucide-react';
import { useParams } from 'next/navigation';
import SideBar from './SideBar';

interface AccountLayoutProps {
    children: React.ReactNode;
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {

    

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };



    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Sidebar */}
                <SideBar/>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-9"
                >
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        {children}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AccountLayout;