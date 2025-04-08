/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { redirect } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import ServerNotConnectedError from '../../_error/server-not-connected-error';

interface Props {
    params: {
        error: string;
    }
}

const ErrorPage = ({ params }: Props) => {
    const error = params.error;

    // If no error passed, redirect to 404
    if (!error) {
        redirect('/404');
        return null;
    }


    if (error[0] === 'server-not-connected') return (<ServerNotConnectedError />);
    else redirect('/404');
};

export default ErrorPage;