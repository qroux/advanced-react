import express from 'express';
import passport from 'passport';
import '../services/passport.js';
import { authService } from '../services/authService.js';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

//Passport strategies
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogs = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) return res.send(err);
    if (!req.body.email || !req.body.password) {
      return res.status(422).send({ error: 'Missing credentials' });
    }
    if (!user) return res.status(404).send({ error: 'Wrong credentials' });

    req.user = user;
    next();
  })(req, res, next);
};

const router = express.Router();

router.post('/signup', authService.signup);
router.post('/login', requireLogs, authService.login);
router.get('/currentuser', requireAuth, authService.currentUser);

export { router as AuthController };
