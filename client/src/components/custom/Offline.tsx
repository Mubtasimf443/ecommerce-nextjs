
/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Offline() {
    useEffect(() => {
        window.addEventListener("offline" , () => {
            let router = useRouter(  );
            router.push("/error/offline-error")
        });
    },[]);
    return (
       <></> 
    )
}