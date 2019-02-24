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

    checkUserCreationRequest: function (user) {
        return new Promise(function (resolve, reject) {
            //TODO
        })
    }
}