const createError = require('http-errors');
const express = require('express');
const app = express();
const downloadRoute = express.Router();



downloadRoute.get('/download', function(req, res) {
    res.download( './Play-the-game-Book.pdf');
  });


module.exports = downloadRoute;