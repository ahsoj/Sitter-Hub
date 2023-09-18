import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
class UserController {
  async findUniqueDraft(email: string) {
    return await prisma.draft.findUnique({ where: { email } });
  }
  async findUniqueUser({ email, userId }: { email?: string; userId?: string }) {
    if (email) {
      return await prisma.user.findUnique({ where: { email } });
    } else if (userId) {
      return await prisma.user.findUnique({ where: { id: userId } });
    }
  }
  async createDraft(data: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
  }) {
    return await prisma.draft.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        email: data.email,
      },
    });
  }

  async confirmEmail(data: { id: string }) {
    const user = await prisma.draft.findUnique({
      where: { id: data.id },
    });
    if (!user) throw new Error('Invalid User');
    const current_user = await prisma.user.findUnique({
      where: { email: user.email },
    });
    if (current_user) return current_user;
    const datetime = new Date();
    return await prisma.user.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        email: user.email,
        role: user.role,
        isConfirmed: datetime.toISOString(),
        passwordHash: '',
      },
    });
  }

  async confirmPassword(data: { id: string; password: string }) {
    const passwordHash = await bcrypt.hash(data.password, 10);
    return await prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        passwordHash: passwordHash,
      },
    });
  }

  async createUser(data: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    passwordHash: string;
  }) {
    const user = await prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        passwordHash: data.passwordHash,
      },
    });

    console.log(`Created user with ID ${user.id}`);
  }

  async userRole(data: { id: string; role: Role }) {
    const user = await prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        role: data.role,
      },
    });
    console.log(`User Role Updated with ID of ${user.id}`);
  }
}
export default new UserController();
