const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Beer = new Schema({

  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  packages: {
    type: Array,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },

  imgUrl: {
    type:String,
    required: true
  }
  ,

  alcVol: {
    type: Number,
    required:true
  },

  ownerId: {
    type: String,
    required: true
  }

})

module.exports = mongoose.model('Beer', Beer)