const express = require('express');
const app = express();
// const router = require('.router');
const port = 3000;

// enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Put JSON inside the req.body
app.use(express.json());

// Connect app to router
// app.use(router);

app.listen(port, err => {
  if (err) return console.log('Oh no!', err);
  console.log(`🚀 Express server is listening to port ${port}!`);
});

// Where should I listen to the server?
// Put it in the app start, after you connect to your database
