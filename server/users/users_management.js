var mongoose = require("mongoose");
var request = require("request");
var User = mongoose.model("User");

module.exports = {
    createUser: function (user) {
        return new Promise(function (resolve, reject) {
            var newUser = new User(user);
            newUser.save(function (err, result) {
                if (result) {
                    resolve(result)
                } else if (err) {
                    reject(err)
                }
            })
        })
    },
    getUserFromDataBase: function (userName, password) {
        return new Promise(function (resolve, reject) {
            console.log("Searching for user in database : " + userName);
            User.findOne({ username: userName, password: password }, function (err, doc) {
                if (err) {
                    console.log("User not found");
                    reject(err);
                }
                if (doc) {
                    console.log("User found !");
                    resolve(doc);
                }
            });
        })
    },
    authenticate: function (userName, password) {
        getUserFromDataBase(userName, password).then((result) => {
            result.userName
        }).catch((err) => {

        });
    },
    checkUserCreationRequest: function (user) {
        return new Promise(function (resolve, reject) {
            if (user != undefined) {
                if (user.userName.length > 0 && user.password.length > 7) {
                    resolve();
                }
                else
                    reject("Username must be at least 1 char and password at least 8 char");
            }
            reject("User undifined");
        })
    }
}