/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import PageLoader from '@/components/custom/PageLoader'
import React from 'react'
import OTPVerificationPage from './_page/OTPVerificationPage'

const page: React.FC = () => {
    return (
        <React.Fragment>
            <React.Suspense fallback={<PageLoader ></PageLoader>} >
                <OTPVerificationPage ></OTPVerificationPage>
            </React.Suspense>
        </React.Fragment>
    )
}

export default page
