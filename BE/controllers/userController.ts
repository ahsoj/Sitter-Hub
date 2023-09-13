import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()
class UserController {
    async createDraft(data: {
        firstName: string;
        lastName: string;
        phoneNumber: string; 
        email: string; 
    }) {
      const draft = await prisma.draft.create({
        data: {
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
            email: data.email,
          },
        });
        
      console.log(`Created Draft user with ID ${draft.id}`);
    }
 
    async confirmEmail(data: {id:string}) {
      const user = await prisma.draft.findUnique({
        where: {
          id: data.id
        }
      });
      if (!user) throw new Error('Invalid User');
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          email: user.email,
          isConfirmed: true,
        },
      });
    }

    async confirmPassword(data: {
      id: string,
      password: string,
    }) {
      const passwordHash = await bcrypt.hash(data.password, 10);
      await prisma.user.update({
        where: {
          id: data.id
        },
        data: {
          passwordHash: passwordHash
        }
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

  async userRole(data: {id: string; role: Role}){
    const user = await prisma.user.update({
        where :{
            id: data.id
        },
        data :{
            role: data.role
        }
    });
    console.log(`User Role Updated with ID of ${user.id}`);
  }
}
export default UserController;