import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

class AuthService {
  signup(req, res, next) {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(422).send({ error: 'Missing email or password' });

    User.findOne({ email }, (err, existingUser) => {
      if (err) next(err);

      if (existingUser) {
        return res
          .status(422)
          .send({ error: 'User already exists for that email' });
      }

      const newUser = new User({ email, password });
      newUser.save((err) => {
        if (err) next(err);

        const token = jwt.sign({ sub: newUser.id }, config.secret);
        res.send({ token });
      });
    });
  }

  login(req, res, next) {
    res.send({ loggedIn: 'true' });
  }

  currentUser(req, res, next) {
    console.log('SECRET =', config.secret);
    const token = jwt.sign('test@test.com', config.secret);
    res.send(token);
  }
}

export const authService = new AuthService();
