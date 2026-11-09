import jwt, { type SignOptions } from 'jsonwebtoken';

export default function generateToken(id: string): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET is not defined');

  const expiresIn = (process.env.JWT_EXPIRES_IN ?? '7d') as NonNullable<SignOptions['expiresIn']>;

  return jwt.sign({ id }, secret, { expiresIn });
}