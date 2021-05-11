import express from 'express';
import passport from 'passport';
import '../services/passport.js';
import { authService } from '../services/authService.js';

//Passport strategies
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogs = passport.authenticate('local', { session: false });

const router = express.Router();

router.post('/signup', authService.signup);
router.post('/login', requireLogs, authService.login);
router.get('/currentuser', requireAuth, authService.currentUser);

export { router as AuthController };
