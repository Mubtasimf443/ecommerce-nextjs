/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import PageLoader from '@/components/custom/PageLoader'
import React from 'react'
import SearchPage from './_components/SearchPage'

const page :React.FC = () => {
  return (
    <React.Suspense fallback={<PageLoader />}>
      <SearchPage />
    </React.Suspense>
  )
}

export default page
