import express from 'express';
import Conversation from '../controllers/conversationController';

const router = express.Router();

router.get('/recent_chat_peoples/:conversationId', async (req, res, next) => {
  try {
    const { conversationId } = req.params;
    if (!conversationId) {
      return res.status(404).send('No Chat Found');
    }
    const people = await Conversation.getPeoples(conversationId);
    res.status(200).json(people);
  } catch (error) {
    next(error);
  }
});

export { router as default };
