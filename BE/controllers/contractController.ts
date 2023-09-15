import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()
class ContractController { 
    //create a new contract to the database
    async createContract(data: {startDate: Date, proposalId: string}){
        const contract = await prisma.contract.create({
            data: {
                startDate: data.startDate,
                proposalId: data.proposalId
            }
        });
        console.log(`contract created with id of ${contract.id}`)
        return contract;
    }

    //update contract
    async updateContract(data: {startDate: Date, proposalId: string}) {
        const contract = await prisma.contract.update({
            where: {
                id: data.proposalId,
            },
            data: {
                startDate: data.startDate,
            }
        });
        return contract;
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

    //delete proposal on contract
    async deleteContract(data: {
        proposalId: string
    }) {
        await prisma.contract.delete({
            where: {
                proposalId: data.proposalId,
            }
        });
        console.log("Contract deleted");
    }

}

export default ContractController;