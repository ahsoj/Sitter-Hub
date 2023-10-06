import { getServerSession } from 'next-auth/next';
import { getSession } from 'next-auth/react';
import { options as authOptions } from '@/lib/authOptions';
import jwt_decode from 'jwt-decode';
import { cookies } from 'next/headers';
import ParentsHeader from './(dashboardComponent)/parent/Header';
import SittersHeader from './(dashboardComponent)/sitter/Header';
import Link from 'next/link';
import { AccessJwt } from '@/types/types';

const DashboardLayout = async ({
  props,
  children,
}: {
  props: any;
  children: React.ReactNode;
}) => {
  // const session = await getServerSession(authOptions);
  const _cookies = cookies().get('access_token')?.value;
  if (!_cookies)
    return (
      <h4 className="text-gray-500 text-2xl font-normal">
        You may need to{' '}
        <Link className="text-indigo-500" href="/signin">
          signin
        </Link>{' '}
        to access this page
      </h4>
    );
  const access_jwt: AccessJwt = jwt_decode(_cookies);
  const current_role = access_jwt.role || 'Parent';

  return (
    <main className="bg-slate-50 min-h-100vh">
      {current_role === 'Parent' ? (
        <ParentsHeader userInfo={access_jwt} />
      ) : (
        <SittersHeader userInfo={access_jwt} />
      )}
      <section className="">{children}</section>
    </main>
  );
};

export default DashboardLayout;
