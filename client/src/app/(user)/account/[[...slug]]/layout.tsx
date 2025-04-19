/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { WhiteToastContainer } from "@/_lib/core/toast";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/Header";
import ShopBreadCrumb from "@/components/layout/ShopBreadCrumb";
import { ToastProvider } from "@/components/ui/shadcn/toast";
import SideBar from "./_components/SideBar";
import FeachUserData from "./_components/FeachUserData";


export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <>
            <Header />
            <ShopBreadCrumb />
            <FeachUserData />
            <main className="min-h-[70vh]">
                <div className="bg-dark-primary text-dark-text-primary min-h-screen">
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-3xl font-bold mb-8">My Account</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            <SideBar />
                            <div className="lg:col-span-3">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <WhiteToastContainer />
            <ToastProvider duration={5000} swipeDirection="down" />
            
        </>
    );
}