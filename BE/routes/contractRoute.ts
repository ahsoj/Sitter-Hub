import express from 'express';
import ContractController from '../controllers/contractController';

const router = express.Router();
const contractController = new ContractController();
router.post('/new_contract/:proposalId', async (req, res) => {
  try {
    const { proposalId } = req.params;
    const { startDate } = req.body;
   const contract = await contractController.createContract({
      proposalId,
      startDate,
    });
    res.status(201).send(contract);
  } catch (error) {
    console.error(error);
    res.status(500).send("Contract did not created!");
  }
});

router.put('/update_contract/:proposalId', async (req, res) => {
  try {
    const { proposalId } = req.params;
    const { startDate } = req.body;
    const contract = await contractController.updateContract({
      proposalId,
      startDate,
    });
    res.status(201).send(contract);
  } catch (error) {
    console.error(error);
    res.status(500).send("Contract date did not updated");
  }
});

//get contract by proposal
router.get('/contract/:proposalId', async (req, res) => {
  try {
    const { proposalId } = req.params;
    const contract = await contractController.getContractByProposal({
      proposalId,
    });
    res.status(201).send(contract);
  } catch(error) {
    console.error(error);
    res.status(500).send("Error geting Contract on these proposal");
  }
});

//delete feedback 
router.delete('/del_contract/:contractId', async (req, res) => {
  try {
    const { contractId } = req.params;
    const contract =  await contractController.deleteContract({
      contractId,
    });
    res.status(201).send(contract);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting Contract");
  }
});

export { router as default };
