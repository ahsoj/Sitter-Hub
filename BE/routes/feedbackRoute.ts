import express from 'express';

import FeedBackContoller from '../controllers/feedbackController';

const router = express.Router();
const feedBackContoller = new FeedBackContoller();
router.post('/new_feedback/:sitterId', async (req, res) => {
  try {
    const { sitterId } = req.params;
    const { rating, comment } = req.body;
   const feedback = await feedBackContoller.createFeedBack({
      sitterId,
      rating,
      comment
    });
    res.status(201).send(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).send("feedback did not created!");
  }
});

// router.put('/update_feedback/:proposalId', async (req, res) => {
//   try {
//     const { proposalId } = req.params;
//     const { startDate } = req.body;
//     const contract = await feedBackContoller.updateContract({
//       proposalId,
//       startDate,
//     });
//     res.status(201).send(contract);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Contract date did not updated");
//   }
// });


//get feedback by proposal
router.get('/contract/:sitterId', async (req, res) => {
  try {
    const { sitterId } = req.params;
    const contract = await feedBackContoller.getAllFeedBackBySitterId({
        sitterId,
    });
    res.status(201).send(contract);
  } catch(error) {
    console.error(error);
    res.status(500).send("Error geting Contract on these proposal");
  }
});

//delete feedback by the feedback id
router.delete('/del_feedback/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const feedback =  await feedBackContoller.deleteFeedBackById(
        id,
      );
      res.status(201).send(feedback);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error deleting feedback");
    }
  });



export { router as default };
