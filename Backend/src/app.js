const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

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
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.use('/', index);

// Starts server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
})