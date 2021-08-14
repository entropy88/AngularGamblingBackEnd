const express = require('express');
const app = express();
const counterRoute = express.Router();


let Download = require('../model/counter');

counterRoute.route('/get-counter').get((req, res) => {
    Download.find({}, function (err, counter) {
      if (err){
          console.log(err)
        return next(err);
      }
     
      res.json(counter[0].downloads)
  });
  
   });


  counterRoute.route('/update-counter').put((req, res) => {
    Download.findOneAndUpdate({}, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
     
        } else {
          res.json(data)
          console.log('counter successfully updated!')
        }
      })
    })
   



module.exports = counterRoute;