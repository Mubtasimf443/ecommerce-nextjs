/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

"use client"

import { HeaderTop } from './HeaderTop';
import HeaderCenter from './HeaderCenter';
import HeaderBottom from './HeaderBottom';


export default function Header() {

  return (
    <header className="bg-[color:--theme-bg]">
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />
    </header>
  );
}








