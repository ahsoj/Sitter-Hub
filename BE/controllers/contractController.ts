import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()
class ContractController { 
    //create a new contract to the database
    async createContract(data: {startDate: Date, proposalId: string}){
        //check if proposal exist
        const proposal = await prisma.proposal.findUnique({
            where: {
                id: data.proposalId,
            }
        })
        if (!proposal) {
            return ("No such proposal to Approved!")
        }
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
        return (`Contract date updated to ${contract.startDate}`);
    }

    //get proposals on contract
    async getContractByProposal(data: {
        proposalId: string
    }) {
        const proposal = await prisma.contract.findMany({
            where: {
                proposalId: data.proposalId
            }
        });
        return proposal;
    }

    //delete proposal on contract
    async deleteContract(data: {
        contractId: string
    }) {
        await prisma.contract.delete({
            where: {
                id: data.contractId,
            }
        });
        console.log("Contract deleted");
        return ('contract is deleted!')
    }
}

export default ContractController;