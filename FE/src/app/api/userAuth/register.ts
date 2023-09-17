import axios from '@/lib/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { NextResponse } from 'next/server';

interface DraftProps {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: number | string;
}

export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, phoneNumber } =
      (await req.json()) as DraftProps;
    console.log(firstname, lastname, email, phoneNumber);
    await axios
      .post('/auth/pre_register/', {
        firstname,
        lastname,
        email,
        phoneNumber,
      })
      .then((resp: AxiosResponse) => {
        return NextResponse.json(resp.data);
      })
      .catch((err: AxiosError) => {
        return new NextResponse(
          JSON.stringify({
            status: err.code,
            message: err.message,
          }),
          {
            status: err.status,
          }
        );
      });
  } catch (error) {
    console.log('error');
    return NextResponse.next();
  }
}
