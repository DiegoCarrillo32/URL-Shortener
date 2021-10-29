const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const urlSchema = new Schema({

    url:String,
    short: String,
    visits: Number,
    
});

module.exports = mongoose.model( "urls" , urlSchema );
