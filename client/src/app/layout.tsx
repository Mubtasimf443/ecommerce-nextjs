/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


import "./globals.css";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body >
        <div className="bg-gray-50">
        {children}
        </div>
      </body>
    </html>
  );
}
