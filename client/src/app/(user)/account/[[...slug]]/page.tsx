/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import React, { Fragment, useMemo } from 'react'
import { redirect } from 'next/navigation';
import InfoSection from './_components/InfoSection';
import OrderSection from './_components/OrderSection';
import AddressSection from './_components/AddressSection';


interface Props {
  params : Promise<{slug :string}>
}
const AccountPage: React.FC<Props> =async ({params}) => {
  let slug = (await params).slug;
  if (!slug) return redirect('/account/info');
  if (slug[0] === 'info') return <InfoSection />;
  if (slug[0] === 'orders') return <OrderSection />;
  if (slug[0] === 'address') return <AddressSection />;
  return <React.Fragment />;
}

export default AccountPage
