import express from 'express';
import FeedBackContoller from '../controllers/feedbackController';

const router = express.Router();
const feedBackContoller = new FeedBackContoller();
router.post('/feedback', async (req, res) => {
    try {
        const { rating, comment } = req.body;
        await feedBackContoller.createFeedBack({
            rating,
            comment, 
        });
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});


export default router;
