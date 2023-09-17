import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient()
class SitterController {
//create a new user
    async createSitter(data: {
      id: string
      gender: string;
      birthDate: Date;
      cityId: string;
      educationBackground: string;
      certificate: string;
      isVerifyed: boolean;
      profilePic: string;
  }) {
    const sitter = await prisma.sitter.update({
      where: { id: data.id},
      data: {
        gender: data.gender,
        birthDate: data.birthDate,
        cityId: data.cityId,
        educationBackground: data.educationBackground,
        certificate: data.certificate,
        isVerifyed: data.isVerifyed,
        profilePic: data.profilePic,
        },
      });

    console.log(`Created sitter with ID ${sitter.id}`);
  }
//find all sitter 
  async getAllSitter(){
    return await prisma.sitter.findMany({
      include: {
        City: true,
        feedbacks: true,
      }
    })
  }

  async getSitterById(data: {id:string}){
    return await prisma.sitter.findUnique({
      where: {
        id: data.id
      },
      include: {
        City: true,
        feedbacks: true
      }
    })
  }

//   async getSitterByRating(data: {rating: number}) {
//     const byRating = await prisma.sitter.findMany({
//         where :{
//             feedbacks: {
//               rating: {
//                 gte: data.rating
//             },
//           }
//         },
//         include: {
//           City: true,
//           feedbacks: true
//         },
//     });
//     return byRating;
// }
  }
  export default SitterController;