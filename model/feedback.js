const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Feedback = new Schema({

  email: {
    type: String,
    required: true
  },
  text:{
      type: String,
      required: true
  },

})

module.exports = mongoose.model('Feedback', Feedback)