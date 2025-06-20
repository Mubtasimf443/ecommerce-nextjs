"use client"
import Link from 'next/link';
import React, { FC } from 'react';
import { Bell, LogOut, MapPin, Settings, ShoppingBag, User } from 'lucide-react';
import { useParams } from 'next/navigation';

interface Props {}

const SideBar: FC<Props> = () => {
    let currentPath = useParams().slug;
    const menuItems = [
        { name: 'Profile', path: '/account/profile', icon: User },
        { name: 'Orders', path: '/account/orders', icon: ShoppingBag },
        { name: 'Addresses', path: '/account/address', icon: MapPin },
        { name: 'Notifications', path: '/account/notifications', icon: Bell },
        { name: 'Settings', path: '/account/settings', icon: Settings },
    ];

    return (
        <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
                {/* User Profile Summary */}
                <div className="text-center">
                    <div className="relative inline-block group">
                        <img
                            src="/images/avatar.png"
                            alt="Profile"
                            loading='lazy'
                            className="w-24 h-24 rounded-full mx-auto border-4 border-primary-50 transition-transform duration-200 ease-in-out group-hover:scale-105"
                        />
                        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-gray-900">Mubtasimf443</h2>
                    <p className="text-sm text-gray-500">Premium Member</p>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = currentPath === item.path;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                                    isActive
                                        ? 'bg-primary-50 text-primary-600'
                                        : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-primary-600' : 'text-gray-400'}`} />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout Button */}
                <div className="pt-6 border-t">
                    <button className="w-full flex items-center justify-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors duration-200">
                        <LogOut className="w-5 h-5 mr-3" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;