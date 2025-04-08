
/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import React, { FC , useState} from 'react'
import Link from 'next/link';
import envStore from '@/_lib/store/envStore';
import { useRouter } from 'next/navigation';
import { errorToast, successToast } from '@/_lib/core/toast';

const ServerNotConnectedError :FC= () => {
  const [isRetrying, setIsRetrying] = useState(false);
    const server_url = process.env.NEXT_PUBLIC_SERVER_ORIGIN;
    const router = useRouter();
      async function checkServerStatus() {
          try {
              setIsRetrying(true)
              let timeOut = setTimeout(() => {
                  throw "Server Connection Not Possible";
              }, 5000);
              const response = await fetch(server_url + "/PING");
              if (response.status === 200) {
                  clearTimeout(timeOut);
                  successToast("Server in connected");
                  new Promise((resolve, reject) => setTimeout(() => resolve(true), 650));
                 
                  router.back();
              } else {
                  throw ("Server Connection Not Possible");
              }
          } catch (error: any | string) {
             console.log(error);
              if (error instanceof TypeError) errorToast("Failed to connect with the server");
              if (typeof error === 'string') errorToast(error);
              setIsRetrying(false)
          }
      }
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Error Icon */}
          <div className="mb-6">
            <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
  
          {/* Error Message */}
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Server Connection Failed</h1>
          <p className="text-gray-600 mb-8">
            We couldn&apos;t connect to our servers. This might be due to:
            <ul className="mt-4 text-left text-sm space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Server maintenance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                High server load
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Network connectivity issues
              </li>
            </ul>
          </p>
  
          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={checkServerStatus}
              disabled={isRetrying}
              className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 ${isRetrying ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isRetrying ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Retrying...
                </>
              ) : (
                'Retry Connection'
              )}
            </button>
  
            <Link
              href="/"
              className="block text-red-600 hover:text-red-800 font-medium transition-colors duration-200"
            >
              Return to Homepage
            </Link>
          </div>
  
          {/* Support Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              If the problem persists, please contact our support team at{' '}
              <a href="mailto:support@example.com" className="text-red-600 hover:text-red-800">
                support@example.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
}

export default ServerNotConnectedError
