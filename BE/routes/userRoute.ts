// import express from 'express';
// import UserController from '../controllers/userController';

// const router = express.Router();

// router.post('/new_user', async (req, res) => {
//   try {
//     const { firstName, lastName, phoneNumber, email, role } = req.body;
//     await UserController.createDraft({
//       firstName,
//       lastName,
//       phoneNumber,
//       email,
//       role,
//     });
//     res.status(201).send();
//   } catch (error) {
//     console.error(error);
//     res.status(500).send();
//   }
// });

// router.post('/new_user/confirm-user/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await UserController.confirmEmail({
//       id,
//     });
//     res.status(201).send();
//   } catch (error) {
//     console.error(error);
//     res.status(500).send();
//   }
// });

// router.post('/password/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { password, confirmPassword } = req.body;
//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: 'Passwords do not match' });
//     }
//     await UserController.confirmPassword({
//       id,
//       password,
//     });
//     res.status(201).send();
//   } catch (error) {
//     console.error(error);
//     res.status(500).send();
//   }
// });

// router.post('/role/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { role } = req.body;
//     if (role === 'Parent') {
//       await UserController.userRole({ id, role });
//       res.redirect('/parent');
//     } else if (role === 'Sitter') {
//       await UserController.userRole({ id, role });
//       res.redirect('/sitter');
//     }
//     res.status(201).send();
//   } catch (error) {
//     console.error(error);
//     res.status(500).send;
//   }
// });

// export { router as default };

import express from 'express';

const router = express.Router();

export { router as default };
