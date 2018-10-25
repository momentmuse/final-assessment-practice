const express = require('express');
const app = express();
const router = require('./router');

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
app.use(router);

// Export the app configuration!
module.exports = app;
// Listen to the server in start.js, after you connect to your database
