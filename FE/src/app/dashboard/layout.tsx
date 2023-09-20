import { getServerSession } from 'next-auth/next';
import { getSession } from 'next-auth/react';
import { options as authOptions } from '@/lib/authOptions';
import Cookies from 'js-cookie';
import ParentsHeader from './(dashboardComponent)/parent/Header';
import SittersHeader from './(dashboardComponent)/sitter/Header';

type Role = 'Parent' | 'Sitter';

const current_role = 'Sitter';

const DashboardLayout = async ({
  props,
  children,
}: {
  props: any;
  children: React.ReactNode;
}) => {
  const session = await getServerSession(authOptions);
  // console.log('20', session);

  return (
    <main className="bg-slate-50 min-h-100vh">
      {current_role === 'Parent' ? <SittersHeader /> : <ParentsHeader />}
      <section className="my-8">{children}</section>
    </main>
  );
};

export default DashboardLayout;
