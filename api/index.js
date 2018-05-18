const express = require('express');
const router = express.Router();
const parseurl = require('parseurl');
const bodyParser = require('body-parser');


// Hardcoded data from testData
// router.get('/users', (req, res) => {
//   res.send(data);
// });



// Data from the db

const User = require('../model/User');
router.get('/api/users', (req, res) => {
  User.find({}).then(eachOne => {
    res.json(eachOne);
  });
});

// POST User
router.post('/api/users', (req, res) => {
  User.create({
    name: req.body.name,
    tel: req.body.tel
  }).then(user => {
    res.json(user);
  });
});


// router.get('/users/:userId', (req, res) => {
//
// });



module.exports = router;
