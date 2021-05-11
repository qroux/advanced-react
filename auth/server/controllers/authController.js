import express from 'express';
import { AuthService } from '../services/authenticationService.js';

const router = express.Router();

router.post('/signup', AuthService.signup);
router.post('/login', AuthService.login);
router.get('/currentuser', AuthService.currentUser);

export { router as AuthController };
