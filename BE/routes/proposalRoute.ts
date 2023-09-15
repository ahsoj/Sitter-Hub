import express from 'express';
import ProposalController from '../controllers/proposalController';

const router = express.Router();
const proposalController = new ProposalController();

router.post('/poposal/:bookingId/:sitterId', async (req, res) => {
    try {
        const { bookingId, sitterId } = req.params;
        const { coverLetter } = req.body;
        await proposalController.createProposal({
            sitterId,
            bookingId,
            coverLetter, 
        });
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

//update route
router.put('/poposal/:bookingId/:sitterId', async (req, res) => {
    try {
        const { bookingId, sitterId } = req.params;
        const { coverLetter } = req.body;
        await proposalController.updateProposal({
            sitterId,
            bookingId,
            coverLetter, 
        });
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});
export default router;