/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { FC, Fragment } from 'react'
import accountsStore from '../_lib/accounts.store';



interface Props {
    
}

const SideBar: FC<Props> = ( ) => {
    let store = accountsStore() ;
    let name = store.name;
    let avaterImage = store.avaterImage;
    let joinDate = store.joinDate;

    return (
        <Fragment>
            <div className="lg:col-span-1">
                <div className="bg-dark-secondary rounded-lg shadow-md p-6 mb-6">
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-300">
                            <Image
                                src={avaterImage }
                                alt={name }
                                width={96}
                                height={96}
                                className="object-cover"
                            />
                        </div>
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <p className="text-dark-text-secondary text-sm">Member since {new Date(joinDate).toLocaleString("default", { month: "long", year: 'numeric' })}</p>
                    </div>

                    <nav>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/account/info" className="block py-2 px-4 rounded-md bg-dark-accent">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/orders" className="block py-2 px-4 rounded-md hover:bg-dark-hover transition-colors">
                                    Orders
                                </Link>
                            </li>
                            <li>
                                <Link href="/wishlist" className="block py-2 px-4 rounded-md hover:bg-dark-hover transition-colors">
                                    Wishlist
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/address" className="block py-2 px-4 rounded-md hover:bg-dark-hover transition-colors">
                                    Addresses
                                </Link>
                            </li>
                            <li>
                                <a href="#payment-methods" className="block py-2 px-4 rounded-md hover:bg-dark-hover transition-colors">
                                    Payment Methods
                                </a>
                            </li>
                            <li>
                                <button className="w-full text-left py-2 px-4 rounded-md text-red-500 hover:bg-red-100/10 transition-colors">
                                    Sign Out
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default SideBar