import axios from './axios';
import Cookies from 'js-cookie';
import { User } from 'next-auth';

type CredentialProps = {
  email: string;
  password: string;
  callbackUrl: string;
};

class Auth {
  async signIn(credentials: CredentialProps): Promise<object> {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/login/', {
          email: credentials.email,
          password: credentials.password,
        })
        .then((res) => {
          Cookies.set('_token', JSON.stringify(res.data), { expires: 60 });
          if (typeof window !== undefined) {
            window.location.href = credentials.callbackUrl;
          }
          resolve(res.data);
        })
        .catch((err) => reject(err));
    });
  }
}

export default new Auth();
