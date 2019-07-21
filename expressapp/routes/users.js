var express = require('express');
var router = express.Router();
var Lola = require('../models/elite');

// var passport = require('passport');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/alist', function (req, res, next) {
  addToDB(req, res);
  console.log(req.body);
});

 
async function addToDB(req, res) {

  var list = new Lola({
    fullname: req.body.fullname,
    email: req.body.email,
    mobile: req.body.mobile,
    city: req.body.city,
    creation_dt: Date.now()
  });
  
  try {
    doc = await list.save();
    return res.status(201).json(doc);
    
  }
  
  catch (err) {
    return res.status(501).json(err);
  }
}

// router.get('/details', function (req, res, next) {
//   return res.status(201).json(req.details)
// });

module.exports = router;
