const express = require('express');
const app = express();
const chapterRoute = express.Router();


let Chapter = require('../model/chapter');

chapterRoute.route('/get-chapter').get((req, res) => {
    Chapter.find({}, function (err, chapters) {
      if (err){
          console.log(err)
        return next(err);
      }
     
      res.json(chapters)
  });
  
   });

chapterRoute.route('/get-chapter/:chNumber').get((req, res) => {
    console.log(req.params.chNumber)
    Chapter.find({"chNumber":req.params.chNumber}, function (err, chapter) {
      if (err)
        return next(err);
      res.json(chapter[0])
  });
  })

module.exports = chapterRoute;