const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Beer = new Schema({

  title: {
    type: String,
    required: true
  },
  ownerId: {
    type: String,
    required: true,
    default: 'admin'
  },
  type: {
    type: String,
    required: true
  },

  rating: {
    type: Array,
    required: true
  },

  imgUrl: {
    type:String,
    required: true
  },

  alcVol: {
    type: Number,
    required:true
  },

  country: {
    type:String,
    required: true
  }

})

module.exports = mongoose.model('Beer', Beer)