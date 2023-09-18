import type { NextAuthOptions } from 'next-auth';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from '@/lib/axios';
import jwt_decode from 'jwt-decode';

type JwtToken = {
  accessToken: string;
  refreshToken: string;
};

export const options: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  providers: [
    GoogleProvider({
      profile(profile: GoogleProfile) {
        return {
          ...profile,
          role: profile.role ?? 'user',
          id: profile.id.toString(),
          image: profile.picture,
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email Address:',
          type: 'email',
          placeholder: 'your-cool-username',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'your-awesome-password',
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        try {
          if (!credentials) {
            return Error('Please fill required fields');
          }
          const user = await axios
            .post('http://127.0.0.1:5000/api/v1/auth/login/', {
              email: credentials.email,
              password: credentials.password,
            })
            .then((res) => res);
          if (user) return user.data;
        } catch (error: any) {
          throw new Error(
            `${error.response.data.message} $email=${credentials?.email}`
          );
        }
      },
    }),
  ],
  callbacks: {
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user }) {
      // if (user) token.role = user.role ?? 'parent';
      return token;
    },
    // If you want to use the role in client components
    async session({ session, token }) {
      // if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
