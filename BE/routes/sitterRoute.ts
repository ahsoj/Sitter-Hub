import express from 'express';
import type { Request, Response } from 'express';
import SitterController, {
  runMiddleware,
  uploadMiddleware,
} from '../controllers/sitterController';
import { handleUpload } from '../utils/cloudinary';

const router = express.Router();
const sitterController = new SitterController();

router.post('/profile/upload', async (req: Request, res: Response, next) => {
  try {
    console.log(req.body);
    console.log(req.files);
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

router.post('/:id/profile', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      gender,
      birthDate,
      cityId,
      educationBackground,
      certificate,
      profilePic,
    } = req.body;
    const isVerifyed = false;
    await sitterController.createSitter({
      id,
      gender,
      birthDate,
      cityId,
      educationBackground,
      certificate,
      isVerifyed,
      profilePic,
    });
    res.status(201).send();
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});
router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      gender,
      birthDate,
      cityId,
      educationBackground,
      certificate,
      profilePic,
    } = req.body;

    const updatedSitter = await sitterController.updateSitter({
      id,
      gender,
      birthDate,
      cityId,
      educationBackground,
      certificate,
      profilePic,
    });
    res.status(201).send(updatedSitter);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error profile did not updated');
  }
});

export { router as default };
