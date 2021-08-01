const express = require('express');
const app = express();
const feedbackRoute = express.Router();


let Feedback = require('../model/feedback');


feedbackRoute.route('/add-feedback').post((req, res, next) => {
 Feedback.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

//https://stackoverflow.com/questions/29852208/best-practice-for-structuring-express-routes-that-handle-mongodb-queries
feedbackRoute.route('/get-feedback').get((req, res) => {
  Feedback.find({}, function (err, feedback) {
    if (err)
      return next(err);
    res.json(feedback)
});

 });


//upadte feedback
feedbackRoute.route('/update-feedback/:id').put((req, res, next) => {
 Feedback.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('feedback successfully updated!')
    }
  })
})

//delete
feedbackRoute.route('/delete-feedback/:id').get((req,res,next)=>{
  Feedback.findByIdAndDelete(req.params.id,(error)=>{
    if (error){
      console.log(error);
      return next(error)
    } else {
 
      return res.send("Removed");
    }
  })
})




module.exports = feedbackRoute;