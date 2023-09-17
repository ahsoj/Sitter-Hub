import express from 'express';
import SitterController from '../controllers/sitterController';

const router = express.Router();
const sitterController = new SitterController();

router.post('/:id/profile', async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            gender, 
            birthDate,
            cityId,
            educationBackground, 
            certificate,
            profilePic
        } = req.body;
        const isVerifyed = false
        await sitterController.createSitter({
            id,
            gender, 
            birthDate,
            cityId,
            educationBackground, 
            certificate, 
            isVerifyed,
            profilePic
        });
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

export {router as default};