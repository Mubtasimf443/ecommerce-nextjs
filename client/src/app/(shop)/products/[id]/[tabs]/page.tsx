/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import ReviewsTab from './_tabs/Reviews.Tab';

interface Props {
    params: Promise<{ tabs: string }>
}

const page: FC<Props> = async ({ params }) => {
    let tabName = (await params).tabs.toLowerCase();
    let tab :any;

    if (tabName === "reviews")  tab = <ReviewsTab />;
    else tab = <Fragment ></Fragment>
    return (
        <Fragment>
            {tab}
        </Fragment>
    )
}

export default page