/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
'use client'
import { usePathname } from 'next/navigation'
import React, { Fragment, useEffect, useMemo, useRef } from 'react'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/shadcn/breadcrumb";



export default function ShopBreadCrumb() {
  let pathName = usePathname();
  let pathNames = pathName.split("/").filter((element) => {
    if (element.trim().length !== 0) {
      return element;
    }
  });
  let query = useRef<string>("");
  if (pathNames[0].toLowerCase() === "home") {
    return <React.Fragment />
  }
  useEffect(() => {
    if (window) query.current = window.location.search;
  }, [])
  return (
    <>
      <section className='py-4 md:px-10 text-left'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem >
              <BreadcrumbLink className='hover:text-green-600' href="/home">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {
              pathNames.map((element, key) => {
                if (key + 1 < pathNames.length) {
                  return (
                    <React.Fragment key={key} >
                      <BreadcrumbItem className='hover:text-green-600'>
                        <BreadcrumbLink
                          className='hover:text-green-600'
                          href={'/' + pathNames.slice(0, key + 1).join('/') + query.current}
                        >
                          {element.at(0)?.toUpperCase() + element.slice(1)}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                    </React.Fragment>
                  )
                }
                return (
                  <React.Fragment key={key} >
                    <BreadcrumbItem>
                      <BreadcrumbPage >
                        {element.at(0)?.toUpperCase() + element.slice(1)}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </React.Fragment>
                )
              })
            }
          </BreadcrumbList>
        </Breadcrumb>
      </section>
    </>
  )
}
