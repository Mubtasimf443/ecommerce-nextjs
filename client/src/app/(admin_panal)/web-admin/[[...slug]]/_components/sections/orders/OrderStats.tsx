/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react';

interface Props {

};

const OrderStats :FC<Props> = ({}) => {
  return (
    <Fragment>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Orders', value: '1,234', change: '+12.5%', color: 'blue' },
            { label: 'Total Revenue', value: '$45,678', change: '+8.2%', color: 'green' },
            { label: 'Average Order Value', value: '$89.99', change: '+5.3%', color: 'yellow' },
            { label: 'Pending Orders', value: '56', change: '-2.4%', color: 'red' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <div className="mt-2 flex items-baseline justify-between">
                <h3 className="text-2xl font-semibold">{stat.value}</h3>
                <span className={`text-sm ${
                  stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>
    </Fragment>
  )
};

export default OrderStats;