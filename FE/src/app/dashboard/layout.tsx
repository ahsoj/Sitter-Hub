import { getServerSession } from 'next-auth/next';
import { getSession } from 'next-auth/react';
import { options as authOptions } from '@/lib/authOptions';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { cookies } from 'next/headers';
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
  const _cookies = cookies().get('next-auth.session-token')?.value;
  console.log('session', session);
  console.log('cookies', _cookies);

  return (
    <main className="bg-slate-50 min-h-100vh">
      {current_role === 'Parent' ? <SittersHeader /> : <ParentsHeader />}
      <section className="">{children}</section>
    </main>
  );
};

export default DashboardLayout;
