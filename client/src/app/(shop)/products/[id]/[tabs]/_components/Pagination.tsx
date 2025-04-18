/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'

interface Props {

}

const Pagination :FC<Props> = ({}) => {
  return (
    <Fragment>
       <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                    <button className="px-3 py-2 rounded-lg border text-gray-500 hover:bg-gray-50">
                        Previous
                    </button>
                    <button className="px-3 py-2 rounded-lg bg-emerald-500 text-white">
                        1
                    </button>
                    <button className="px-3 py-2 rounded-lg border text-gray-500 hover:bg-gray-50">
                        2
                    </button>
                    <button className="px-3 py-2 rounded-lg border text-gray-500 hover:bg-gray-50">
                        3
                    </button>
                    <span className="px-3 py-2">...</span>
                    <button className="px-3 py-2 rounded-lg border text-gray-500 hover:bg-gray-50">
                        Next
                    </button>
                </nav>
            </div>
    </Fragment>
  )
}

export default Pagination