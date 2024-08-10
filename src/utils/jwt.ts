import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret';

export const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1d' });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, SECRET_KEY);
};
