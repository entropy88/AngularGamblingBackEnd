const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Chapter = new Schema({

  chNumber: {
    type: String,
    required: true
  },
  text:{
      type: String,
      required: true
  },
  choices:{
      type: Array,
      default: []
  }

})

module.exports = mongoose.model('Chapter', Chapter)