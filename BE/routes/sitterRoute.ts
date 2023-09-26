import express from 'express';
import SitterController from '../controllers/sitterController';

const router = express.Router();
const sitterController = new SitterController();

router.post('/profile/:id', async (req, res) => {
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
       const sitter = await sitterController.createSitter({
            id,
            gender, 
            birthDate,
            cityId,
            educationBackground, 
            certificate, 
            isVerifyed,
            profilePic
        });
        res.status(201).send(sitter);
    } catch (error) {
        console.error(error);
        res.status(500).send("Faild to create user");
    }
});
router.put('/update/:id', async(req, res) => {
    try {
    const { id } = req.params;
    const { gender, birthDate, cityId, educationBackground, certificate, profilePic} = req.body;
  
    const updatedSitter = await sitterController.updateSitter({
      id, gender, birthDate, cityId, educationBackground, 
      certificate, profilePic,
    });
    res.status(201).send(updatedSitter);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error profile did not updated");
  }
  });

export {router as default};