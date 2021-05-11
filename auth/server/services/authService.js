import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

class AuthService {
  signup(req, res, next) {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(422).send({ error: 'Missing email or password' });

    User.findOne({ email }, (err, user) => {
      if (err) next(err);

      if (user) {
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
    const token = jwt.sign({ sub: req.user.id }, config.secret);
    res.send({ token });
  }

  currentUser(req, res, next) {
    const token = jwt.sign('test@test.com', config.secret);
    res.send(token);
  }
}

export const authService = new AuthService();
