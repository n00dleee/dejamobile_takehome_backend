var mongoose = require("mongoose");
var request = require("request");
var User = mongoose.model("User");
const jwt = require('jsonwebtoken');
var Config = require('./../../config');

module.exports = {
    checkUserCredentials: function (user) {
        console.log("Checking user's credentials ...");
        return new Promise(function (resolve, reject) {
            var userToCheck = new User(user);
            console.log("Trying to user's credentials in database...");

            User.find({ userName: userToCheck.userName }).exec(function (err, body) {

                var retrievedUser = body.find(User => User.password == userToCheck.password)
                if (retrievedUser) {
                    console.log("User's credentials verified !");
                    resolve(retrievedUser);
                }
                else {
                    console.log("User's credentials invalid");
                    reject("not found");
                }
            })
        });
    },
    checkToken: function (req, res, next) {
        console.log("Headers to be checked : ");
        console.log(req.headers);
        var token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

        if (token) {
            console.log("Token to check : ");
            console.log(token);

            if (token.startsWith('Bearer ')) {
                // Remove 'Bearer' from string
                token = token.slice(7, token.length);
                console.log("Sliced token ");
                console.log(token);
            }

            jwt.verify(token, Config.secret, (err, decoded) => {
                if (err) {
                    console.log("Token is not valid :(");
                    console.log(err);
                    return res.status(401).json({
                        success: false,
                        message: err.message
                    });
                } else {
                    console.log("Token is valid :)");
                    req.decoded = decoded;
                    next();
                }
            });
        }
        else {
            return res.status(401).json({
                success: false,
                message: 'Auth token is not supplied'
            });
        }
    }
}