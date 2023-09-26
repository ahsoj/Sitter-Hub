import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient()

class FeedBackContoller {
    //add a new feed back
    async createFeedBack(data: {
        sitterId: string,
        rating: number;
        comment?: string | null;
    }){
        const feedback = await prisma.feedback.create({
            data: {
                sitterId: data.sitterId,
                rating: data.rating,
                comment: data.comment
            }
    });
    console.log("new feedback created");
    return feedback;
}
//get all feedbacks
async getFeedbacksBySitter(data:{
    sitterId: string
}){
    const sitter = await prisma.sitter.findUnique({
        where: {
            id: data.sitterId
        }
    });
    if(!sitter) {
        return ("no such user");
    }
    return await prisma.feedback.findMany({
        where:{
            sitterId: data.sitterId,
        }
    });
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
async deleteFeedBackById(id:string)  {
        const feedbackToDelete = await this.getFeedbackById({id});
    	 if (!feedbackToDelete ) throw new Error('No Feedback found with that id');
         await prisma.feedback.delete({
            where: {
                id: id
            }
         });
         return ('You have deleted feedback!');
    }

//get feed back of a sitter
async getAllFeedBackBySitterId(data: {sitterId: string}) {
    const feedbacks = await prisma.feedback.findMany({
        where :{
            sitterId: data.sitterId
        },
        orderBy :{
            createdAt: 'desc'
        }
    });
    return feedbacks;
}

}

export default FeedBackContoller;