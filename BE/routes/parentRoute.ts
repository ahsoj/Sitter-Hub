import express from 'express';
import type { Request, Response } from 'express';
import { handleUpload } from '../utils/cloudinary';
import ParentController, {
  runMiddleware,
  uploadMiddleware,
} from '../controllers/parentController';

const router = express.Router();
const parentController = new ParentController();

router.post('/profile/p/upload', async (req: Request, res: Response, next) => {
  try {
    await runMiddleware(req, res, uploadMiddleware);
    const b64 = req.file && Buffer.from(req.file.buffer).toString('base64');
    let dataURI = `data:${req.file?.mimetype};base64,${b64}`;
    const cldRes = await handleUpload(dataURI);
    var fileUrl = cldRes.secure_url;
    console.log(fileUrl);
    res.status(200).json(fileUrl);
  } catch (err: any) {
    console.log('error', err);
    res.status(400).json({ message: err.message });
    next(err);
  }
});

router.post('/profile/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { gender, city, profilePic } = req.body;
    await parentController.createParent({
      id,
      gender,
      city,
      profilePic,
    });
    res.status(201).send();
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

//update parent profile
router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { gender, city, profilePic } = req.body;

    await parentController.updateParent({
      id,
      gender,
      city,
      profilePic,
    });
    res.status(201).send();
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

export { router as default };
