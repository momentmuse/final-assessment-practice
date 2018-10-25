const mongoose = require('mongoose');
// Connect to your mongoDB database (defaults to admin if there is no path)
mongoose.connect('mongodb://localhost/practice');
// Import the server setup
const app = require('./app');
const port = 3000;

const dbConn = mongoose.connection;
dbConn.on(
  'error',
  console.error.bind(console, 'Connection error to mongoose!')
);
dbConn.once('open', () => {
  console.log('🦆 We are connected to mongoose! 🐥');
});

app.listen(port, err => {
  if (err) return console.log('Oh no!', err);
  console.log(`🚀 Express server is listening to port ${port}!`);
});
