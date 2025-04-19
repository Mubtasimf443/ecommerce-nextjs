/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import React, { FC, Fragment } from 'react'
import accountsStore from '../_lib/accounts.store'

interface Props {

}

const InfoSection: FC<Props> = ({ }) => {
    let store = accountsStore();
    let name = store.name;
    let email = store.email;
    return (
        <Fragment>
            {/* Profile Section */}
            <section id="profile" className="bg-dark-secondary rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-dark-text-secondary text-sm mb-1">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            className="w-full bg-dark-primary border border-dark-border rounded-md px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-dark-text-secondary text-sm mb-1">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            className="w-full bg-dark-primary border border-dark-border rounded-md px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-dark-text-secondary text-sm mb-1">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="Add phone number"
                            className="w-full bg-dark-primary border border-dark-border rounded-md px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-dark-text-secondary text-sm mb-1">Password</label>
                        <button className="text-blue-500 hover:underline">Change Password</button>
                    </div>
                </div>
                <div className="mt-6">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">
                        Save Changes
                    </button>
                </div>
            </section>
        </Fragment>
    )
}

export default InfoSection