import express, { Request, Response } from 'express';
import { v4 as uuid4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { generateTokens, hashTokens } from '../utils/jwt';
import AuthServices from '../controllers/authController';
import UserController from '../controllers/userController';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import sendgrid from '@sendgrid/mail';
import { prisma } from '../utils/prisma';
import path from 'path';
import ejs from 'ejs';
import ObjectID from 'bson-objectid';

const router = express.Router();

const {
  JWT_REFRESH_SECRET,
  NODE_ENV,
  SENDGRID_API_KEY,
  SENDER_EMAIL,
  SENDER_NAME,
} = process.env;

sendgrid.setApiKey(SENDGRID_API_KEY as string);

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post(
  '/pre_register',
  jsonParser,
  async (req: Request, res: Response, next) => {
    try {
      const { firstName, lastName, phoneNumber, email, role } = req.body;
      if (!(firstName || lastName || phoneNumber || email || role)) {
        return res.status(400).send('You must provide all required fields');
      }
      console.log(firstName, lastName, phoneNumber, email, role);
      const existsingDraft = await UserController.findUniqueDraft(email);
      if (existsingDraft) {
        res.status(400).send('This Email is already in use.');
        return;
      }
      const draft = await UserController.createDraft({
        firstName,
        lastName,
        phoneNumber,
        email,
        role,
      });

      const link = `${
        NODE_ENV === 'production'
          ? 'https://sitterhub.vercel.app'
          : 'http://192.168.1.100:3000'
      }/new/${draft.id}`;

      ejs
        .renderFile(path.join(__dirname, 'email_templates/verify_email.ejs'), {
          fullname: `${draft.firstName} ${draft.lastName}`,
          confirmButton: link,
          linkreplaceBUtton: link,
        })
        .then((result: any) => {
          const msg = {
            to: draft.email, // Change to your recipient
            from: {
              email: SENDER_EMAIL as string,
              name: SENDER_NAME as string,
            }, // Change to your verified sender
            subject: '[Important] Email Verification',
            html: result,
          };
          sendgrid
            .send(msg)
            .then((response: any) => {
              console.log(response[0].statusCode);
              // console.log(response[0].headers);
            })
            .catch((error: any) => {
              console.error(error);
            });
        })
        .catch((err: any) => {
          res.status(400).json({
            message: 'Error Rendering emailTemplate',
            error: err,
          });
        });
      res.status(201).send('Account Created Successfully.');
    } catch (err) {
      console.log(err);
      res.status(400).send('Bad request');
      next(err);
    }
  }
);

router.get('/confirm_email/:draftId', async (req, res, next) => {
  try {
    const { draftId } = req.params;
    if (!ObjectID.isValid(draftId)) {
      return res.status(400).send('Bad Request.');
    }
    const user = await UserController.confirmEmail({
      id: draftId as string,
    });
    res.status(200).send(user.id);
  } catch (error) {
    res.status(400).send('Error Occured.');
    return next(error);
  }
});

router.post('/confirm_password', async (req, res, next) => {
  try {
    const { userId, password, confirmPassword } = req.body;
    if (!(userId || password))
      return res.status(400).send('Please Fill required fields.');
    console.log(userId, password, confirmPassword);
    const user = await UserController.confirmPassword({
      id: userId,
      password,
    });
    res.status(201).json(user.id);
  } catch (error) {
    res.status(400).send('Error Occured.');
    return next(error);
  }
});

// router.get('/resetnew/token/:token', async (req, res, next) => {
//   try {
//     const { token } = req.params;
//     res.render('<strong>Correct</strong>');
//   } catch (error) {
//     next(error);
//   }
// });

router.post('/login', jsonParser, async (req, res: Response, next) => {
  try {
    const { email, password: passwordHash } = req.body;

    if (!email || !passwordHash) {
      res.status(400).send('You must provide a valid email or password');
      return;
    }
    const existingUser = await UserController.findUniqueUser(email);

    if (!existingUser) {
      res.status(403).send('Invalid login credentials.');
      return;
    }

    const validPassword = await bcrypt.compare(
      passwordHash,
      existingUser.passwordHash
    );
    if (!validPassword) {
      res.status(403).send(`Invalid login credentials.`);
      return;
    }

    const jti = uuid4();
    const { accessToken, refreshToken } = generateTokens(existingUser, jti);
    // const current_token = await prisma.refreshToken.findUnique({ where: { id: existingUser.id } });
    await AuthServices.addRefreshTokenWhiteList({
      refreshToken,
      userId: existingUser.id,
    });
    return res
      .cookie('access_token', accessToken, {
        httpOnly: true,
      })
      .json({
        accessToken,
        refreshToken,
        id: existingUser.id,
      });
  } catch (err) {
    next(err);
  }
});

// interface JwtPayload extends jwt.JwtPayload {
//   jti: string;
//   userId: string;
// }

// router.post('/reset_password/', async (req, res, next) => {
//   try {
//     const { email } = req.body;
//     if (!email)
//       return res.status(400).send('Invalid request please check again.');
//     if (!(await UsersServices.findUserByEmail(email)))
//       return res.status(404).send("We Can't find an account with this email");

//     const reset_uuid = await prisma.resetUUID.create({
//       data: { uuid: uuid4() },
//     });

//     const link = `http://127.0.0.1:3000/signin/reset/set_new/?uid=${reset_uuid.uuid}/?redirect=popular`;

//     ejs
//       .renderFile(path.join(__dirname, 'email_templates/verify_email.ejs'), {
//         confirmButton: link,
//         linkreplaceBUtton: link,
//       })
//       .then((result: any) => {
//         const msg = {
//           to: email, // Change to your recipient
//           from: 'mkeyasuc@gmail.com', // Change to your verified sender
//           subject: 'Sending with SendGrid is Fun',
//           // text: 'and easy to do anywhere, even with Node.js',
//           html: result,
//         };
//         sendgrid
//           .send(msg)
//           .then((response: { statusCode: any }[]) => {
//             console.log(response[0].statusCode);
//             // console.log(response[0].headers);
//           })
//           .catch((error: any) => {
//             console.error(error);
//           });
//       })
//       .catch((err: any) => {
//         res.status(400).json({
//           message: 'Error Rendering emailTemplate',
//           error: err,
//         });
//       });

//     res.status(200).json(reset_uuid.id);
//   } catch (error) {
//     next(error);
//   }
// });

// router.post('/refreshToken', urlencodedParser, async (req, res, next) => {
//   try {
//     const { refreshToken } = req.body;
//     if (!refreshToken) {
//       res.status(400);
//       return Promise.reject('Missing refresh token.');
//     }
//     const { jti: Jti, userId } = jwt.verify(
//       refreshToken,
//       JWT_REFRESH_SECRET as string
//     ) as JwtPayload;
//     const savedRefreshToken = await AuthServices.findRefreshTokenById(Jti);

//     if (!savedRefreshToken || savedRefreshToken.revoked) {
//       res.status(401);
//       throw new Error('Unauthorized.');
//     }
//     const hashedToken = hashTokens(refreshToken);
//     if (hashedToken !== savedRefreshToken.hashedToken) {
//       res.status(401);
//       throw new Error('Unauthorized.');
//     }
//     const user = await UserController.findUniqueUser({ userId });
//     if (!user) {
//       res.status(401);
//       throw new Error('Unauthorized.');
//     }
//     await AuthServices.deleteRefreshToken(savedRefreshToken.id);
//     const jti = uuid4();
//     const { accessToken, refreshToken: newRefreshToken } = generateTokens(
//       user,
//       jti
//     );
//     await AuthServices.addRefreshTokenWhiteList({
//       refreshToken: newRefreshToken,
//       userId: user.id,
//     });
//     res.json({
//       accessToken,
//       refreshToken: newRefreshToken,
//     });
//   } catch (err) {
//     next(err);
//   }
// });

// router.post(
//   '/revokeRefreshTokens',
//   async (req: Request, res: Response, next) => {
//     try {
//       const { userId } = req.body;
//       await AuthServices.revokedTokens(userId);
//       res.json({ message: `Tokens revoked for user with id #${userId}` });
//     } catch (err) {
//       next(err);
//     }
//   }
// );

export { router as default };
