import dotenv from 'dotenv';

dotenv.config();

export const config = {
  secret: process.env.BCRYPT_SECRET,
};
