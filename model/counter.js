const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Download = new Schema({

 
  downloads:{
      type: String,
      required: true
  }

})

module.exports = mongoose.model('Download', Download)