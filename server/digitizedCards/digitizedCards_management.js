var mongoose = require("mongoose");
var request = require("request");
var DigitizedCard = mongoose.model("DigitizedCard");
var Card = mongoose.model("Card");

//mockup
var VisaMockup = require('./../Mocks/Visa/visa_mockup')

module.exports = {
    createDigitizedCard: function (c) {
        return new Promise(function (resolve, reject) {
            var card = new Card(c);

            //TODO dispatch visa/mastercard/other mocks depending on the PAN
            VisaMockup.getDigitizedCard(card).then((result) => {
                resolve(result);
            }).catch((err) => {
                console.log("Error while generating digitized card : ");
                console.log(err);
                reject(err);
            })
        });
    },
}