import { PrismaClient, Role } from '@prisma/client';


const prisma = new PrismaClient()
class ParentController {
//create a user
    async createParent(data: {
      id: string
      gender: string;
      cityId: string;
      profilePic: string;
  }) {
    const parent = await prisma.parent.update({
      where: { id: data.id},
      data: {
        gender: data.gender,
        cityId: data.cityId,
        profilePic: data.profilePic,
        },
      });

    console.log(`Created parent with ID ${parent.id}`);
  }
//find the use 
  async findParentById(data: {id:string}){
    return await prisma.parent.findUnique({
      where: {
        id: data.id
      }, include: {
        city: true,
      }
    });
  }
  

  }
  export default ParentController;