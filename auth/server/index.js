import express from 'express';
import morgan from 'morgan';
import memoryServer from 'mongodb-memory-server';
import mongoose from 'mongoose';
import cors from 'cors';

import { User } from './models/user.js';
import { AuthController } from './controllers/authController.js';

const App = express();
const PORT = process.env.PORT || 3090;

//DB setup
const { MongoMemoryServer } = memoryServer;
const mongoServer = new MongoMemoryServer();

mongoose.Promise = Promise;
mongoServer.getUri().then((mongoUri) => {
  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };
  mongoose.connect(mongoUri, mongooseOpts);
  mongoose.connection.on('error', (e) => {
    if (e.message.code === 'ETIMEDOUT') {
      console.log(e);
      mongoose.connect(mongoUri, mongooseOpts);
    }
    console.log(e);
  });
  mongoose.connection.once('open', () => {
    console.log(`MongoDB successfully connected to ${mongoUri}`);
  });
});

//middlewares
App.use(morgan('combined'));
App.use(express.json({ type: '*/*' }));

//CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
App.use(cors(corsOptions));

//Controllers
App.use(AuthController);
App.get('*', (req, res) => {
  res.send('Page not found');
});

//Running server
App.listen(PORT, () => {
  console.log('App listening on port ', PORT);
});
