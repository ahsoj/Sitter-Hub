import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// export { default } from 'next-auth/middleware';
import { getToken } from 'next-auth/jwt';
import Cookies from 'js-cookie';

const authPath = ['/signin', '/register'];

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  // console.log('11', token);
  // console.log('12', req.nextUrl.pathname);
  if (token && authPath.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
}

export const config = {
  matcher: '/:path*',
};
