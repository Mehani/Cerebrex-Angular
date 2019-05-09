const express = require('express');
const app = express();
const userRoutes = express.Router();

// Defined store route
userRoutes.route('/login').post(function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(user => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});



module.exports = userRoutes;