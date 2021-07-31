const express = require('express');
const app = express();
const userRoute = express.Router();


let User = require('../model/user');


userRoute.route('/add-user').post((req, res, next) => {
  User.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

//get all users//this must return array length only
userRoute.route('/get-users').get((req, res) => {
  User.find({}, function (err, users) {
    if (err)
      return next(err);
    res.json(users.length)
});
})

//find user
userRoute.route('/get-user/:username').get((req, res) => {
  User.find({"username":req.params.username}, function (err, user) {
    if (err)
      return next(err);
    res.json(user[0])
});
})

//upadte user
userRoute.route('/update-user/:id').put((req, res, next) => {
  User.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('User successfully updated!')
    }
  })
})



module.exports = userRoute;