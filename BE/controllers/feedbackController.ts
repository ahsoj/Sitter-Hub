import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient()

class FeedBackContoller {
    //add a new feed back
    async createFeedBack(data: {
        rating: number;
        comment?: string | null;
    }){
        const feedback = await prisma.feedback.create({
            data: {
                rating: data.rating,
                comment: data.comment
            }
    });
    console.log("new feedback just created");
    return feedback;
}
//get all feedbacks
async getFeedbacks(){
    return await prisma.feedback.findMany();
}

//get feedback by feedback id
async getFeedbackById(data: { id: string}) {
    return await prisma.feedback.findUnique({
        where:{
            id: data.id,
            },
    });
}

//delete feedback
async deleteFeedBackById(id: string)  {
        const feedbackToDelete=await this.getFeedbackById({id});
    	 if (!feedbackToDelete ) throw new Error('No Feedback found with that id');
         return await prisma.feedback.delete({
            where: {
                id: id
            }
         });
    }

//get feed back of a sitter
async getAllFeedBackBySitterId(data: {id: string}) {
    const feedbacks = await prisma.feedback.findMany({
        where :{
            sitterId: data.id
        },
        orderBy :{
            createdAt: 'desc'
        }
    });
    return feedbacks;
}

}

export default FeedBackContoller;