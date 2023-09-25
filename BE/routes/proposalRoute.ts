import express from 'express';
import ProposalController from '../controllers/proposalController';

const router = express.Router();
const proposalController = new ProposalController();

router.post('/add_proposal/:bookingId', async (req, res) => {
  try {
     const { bookingId } = req.params;
    const { sitterId, coverLetter } = req.body;
   const proposal = await proposalController.createProposal({
      sitterId,
      bookingId,
      coverLetter,
    });
    res.status(201).send(proposal);
  } catch (error) {
    console.error(error);
    res.status(500).send("Proposal did not created!");
  }
});

//update route
router.put('/update_poposal/:id', async (req, res) => {
  try {
    const {  id } = req.params;
    const { sitterId, coverLetter, bookingId } = req.body;
    const proposal = await proposalController.updateProposal({
      id,
      sitterId,
      bookingId,
      coverLetter,
    });
    res.status(201).send(proposal);
  } catch (error) {
    console.error(error);
    res.status(500).send("No such proposal to update!");
  }
});
router.get('/all_proposal/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const bookingId = id as string;
    const proposal = await proposalController.getAllProposalByBookingId({ bookigId: bookingId });
    res.status(201).send(proposal);
  } catch (error) {
    console.error(error);
    res.status(500).send("No proposals found!");
  }
});


export { router as default };
