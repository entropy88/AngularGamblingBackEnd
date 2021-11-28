const express = require('express');
const app = express();
const beerRoute = express.Router();


let Beer = require('../model/beer');


beerRoute.route('/add-beer').post((req, res, next) => {
 Beer.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

//https://stackoverflow.com/questions/29852208/best-practice-for-structuring-express-routes-that-handle-mongodb-queries
beerRoute.route('/get-beers').get((req, res) => {
  Beer.find({}, function (err, beers) {
    if (err)
      return next(err);
    res.json(beers)
});

 });

 //get singular
 beerRoute.route('/get-beer/:id').get((req, res, next) => {
  Beer.findOne({"_id":req.params.id}, function (err, beer) {
    if (err)
      return next(err);
    res.json(beer)
});

 });


//upadte feedback
// feedbackRoute.route('/update-feedback/:id').put((req, res, next) => {
//  Feedback.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('feedback successfully updated!')
//     }
//   })
// })

//delete
beerRoute.route('/delete-beer/:id').get((req,res,next)=>{
  Beer.findByIdAndDelete(req.params.id,(error)=>{
    if (error){
      console.log(error);
      return next(error)
    } else { 
      return res.send("Removed");
    }
  })
})




module.exports = beerRoute;