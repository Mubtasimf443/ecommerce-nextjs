/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import { useParams } from 'next/navigation';
import React, { FC, Fragment, useRef } from 'react';
import NotificationList from './NotificationList';
import NotificationHeader from './NotificationHeader';
import NotificationListFilter from './NotificationListFilter';
import CreateNotificationCard from './CreateNotificationCard';
import TabsWithoutContent, { TabsType } from '../../layout/TabsWithoutContent';

interface Props {

};

const NotificationsSection: FC<Props> = ({ }) => {
  let { slug } = useParams();
  const tabs: TabsType = [
    { title: 'History', value: 'history' },
    { title: "Create", value: "create" }
  ];

  let selectedTab = useRef<string>(slug[0]?.toLowerCase() || "list");
  if (selectedTab.current != 'list' &&selectedTab.current != 'create'  ) {
    return (
      <>
      
      </>
    );
  }
  function tabChange(tab:string) {
    
  }

  return (
    <Fragment>
      <NotificationHeader />

      {(slug[1] === undefined || slug[1]?.toLowerCase() === 'list') && <NotificationListFilter />}

      <TabsWithoutContent
        tabs={tabs}
        defaultValue={selectedTab.current }
        onValueChange={(tab) => {

        }}
      />

      {(slug[1] === undefined || slug[1].toLowerCase() === 'list') && <NotificationList />}

      {slug[1]?.toLowerCase() === 'create' && <CreateNotificationCard />}

    </Fragment>
  );
};

export default NotificationsSection;