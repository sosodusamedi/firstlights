const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const User = require('./model/User');

// Init App
const server = express();
const env = process.env;

// Connect to Database
const url = env.MONGOLAB_URI;
//const url ='mongodb://sonny:DBTecnoom1@ds213759.mlab.com:13759/users';

mongoose.connect(url, (err, db) => {
  if (err) {
    console.log('Unable to connect to the mongoDB server.', err);
  } else {
    console.log('Connected to mongoDB, db:', db);
  }
});

// Home Route
server.get('/', (req, res) => {
  res.send('Hello Wolrd');
});

// GET Users
server.get('/api/users', (req, res) => {
  User.find({}).then(eachOne => {
    res.json(eachOne);
  });
});

// POST User
server.post('/api/users', (req, res) => {
  User.create({
    name: req.body.name,
    tel: req.body.tel
  }).then(user => {
    res.json(user);
  });
});



server.use(express.static('public'));

// Start Server
server.listen(env.PORT || 8080, () =>
console.log('Express listening on port 8080...'));
