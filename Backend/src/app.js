const express = require('express');
const morgan = require('morgan');//used to print in console petitions recieved
const mongoose = require('mongoose');
const cors = require('cors');//used to traspass cors policy

const app = express();
mongoose.connect('mongodb://localhost/URLShortener').then(
  db=>console.log("db connected")
).catch(
  err => console.log("error")
)
// Import Routes
const index = require('./routes/index');
const users = require('./routes/users')
// Settings
app.set('port', process.env.PORT || 3000)

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.use('/urls', index);
app.use('/users', users)
// Starts server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
})