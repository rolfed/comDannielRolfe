// Server.js

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

// Configuration

// config files
var db = require('./config/db');


// set port
var port = process.env.PORT || 8000;

// connect mondodb
// mongoose.connect(db.url);

// get all data/stuff of the body (post) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api as JSON
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public' ));

// routes
require('./app/routes')(app); // configure our routes

// start app
// start our app http://localhost:8000
app.listen(port);

// shoutout to the user
console.log('App is running on port ' + port + 'To terminate session type Ctrl-C');

// expose app
exports = module.export = app;
