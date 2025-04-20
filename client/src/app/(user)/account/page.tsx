/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */


import { redirect } from 'next/navigation'
import React, { FC, Fragment } from 'react'

interface Props {

}

const page: FC<Props> = ({ }) => {
    redirect('account/profile')
    return (
        <Fragment>

        </Fragment>
    )
}

export default page