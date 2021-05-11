import express from 'express';
import { signup, login, currentUser } from '../services/authentication.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/currentuser', currentUser);

export { router as AuthController };
