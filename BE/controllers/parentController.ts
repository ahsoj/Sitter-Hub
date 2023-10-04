import { PrismaClient, Role } from '@prisma/client';

import multer from 'multer';

const storage = multer.memoryStorage();

export const upload = multer({
  storage: storage,
});

export const uploadMiddleware = upload.single('parent_profile');

export function runMiddleware(req: any, res: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const prisma = new PrismaClient();
class ParentController {
  //create a user
  async createParent(data: {
    id: string;
    gender: string;
    city: string;
    profilePic: string;
  }) {
    const parent = await prisma.parent.update({
      where: { id: data.id },
      data: {
        gender: data.gender,
        city: data.city,
        profilePic: data.profilePic,
      },
    });

    console.log(`Created parent with ID ${parent.id}`);
  }

  //update parent profile
  async updateParent(data: {
    id: string;
    gender: string;
    city: string;
    profilePic: string;
  }) {
    const parent = await prisma.parent.update({
      where: { id: data.id },
      data: {
        gender: data.gender,
        city: data.city,
        profilePic: data.profilePic,
      },
    });

    console.log(`Parent Updated with ID ${parent.id}`);
  }

  //find the use
  async findParentById(data: { id: string }) {
    return await prisma.parent.findUnique({
      where: {
        id: data.id,
      },
    });
  }
  // async findUserByEmail(data: {email:string}){
  //   return await prisma.parent.findUnique({
  //     where: {
  //       email: data.email
  //     }
  //   })
  // }
  }
  export default ParentController;