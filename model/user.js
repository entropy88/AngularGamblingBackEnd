const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({

  email: {
    type: String,
    required: true
  },
  password:{
      type: String,
      required: true
  },
  chapterSave: {
    type: String,
    default:"0"
  }
})

module.exports = mongoose.model('User', User)