// call the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')


//models
var User = require('./server/models/user_model');
var digitizedCard = require('./server/models/digitizedCard_model');
var card = require('./server/models/card_model');

//jwt related
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
var LoginManagement = require('./server/login/login_management')

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

app.get('/', function (req, res) {
    res.status(200).json({ message: 'Welcome ! please use /users to create a user and /login to log in' });
});


//our api routes
var usersRoutes = require('./server/users/users_routes');
var digitizedCardsRoutes = require('./server/digitizedCards/digitizedCards_routes');
var loginRoutes = require('./server/login/login_routes');
app.use('/users', usersRoutes);
app.use('/digitizedCards', LoginManagement.checkToken, digitizedCardsRoutes);
app.use('/login', loginRoutes);


// SERVER RELATED
// =============================================================================
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Dejamobile backend running on port ' + port);
