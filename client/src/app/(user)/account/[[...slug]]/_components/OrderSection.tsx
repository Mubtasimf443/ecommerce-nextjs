/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'

interface Props {

}

const OrderSection: FC<Props> = ({ }) => {
    const orders = [
        { id: "ORD-1234", date: "2023-10-15", status: "Delivered", total: 124.99 },
        { id: "ORD-1235", date: "2023-09-28", status: "Shipped", total: 79.50 },
        { id: "ORD-1236", date: "2023-09-10", status: "Processing", total: 249.99 },
    ];
    return (
        <Fragment>
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
                                            <span className={`px-2 py-1 rounded-full text-xs ${order.status === 'Delivered' ? 'bg-green-500/20 text-green-500' :
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
        </Fragment>
    )
}

export default OrderSection