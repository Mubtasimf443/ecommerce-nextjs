/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import Image from 'next/image'
import React from 'react'

interface Props {
    width ?: number;
    height ?: number;
    src ?: string ;
    alt ?: string;
    className ?: string;
    
}
const Logo :React.FC <Props >= ({height , width , src = "/images/logo.jpg", alt='Logo', className}) => {
  return (
    <>
     <Image width={height || 200} height={width || 200} src={src} alt={alt} className={className || ""}/>
    </>
  )
}

export default Logo
