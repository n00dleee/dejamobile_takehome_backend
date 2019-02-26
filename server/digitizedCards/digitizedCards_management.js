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
            console.log("JSON parsed into this card info :");
            console.log(card);
            console.log("About to ask CARD ISSUER to generate a digitized card...");

            //TODO dispatch visa/mastercard/other mocks depending on the PAN
            VisaMockup.getDigitizedCard(card).then((result) => {
                console.log("Digitized card succesfully generated :");
                console.log(result);
                resolve(result);
            }).catch((err) => {
                console.log("Error while generating digitized card : ");
                console.log(err);
                reject(err);
            })
        });
    },
}