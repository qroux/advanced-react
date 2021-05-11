import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

//Define model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//On Save hook to encrypt password
userSchema.pre('save', function (next) {
  // access the new User instance
  const user = this;

  //generate salt then run callback
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    console.log('salt =', salt);

    //hash the password using the salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      console.log('ici 3');
      if (err) return next(err);
      console.log('ici');

      //overwrite plaintext password
      user.password = hash;

      //continue to the real save step
      next();
    });
  });
});

//Create the model class
const User = mongoose.model('user', userSchema);

//export the model
export { User };
