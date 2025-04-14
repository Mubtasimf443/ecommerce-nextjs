/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import React from 'react';

const Loader = ({widthClass = " w-7 h-7"}: {widthClass? : string}) => {
  return (
    <div className={"flex justify-center items-center "}>
      <div className={"relative "+widthClass}>
        <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-2 border-[color:--theme-border-accent] rounded-full border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;