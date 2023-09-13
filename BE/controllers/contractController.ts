import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()
class ContractController { 
    //create a new contract to the database
    async createProposal(data: {startDate: Date, proposalId: string}){
        const contract = await prisma.contract.create({
            data: {
                startDate: data.startDate,
                proposalId: data.proposalId
            }
        });
        console.log(`contract created with id of ${contract.id}`)
    }

    //get proposals on contract
    async getProposalOnContract() {
        const proposal = await prisma.contract.findMany({
            include: {
                Proposal: true,
            }
        });
        return proposal;
    }

}

export default ContractController;