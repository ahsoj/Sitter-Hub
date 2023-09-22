import Header from '@/container/header';
import './globals.css';
// import { SessionProvider } from 'next-auth/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ContextLayout from './base';
// import { getSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sitter-Hub',
  description: 'Childcare For Your Busy Life.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getSession();
  return (
    <html lang="en">
      <ContextLayout>
        <body className={inter.className}>{children}</body>
      </ContextLayout>
    </html>
  );
}
