/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-dark-primary text-dark-text-primary">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
            <p className="text-lg mb-8 text-dark-text-secondary">
              We apologize for the inconvenience. An unexpected error has occurred.
            </p>
            {error.digest && (
              <p className="text-sm mb-4 text-dark-text-secondary">
                Error ID: {error.digest}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => reset()}
                className="px-6 py-3 bg-dark-accent text-dark-text-primary rounded-md hover:bg-opacity-90 transition-colors"
              >
                Try again
              </button>
              <Link
                href="/"
                className="px-6 py-3 border border-dark-secondary rounded-md hover:bg-dark-secondary transition-colors"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
