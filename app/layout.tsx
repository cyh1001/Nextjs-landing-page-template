// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App",
  description: "My App description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Ensure you include necessary head content here, such as meta tags */}
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-orange-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
          <nav className="flex justify-between items-center p-4 bg-orange-100 dark:bg-gray-900">
            <Link href="https://yourproductwebsite.com" className="text-xl font-bold">
              产品Logo
            </Link>
            <Link href="https://startusinglink.com" className="px-4 py-2 bg-orange-200 dark:bg-gray-700 hover:bg-orange-300 dark:hover:bg-gray-600 rounded-md">
              开始使用
            </Link>
          </nav>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}



// // app/layout.tsx
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Link from 'next/link';
// import { ReactNode } from 'react';
// import 'tailwindcss/tailwind.css';
// import dynamic from 'next/dynamic';

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "My App",
//   description: "My App description",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }




 

// // interface LayoutProps {
// //   children: ReactNode;
// // }

// const Layout = ({ children }: LayoutProps) => {
//   return (
//     <div className="min-h-screen flex flex-col bg-orange-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
//       <nav className="flex justify-between items-center p-4 bg-orange-100 dark:bg-gray-900">
//         <Link href="https://yourproductwebsite.com" className="text-xl font-bold">
//           产品Logo
//         </Link>
//         <Link href="https://startusinglink.com" className="px-4 py-2 bg-orange-200 dark:bg-gray-700 hover:bg-orange-300 dark:hover:bg-gray-600 rounded-md">
//           开始使用
//         </Link>
//       </nav>
//       <main className="flex-grow container mx-auto px-4 py-8">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Layout;

