import passport from 'passport';
import passportJwt from 'passport-jwt';
import { User } from '../models/user.js';
import { config } from '../config/config.js';
import LocalStrategy from 'passport-local';

const { Strategy, ExtractJwt } = passportJwt;

// local strategy (with email and password instead of jwt)
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) return done(err, false);
    if (!user) return done(null, false);

    //compare passwords
    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err, false);
      if (!isMatch) return done(err, false);

      return done(null, user);
    });
  });
});

// setup options
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secret,
};

// Create strategy
const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) done(err, false);

    user ? done(null, user) : done(null, false);
  });
});

// implements strategy in Passport
passport.use(jwtLogin);
passport.use(localLogin);
