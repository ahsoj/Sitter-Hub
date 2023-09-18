import express from 'express';
import ContractController from '../controllers/contractController';

const router = express.Router();
const contractController = new ContractController();
router.post('/poposal/:proposalId', async (req, res) => {
    try {
        const { proposalId} = req.params;
        const { startDate } = req.body;
        await contractController.createContract({
            proposalId,
            startDate, 
        });
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

router.put('/poposal/:proposalId', async (req, res) => {
    try {
        const { proposalId} = req.params;
        const { startDate } = req.body;
        await contractController.updateContract({
            proposalId,
            startDate, 
        });
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});


router.delete('/poposal/:proposalId', async (req, res) => {
    try {
        const { proposalId} = req.params;
        await contractController.deleteContract({
            proposalId,
        });
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

export default router;