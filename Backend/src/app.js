const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
mongoose.connect('mongodb://localhost/URLShortener').then(
  db=>console.log("db connected")
).catch(
  err => console.log("error")
)
// Import Routes
const index = require('./routes/index');
// Settings
app.set('port', process.env.PORT || 3000)
// Middleware
app.use(morgan('dev'));


// Routes
app.use(bodyParser.json());
app.use('/', index);

// Starts server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
})