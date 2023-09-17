import { prisma } from '../utils/prisma';
import { hashTokens } from '../utils/jwt';
import { AuthControllerProps } from '../types/types';

class AuthController {
  addRefreshTokenWhiteList({
    refreshToken,
    userId,
  }: AuthControllerProps['addRefreshToken']) {
    return prisma.refreshToken.create({
      data: {
        hashedToken: hashTokens(refreshToken),
        userId,
      },
      include: {
        user: {
          select: {
            email: true,
          },
        },
      },
    });
  }
  findRefreshTokenById(id: string) {
    return prisma.refreshToken.findUnique({
      where: { id },
    });
  }
  deleteRefreshToken(id: string) {
    return prisma.refreshToken.update({
      where: { id },
      data: { revoked: true },
    });
  }
  revokedTokens(userId: string) {
    return prisma.refreshToken.updateMany({
      where: { userId },
      data: { revoked: true },
    });
  }
}

export default new AuthController();
