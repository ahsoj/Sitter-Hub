type Draft = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  createdAt: Date;
};

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
