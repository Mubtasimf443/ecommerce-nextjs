/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import { useParams } from 'next/navigation';
import React, { FC, Fragment } from 'react';
import NotificationList from './NotificationList';
import NotificationHeader from './NotificationHeader';
import NotificationListFilter from './NotificationListFilter';
import CreateNotificationCard from './CreateNotificationCard';

interface Props {

};

const NotificationsSection :FC<Props> = ({}) => {
  let {slug} = useParams();
  return (
    <Fragment>
      <NotificationHeader />
  
      {(slug[1] === undefined || slug[1]?.toLowerCase() === 'list') && <NotificationListFilter />}

      {(slug[1] === undefined || slug[1].toLowerCase() === 'list') && <NotificationList />}

      {slug[1]?.toLowerCase() === 'create' && <CreateNotificationCard />}

    </Fragment>
  );
};

export default NotificationsSection;