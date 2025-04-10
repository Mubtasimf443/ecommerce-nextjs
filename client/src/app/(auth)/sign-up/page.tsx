/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import PageLoader from '@/components/custom/PageLoader'
import React from 'react'
import SignUpPage from './_page/SignUpPage'


const page = () => {
    return (
      <React.Suspense fallback={<PageLoader />} >
        <SignUpPage />
      </React.Suspense>
    )
}

export default page


