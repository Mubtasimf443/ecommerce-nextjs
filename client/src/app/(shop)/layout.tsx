/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { WhiteToastContainer } from "@/_lib/core/toast";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/Header";
import ShopBreadCrumb from "@/components/layout/ShopBreadCrumb";
import { ToastProvider } from "@/components/ui/shadcn/toast";


export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    
    return (
        <>
            <Header />
            <ShopBreadCrumb />
            <main className="min-h-[70vh]">
                {children}
            </main>
            
            <Footer />
            <WhiteToastContainer />
            <ToastProvider duration={5000} swipeDirection="down" />
        </>
    );
}