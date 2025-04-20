/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
'use client'
import React from 'react';
import { redirect, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import AccountLayout from './_components/AccountLayout';
import InfoSection from './_components/InfoSection';
import OrderSection from './_components/OrderSection';
import AddressSection from './_components/AddressSection';
import NotificationsSection from './_components/NotificationsSection';
import SettingsSection from './_components/SettingsSection';
interface Props {
  params: Promise<{ slug: string }>;
}

const AccountPage: React.FC<Props> =  () => {
  // let slug = (await params).slug;
  let slug = useParams().slug;
  if (!slug) return redirect('/account/info');

  const currentPath = `/account/${slug[0]}`;

  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  return (
      <AnimatePresence mode="wait">
        <motion.div
          key={slug[0]}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.3 }}
        >
          {slug[0] === 'info' && <InfoSection />}
          {slug[0] === 'orders' && <OrderSection />}
          {slug[0] === 'address' && <AddressSection />}
          {slug[0] === 'notifications' && <NotificationsSection />}
          {slug[0] === 'settings' && <SettingsSection />}
        </motion.div>
      </AnimatePresence>
    
  );
};

export default AccountPage;