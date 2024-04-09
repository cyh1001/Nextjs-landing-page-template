// app/layout.tsx
import Link from 'next/link';
import { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';
import dynamic from 'next/dynamic'; 

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
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
  );
};

export default Layout;

