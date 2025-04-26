/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import { useParams, useRouter } from 'next/navigation';
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
  const router = useRouter();
  let selectedTab = useRef<string>(slug[1]?.toLowerCase() || "history");

  if (selectedTab.current != 'history' && selectedTab.current != 'create'  ) {
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

      <TabsWithoutContent
        tabs={tabs}
        defaultValue={selectedTab.current }
        onValueChange={(tab) => {
          selectedTab.current=tab;
          if (slug[1]?.toLowerCase() !== tab  ) {
            router.push('/web-admin/notifications/'+tab)
          }
        }}
      />

      {(slug[1] === undefined || slug[1]?.toLowerCase() === 'history') && <NotificationListFilter />}

     

      {(slug[1] === undefined || slug[1].toLowerCase() === 'history') && <NotificationList />}

      {slug[1]?.toLowerCase() === 'create' && <CreateNotificationCard />}

    </Fragment>
  );
};

export default NotificationsSection;