import React from 'react';
import OnboardingSitters from './(role)/sitters';
import OnboardingParents from './(role)/parents';
import jwt_decode from 'jwt-decode';
import { cookies } from 'next/headers';
import Link from 'next/link';

type Role = 'Parent' | 'Sitter';

type AccessJwt = {
  userId: string;
  email: string;
  role: Role;
  iat: number | string;
  exp: number | string;
};

const OnboardingPage = () => {
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
  const current_id = access_jwt.userId;
  return (
    <div className="bg-slate-50">
      {current_role === 'Parent' ? (
        <OnboardingParents userId={current_id} />
      ) : (
        <OnboardingSitters />
      )}
    </div>
  );
};

export default OnboardingPage;
