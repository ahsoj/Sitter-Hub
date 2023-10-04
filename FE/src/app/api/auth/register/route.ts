// import axios from '@/lib/axios';
import axios from 'axios';
import { AxiosError, AxiosResponse } from 'axios';
import { NextResponse } from 'next/server';

interface DraftProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number | string;
  role: string;
}

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phoneNumber, role } =
      (await req.json()) as DraftProps;
    console.log(firstName, lastName, email, phoneNumber, role);
    const body = {
      firstName,
      lastName,
      email,
      phoneNumber,
      role,
    };
    const response = await fetch(
      'http://127.0.0.1:5000/api/v1/auth/pre_register/',
      { method: 'POST', body: JSON.stringify(body) }
    );
    // .then((resp: AxiosResponse) => NextResponse.json(resp.data))
    // .catch((err) => NextResponse.json(err));
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse('error');
  }
}
