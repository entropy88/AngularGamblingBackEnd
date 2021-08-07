const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
  username:{
    type: String,
    required:true
  },
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
  }, 
  registrationDate: {
    type: String,
    required: true
    },
    profilePicture:{
      type:String
    }
})

module.exports = mongoose.model('User', User)