import express from 'express';
import { authService } from '../services/authService.js';

const router = express.Router();

router.post('/signup', authService.signup);
router.post('/login', authService.login);
router.get('/currentuser', authService.currentUser);

export { router as AuthController };
