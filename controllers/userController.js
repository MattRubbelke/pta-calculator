const db = require("../models");

// Defining methods for the UserController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: function(req, res) {
    db.User.findOne({user: req.body.user}, function(err, user) {
      if(user === null) {
         var error = "User not found"
         console.log(error);
      }
      else{
       user.comparePassword(req.body.password, function(err, isMatch){
         if(err){
           console.log("Password dont match");
         } else{
             console.log(user)
             res.json(user);
           }
       })
      }
    })
  },
  create: function(req, res) {
    console.log("Trying to create user...", req.body)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  logout: function(req, res){
    if (req.user){
        req.logout()
        req.send({ msg: "logging out"})
  }}
};
