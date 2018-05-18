const express = require('express');
const apiRouter = require('./api');
import { MONGOLAB_URI, port, host } from './config';
const path = require('path');
const mongoose = require('mongoose');
// const parseurl = require('parseurl');
// const bodyParser = require('body-parser');
// const expressValidator = require('express-validator');


// Init App
const server = express();

// Connect to Database
const uri = MONGOLAB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console,
  'MongoDB connection error:'
));


// Set the View Engine
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// Home Route (with ejs)
server.get('/', (req, res) => {
  res.render('index');
});


// Put all API endpoints under '/api':
// API Middleware
server.use('/api', apiRouter);

// Express Middleware for serving React static files
server.use(express.static('public'));

// Start Server
server.listen(port, host, () =>
  console.info(`Express listening on port ${port}...`));
