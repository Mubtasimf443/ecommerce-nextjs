/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import React, { Fragment, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SideBar from './_components/SideBar';
import { redirect, useParams } from 'next/navigation';
import accountsStore from './_lib/accounts.store';
import InfoSection from './_components/InfoSection';
import OrderSection from './_components/OrderSection';
import AddressSection from './_components/AddressSection';

const AccountPage: React.FC = () => {
  let slug = useParams().slug;
  if (!slug) {
    return redirect('/account/info')
  }

  const store = accountsStore();

  useMemo(async () => {
    try {
      const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "/images/600x400.svg",
        joinDate: "January 2023"
      };
      store.setUser(user);
    } catch (error) {

    } finally {

    }
  }, []);
 
  if (slug[0] === 'info') return <InfoSection />;
  if (slug[0] === 'orders') return <OrderSection />;
  if (slug[0] === 'address') return <AddressSection />;
  
  
  return <React.Fragment />;

}

export default AccountPage
