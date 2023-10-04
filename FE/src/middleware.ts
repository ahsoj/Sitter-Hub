import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const authPath = ['/signin', '/register'];

export default async function middleware(req: NextRequest) {
  // const token = await getToken({ req });
  const access_token = req.cookies.get('access_token')?.value;
  if (access_token && authPath.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
}

export const config = {
  matcher: '/:path*',
};
