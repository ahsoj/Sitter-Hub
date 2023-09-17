import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const { JWT_ACCESS_SECRET } = process.env;

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: () => void
) {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      return res.status(401).send('Un-Authenticated Request.');
    }
    const token = authorization.split(' ')[1];
    const payload = jwt.verify(token, JWT_ACCESS_SECRET as string);
    req.body = payload;
  } catch (err: any) {
    res.status(401);
    if (err.name === 'TokenExpiredError') {
      throw new Error(err.name);
    }
  }
  return next();
}
