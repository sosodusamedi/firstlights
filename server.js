const express = require('express');
const apiRouter = require('./api');
import { MONGOLAB_URI, port, host } from './config';
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
// const parseurl = require('parseurl');
const bodyParser = require('body-parser');
// const expressValidator = require('express-validator');


// Init App
const server = express();
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());

// Connect to Database
const uri = MONGOLAB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console,
  'MongoDB connection error:'
));

db.once('open', () => {
  console.info('Connected to DB');
});


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
