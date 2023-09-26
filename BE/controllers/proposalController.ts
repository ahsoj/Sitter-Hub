import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()
class ProposalController {
    //create new proposal
    async createProposal(data: {
        bookingId: string, 
        sitterId: string
        coverLetter: string, 
        
    }){
        const book = await prisma.booking.findUnique({
            where:{
                id: data.bookingId,
            }
        });
        if (!book) {
             return ('Booking not found!')
            // throw new Error('Booking not found!');
        }
        const checkIfUserAlreadyApplied = await prisma.proposal.findMany({
            where: {
                bookingId: data.bookingId,
                sitterId: data.sitterId
            }
        });
        if(checkIfUserAlreadyApplied) { 
            return ('You already applied for this job!');
           // throw new Error('You already applied for this job!');
        }
        const proposal = await prisma.proposal.create({
            data:{
                coverLetter: data.coverLetter,
                bookingId: data.bookingId,
                sitterId: data.sitterId
            }
        });
        console.log(`proposal created with id of ${proposal.id}`)
        return proposal;
    }
    //update Proposal
    async updateProposal(data: {
        id: string,
        sitterId: string, 
        bookingId: string,
        coverLetter:string,
        
    }) {
        const book = await prisma.proposal.findMany({
            where: {
                id: data.id
            }
        });
        if (!book) {
            throw new Error('Booking not found!');
        }
        const proposal = await prisma.proposal.update({
            where :{
                id: data.id,
                sitterId: data.sitterId,
            },
            data :{
                coverLetter: data.coverLetter
            }
        });
        console.log(`proposal update with id of ${proposal.id}`);
        return proposal;
    }

    //get all proposal form the database by using booking id
    async getAllProposalByBookingId(data:{
        bookigId:string,
    }) {
        const proposals = await prisma.proposal.findMany({
            where: {
                bookingId: data.bookigId,
            },
            include: {
                Booking: true,
                Sitter: true
            }
        });
        return proposals;
    }
    
    //get proposal by Id
    async getProposalById(data:{id: string}) {
        const proposal = await prisma.proposal.findUnique({
            where: {
                id: data.id,
            },
            include: {
                Booking: true,
                Sitter: true
            }
        });
        return proposal;
    }
    
}
export default ProposalController;

