/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { WhiteToastContainer } from "@/_lib/core/toast";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/Header";
import ShopBreadCrumb from "@/components/layout/ShopBreadCrumb";
import FeachUserData from "./_components/FeachUserData";
import AccountLayout from "./_components/AccountLayout";


export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <>
            <Header />
            <ShopBreadCrumb />
            <FeachUserData />

            <AccountLayout>
                {children}
            </AccountLayout>

            <Footer />
            <WhiteToastContainer />
            
        </>
    );
}