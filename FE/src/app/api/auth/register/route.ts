// import axios from '@/lib/axios';
import axios from 'axios';
import { AxiosError, AxiosResponse } from 'axios';
import { NextResponse } from 'next/server';

interface DraftProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number | string;
}

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phoneNumber } =
      (await req.json()) as DraftProps;
    console.log(firstName, lastName, email, phoneNumber);
    const user = await axios
      .post('http://127.0.0.1:5000/api/v1/auth/pre_register/', {
        firstName,
        lastName,
        email,
        phoneNumber,
      })
      .then((resp: AxiosResponse) => resp);

    return NextResponse.json(user.data);
  } catch (error) {
    return new NextResponse('error');
  }
}
