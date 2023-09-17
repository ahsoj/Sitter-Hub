export { Experiance, User } from '@prisma/client';
export type AuthControllerProps = {
  addRefreshToken: {
    refreshToken: string;
    userId: string;
  };
};
