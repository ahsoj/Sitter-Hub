import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()
class ProposalController {
    //create new proposal
    async createProposal(data: {
        id: string,
        coverLetter: string, 
        bookingId: string, 
        sitterId: string
    }){
        const proposal = await prisma.proposal.create({
            data:{
                id: data.id,
                coverLetter: data.coverLetter,
                bookingId: data.bookingId,
                sitterId: data.sitterId
            }
        });
        console.log(`proposal created with id of ${proposal.id}`)
        return proposal;
    }
    //update Proposal
    async updateProposal(data: {id: string, coverLetter:string, sitterId: string}) {
        const proposal = await prisma.proposal.update({
            where :{
                id: data.id,
                Sitter:{
                    id: data.sitterId
                }
            },
            data :{
                coverLetter: data.coverLetter
            }
        });
        console.log(`proposal update with id of ${proposal.id}`);
        return proposal;
    }
    //get all proposal form the database
    async getAllProposal() {
        const proposals = await prisma.proposal.findMany({
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

