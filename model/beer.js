const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Beer = new Schema({

  title: {
    type: String,
    required: true
  },
  type:{
      type: String,
      required: true
  },

})

module.exports = mongoose.model('Beer', Beer)