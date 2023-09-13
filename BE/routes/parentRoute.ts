import express from 'express';
import ParentController from '../controllers/parentController';

const router = express.Router();
const parentController = new ParentController();

router.post('/:id/profile', async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            gender,
            cityId,
            profilePic
        } = req.body;
        await parentController.createParent({
            id,
            gender, 
            cityId,
            profilePic
        });
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

export default router;