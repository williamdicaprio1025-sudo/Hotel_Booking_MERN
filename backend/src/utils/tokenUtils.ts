import * as jwt from 'jsonwebtoken';
import { Secret } from 'jsonwebtoken';

export const createJWT = (payload: { userId: string }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string as Secret, {
    expiresIn: Number(process.env.JWT_EXPIRES_IN) || 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};

export const verifyJWT = (token: string) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

  return decoded;
};
