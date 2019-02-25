var mongoose = require("mongoose");
var request = require("request");
var DigitizedCard = mongoose.model("DigitizedCard");

module.exports = {
    createDigitizedCard: function (user) {
        return new Promise(function (resolve, reject) {
            var newDigitizedCard = new DigitizedCard(user);
            newDigitizedCard.save(function (err, result) {
                if (result) {
                    resolve(result)
                } else if (err) {
                    reject(err)
                }
            })
        })
    },
}