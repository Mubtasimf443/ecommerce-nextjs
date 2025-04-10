/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


import { WhiteToastContainer } from "@/_lib/core/toast";
import Offline from "@/components/custom/Offline";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/Header";
import { Fragment } from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="min-h-[70vh]">
        {children}
      </main>
      <Footer />
      <WhiteToastContainer />
    </>
  );
}