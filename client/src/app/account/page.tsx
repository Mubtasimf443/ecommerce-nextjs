/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AccountPage: React.FC = () => {
  // Sample user data - in a real app, this would come from authentication
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/images/avatar-placeholder.jpg",
    joinDate: "January 2023"
  };

  // Sample order history
  const orders = [
    { id: "ORD-1234", date: "2023-10-15", status: "Delivered", total: 124.99 },
    { id: "ORD-1235", date: "2023-09-28", status: "Shipped", total: 79.50 },
    { id: "ORD-1236", date: "2023-09-10", status: "Processing", total: 249.99 },
  ];

  return (
    <div className="bg-dark-primary text-dark-text-primary min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-dark-secondary rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-300">
                  <Image 
                    src={user.avatar} 
                    alt={user.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-dark-text-secondary text-sm">Member since {user.joinDate}</p>
              </div>
              
              <nav>
                <ul className="space-y-2">
                  <li>
                    <a href="#profile" className="block py-2 px-4 rounded-md bg-dark-accent text-white">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="#orders" className="block py-2 px-4 rounded-md hover:bg-dark-hover transition-colors">
                      Orders
                    </a>
                  </li>
                  <li>
                    <Link href="/wishlist" className="block py-2 px-4 rounded-md hover:bg-dark-hover transition-colors">
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <a href="#addresses" className="block py-2 px-4 rounded-md hover:bg-dark-hover transition-colors">
                      Addresses
                    </a>
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
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Section */}
            <section id="profile" className="bg-dark-secondary rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark-text-secondary text-sm mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={user.name} 
                    className="w-full bg-dark-primary border border-dark-border rounded-md px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-dark-text-secondary text-sm mb-1">Email Address</label>
                  <input 
                    type="email" 
                    value={user.email} 
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
            
            {/* Recent Orders Section */}
            <section id="orders" className="bg-dark-secondary rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recent Orders</h2>
                <a href="#all-orders" className="text-blue-500 hover:underline text-sm">View All</a>
              </div>
              
              {orders.length === 0 ? (
                <p>You haven't placed any orders yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-dark-border">
                        <th className="text-left pb-3">Order ID</th>
                        <th className="text-left pb-3">Date</th>
                        <th className="text-left pb-3">Status</th>
                        <th className="text-right pb-3">Total</th>
                        <th className="text-right pb-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id} className="border-b border-dark-border">
                          <td className="py-4">{order.id}</td>
                          <td className="py-4">{order.date}</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              order.status === 'Delivered' ? 'bg-green-500/20 text-green-500' :
                              order.status === 'Shipped' ? 'bg-blue-500/20 text-blue-500' :
                              'bg-yellow-500/20 text-yellow-500'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-4 text-right">${order.total.toFixed(2)}</td>
                          <td className="py-4 text-right">
                            <a href={`#order-${order.id}`} className="text-blue-500 hover:underline">
                              Details
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
            
            {/* Address Book Section */}
            <section id="addresses" className="bg-dark-secondary rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Address Book</h2>
                <button className="text-blue-500 hover:underline text-sm">Add New Address</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-dark-border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Home</span>
                    <span className="bg-dark-accent/20 text-dark-accent text-xs px-2 py-1 rounded">Default</span>
                  </div>
                  <p>John Doe</p>
                  <p>123 Main Street</p>
                  <p>Apt 4B</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                  <p>Phone: (555) 123-4567</p>
                  <div className="mt-4 flex space-x-4">
                    <button className="text-blue-500 hover:underline text-sm">Edit</button>
                    <button className="text-red-500 hover:underline text-sm">Delete</button>
                  </div>
                </div>
                
                <div className="border border-dark-border rounded-lg p-4 border-dashed flex items-center justify-center">
                  <button className="text-dark-text-secondary hover:text-dark-text-primary transition-colors">
                    <span className="block text-3xl mb-2">+</span>
                    <span>Add New Address</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountPage
