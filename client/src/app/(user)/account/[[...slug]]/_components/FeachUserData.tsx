/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

"use client"
import React, { FC, Fragment, useMemo } from 'react'
import accountsStore from '../_lib/accounts.store';



interface Props {

}

const FeachUserData :FC<Props> = ({}) => {

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
  return (
    <Fragment>
      
    </Fragment>
  )
}

export default FeachUserData