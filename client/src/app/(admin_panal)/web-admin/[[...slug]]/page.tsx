/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import React, { ElementType, FC, Fragment } from 'react';
import DashBoard from './_components/sections/dashboard/DashBoard';
import { useParams } from 'next/navigation';
import Orders from './_components/sections/orders/Orders';
interface Props {
    
}
type ParamsType ={
    slug ?: string[]
}
const page :FC<Props>= ({}) => {
    let params :ParamsType = useParams();
    let slug = params.slug;
    let Child :ElementType = DashBoard;
    switch (Array.isArray(slug)) {
        case true:
            slug = slug?.map(el => el.toLowerCase()) || [] ;
            break;
        case false:
            slug = []
            break;
    }


    if (slug[0] === 'dashboard') Child = DashBoard;
    if (slug[0] === 'orders') Child = Orders;

    
    return (
        <Fragment >
            <Child />
        </Fragment>
    )
}

export default page;