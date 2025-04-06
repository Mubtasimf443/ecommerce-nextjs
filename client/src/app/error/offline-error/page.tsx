/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const OfflineErrorPage = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [isLoadingPreviousPage , setIsLoadingPreviousPage]=useState(false);

  useEffect(() => {
    window.addEventListener('online',async () => {
        setIsOnline(true);
       
        await new Promise((resolve, reject) => {
            setIsOnline(true)
            setIsLoadingPreviousPage(true)
            let timeOut= setTimeout(() => {}, 1500)
            clearTimeout(timeOut);
            resolve(true)
        });
    
        const router =useRouter();
        router.back()
      });
  }, []);
 

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="mb-8">
          <svg
            className={`mx-auto h-24 w-24 ${isOnline ? 'text-green-500' : 'text-red-500'} animate-pulse`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
            />
          </svg>
        </div>

        {/* Status Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {isOnline ? 'Connection Restored!' : 'No Internet Connection'}
        </h2>
        <p className="text-gray-600 mb-8">
          {isOnline
            ? 
            
           ( isLoadingPreviousPage ? "In a second you will be redirected to the previouse Page" : 'Your internet connection is back. You can continue browsing.')
            : 'Please check your internet connection and try again.'}
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Retry Connection
          </button>
          
          <Link 
            href="/"
            className="block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            Return to Homepage
          </Link>
        </div>

        {/* Connection Status */}
        <div className={`mt-8 flex items-center justify-center space-x-2 ${isOnline ? 'text-green-500' : 'text-red-500'}`}>
          <span className={`h-3 w-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></span>
          <span className="text-sm font-medium">
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OfflineErrorPage;