import { User } from '../models/user.js';

class AuthenticationService {
  async signup(req, res, next) {
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
        res.send({ user: newUser.id });
      });
    });
  }

  login(req, res, next) {
    res.send({ loggedIn: 'true' });
  }

  currentUser(req, res, next) {
    res.send({ userId: '12345' });
  }
}

export const AuthService = new AuthenticationService();
