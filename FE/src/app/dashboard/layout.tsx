import { getServerSession } from 'next-auth/next';
import Cookies from 'js-cookie';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const token = Cookies.get('token');
  console.log('token', token);

  return <section>{children}</section>;
};

export default DashboardLayout;
