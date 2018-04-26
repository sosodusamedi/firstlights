const express = require('express');
const apiRouter = require('./api');
const config = require('./config');
const serverRender = require('./serverRender');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const User = require('./model/User');

// Init App
const server = express();

// Connect to Database
const url = config.MONGOLAB_URI;

mongoose.connect(url, (err, db) => {
  if (err) {
    console.info('Unable to connect to the mongoDB server.', err);
  } else {
    console.info('Connected to mongoDB, db:', db);
  }
});

// Set the View Engine
server.set('view engine', 'ejs');


// Home Route (with ejs)
server.get(['/', '/users/:userId'], (req, res) => {
  res.render('index')
    .catch(console.error);
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

// API Middleware
server.use('/api', apiRouter);

// Express Middleware for static assets
server.use(express.static('public'));

// Start Server
server.listen(config.port, config.host, () =>
  console.info(`Express listening on port ${config.port}...`));
