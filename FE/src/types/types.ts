type Draft = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  createdAt: Date;
};
export type Role = 'Parent' | 'Sitter';
export type AccessJwt = {
  userId: string;
  email: string;
  role: Role;
  iat: number | string;
  exp: number | string;
};

export type Books = {
  id: string;
  datefrom: string;
  dateTo: string;
  numberChiled: string;
  cord: string;
  description: string;
  experiance: string;
  createdAt: string;
  updatedAt: string;
  parentId: string;
};

export type JobBooks = Readonly<Books>;

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type User = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  isConfirmed: boolean;
  passwordHash: string;
  //   role         Role
  //   parent       Parent
  //   sitter       Sitter
};
