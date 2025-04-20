/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { FC, Fragment } from 'react'
import accountsStore from '../_lib/accounts.store';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Bell, LogOut, MapPin, Settings, ShoppingBag, User } from 'lucide-react';



interface Props {
    
}

const SideBar: FC<Props> = ( ) => {
    let store = accountsStore() ;
    let name = store.name;
    let avaterImage = store.avaterImage;
    let joinDate = store.joinDate;
    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };
    let currentPath = useParams().slug;
    const menuItems = [
        { name: 'Profile', path: '/account/info', icon: User },
        { name: 'Orders', path: '/account/orders', icon: ShoppingBag },
        { name: 'Addresses', path: '/account/address', icon: MapPin },
        { name: 'Notifications', path: '/account/notifications', icon: Bell },
        { name: 'Settings', path: '/account/settings', icon: Settings },
    ];
    return (
        <Fragment>
       <div className="lg:col-span-3">
                    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
                        {/* User Profile Summary */}
                        <div className="text-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative inline-block"
                            >
                                <img
                                    src="https://api.dicebear.com/6.x/avataaars/svg?seed=Mubtasimf443"
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full mx-auto border-4 border-primary-50"
                                />
                                <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
                            </motion.div>
                            <h2 className="mt-4 text-lg font-semibold text-gray-900">Mubtasimf443</h2>
                            <p className="text-sm text-gray-500">Premium Member</p>
                        </div>

                        {/* Navigation */}
                        <nav className="space-y-2">
                            {menuItems.map((item) => {
                                const isActive = currentPath === item.path;
                                const Icon = item.icon;
                                return (
                                    <motion.div key={item.path} variants={itemVariants}>
                                        <Link
                                            href={item.path}
                                            className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                                    ? 'bg-primary-50 text-primary-600'
                                                    : 'text-gray-600 hover:bg-gray-50'
                                                }`}
                                                
                                        >
                                            <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-primary-600' : 'text-gray-400'}`} />
                                            <span className="font-medium">{item.name}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>

                        {/* Logout Button */}
                        <div className="pt-6 border-t">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                            >
                                <LogOut className="w-5 h-5 mr-3" />
                                <span className="font-medium">Logout</span>
                            </motion.button>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default SideBar