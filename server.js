// call the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

//models
var User = require('./server/models/user_model');
var digitizedCard = require('./server/models/digitizedCard_model');

//mongo related
var mongoClient = require('mongodb').MongoClient;
// check https://mlab.com/signup/ for online hosting ?
var mongoUrl = "mongodb://localhost:27017/dejamobileDB";
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, { useNewUrlParser: true });


// configure app to use bodyParser()
// this will let us get the data from a POST
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
//our api routes
var usersRoutes = require('./server/users/users_routes');
var digitizedCardsRoutes = require('./server/digitizedCards/digitizedCards_routes');
var loginRoutes = require('./server/login/login_routes');
app.use('/users', usersRoutes);
app.use('/digitizedCards', digitizedCardsRoutes);
app.use('/login', loginRoutes);

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'Welcome to my API' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
//app.use('/api', router);

// SERVER RELATED
// =============================================================================
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Magic happens on port ' + port);
