'use client';
import { SessionProvider } from 'next-auth/react';
import { SnackbarProvider } from 'notistack';

const ContextLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <SnackbarProvider>{children}</SnackbarProvider>
    </SessionProvider>
  );
};

export default ContextLayout;
