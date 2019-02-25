var mongoose = require("mongoose");
var request = require("request");
var User = mongoose.model("User");

module.exports = {
    checkUserCredentials: function (user) {
        console.log("Checking user's credentials ...");
        return new Promise(function (resolve, reject) {
            var userToCheck = new User(user);
            console.log("Finding user's credentials in database...");

            User.find({ userName: userToCheck.userName }).exec(function (err, body) {
                console.log("Username found, checking if password matches...");
                console.log("Body ");
                console.log(body);


                console.log("user to check")
                console.log(userToCheck);

                body.forEach(element => {
                    if (element.password == userToCheck.password) {
                        //OK !
                        console.log("User credentials have been successfully checked");
                        resolve(body);
                    }
                });

                //if we reach this code, user has not been found
                console.log("User credentials invalid or user does not exists in database");
                reject(err);
            })
        })
    },
}