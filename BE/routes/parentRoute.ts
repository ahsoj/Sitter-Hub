import express from 'express';
import ParentController from '../controllers/parentController';

const router = express.Router();
const parentController = new ParentController();

router.post('/profile/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { gender, cityId, profilePic } = req.body;
    await parentController.createParent({
      id,
      gender,
      cityId,
      profilePic,
    });
    res.status(201).send();
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

//update parent profile
router.put('/update/:id', async(req, res) => {
  try {
  const { id } = req.params;
  const { gender, cityId, profilePic} = req.body;

  await parentController.updateParent({
    id, gender, cityId, profilePic,
  });
  res.status(201).send();
} catch (error) {
  console.error(error);
  res.status(500).send();
}
});

export { router as default };
