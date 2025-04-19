/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'

interface Props {

}

const AddressSection :FC<Props> = ({}) => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default AddressSection