import express from 'express';

const App = express();
const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {
  console.log('App listening on port ', PORT);
});
