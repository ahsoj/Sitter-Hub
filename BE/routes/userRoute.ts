import express from 'express';
import UserController from '../controllers/userController';

const router = express.Router();
const userController = new UserController();

router.post('/new_user', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            phoneNumber,
            email,
        } = req.body;
        await userController.createDraft({
            firstName,
            lastName,
            phoneNumber,
            email,
        });
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

router.post('/new_user/confirm-user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await userController.confirmEmail({
            id
        });
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

router.post('/password/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { password, confirmPassword} = req.body;
        if (password!== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
          }
        await userController.confirmPassword({
            id, password
        });
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

router.post('/role/:id', async (req, res) =>{
    try {
        const { id } = req.params;
        const { role } = req.body;
        if (role === 'Parent'){
            await userController.userRole({id, role});
            res.redirect('/parent');
        } else if(role === 'Sitter') {
            await userController.userRole( {id, role });
            res.redirect('/sitter');
        }
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send
    }
});

export default router;