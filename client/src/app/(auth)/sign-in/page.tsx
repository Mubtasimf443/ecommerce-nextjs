/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


import React, { FC, Fragment, Suspense, useEffect, useRef, useState } from 'react'
import SignInPage from './_page/SignInPage'
import PageLoader from '@/components/custom/PageLoader'


const page = () => {
  return (
    <Fragment >
      <Suspense fallback={<PageLoader />}>
        <SignInPage/>
      </Suspense>
    </Fragment>
  )
}





export default page
