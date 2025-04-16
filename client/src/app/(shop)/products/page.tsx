/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

"use client"
import { redirect } from 'next/navigation'
import React, { FC, Fragment } from 'react'

interface Props {

}

const page: FC<Props> = () => {
    redirect('/products/id');
}

export default page