import { cookies } from 'next/headers';
import FindJob from './(dashboardComponent)/sitter/Findjob';
import Talent from './(dashboardComponent)/parent/Talent';
import Link from 'next/link';
import jwt_decode from 'jwt-decode';

type Role = 'Parent' | 'Sitter';

type AccessJwt = {
  userId: string;
  email: string;
  role: Role;
  iat: number | string;
  exp: number | string;
};

const Dashboard = () => {
  const _cookies = cookies().get('access_token')?.value;
  if (!_cookies)
    return (
      <h4 className="text-gray-500 text-2x my-4 font-normal">
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
    <div className="my-8">
      {current_role === 'Parent' ? <Talent /> : <FindJob />}
    </div>
  );
};

export default Dashboard;
