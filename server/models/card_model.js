'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    ownerName: {
        type: String,
        default: 'Please specify a card holder name'
    },
    expirationDate: {
        type: String,
        default: 'Please specify an expiration date'
    },
    cardNumber: {
        type: String,
        default: 'Please specify a card number'
    },
    crypto: {
        type: String,
        default: 'Please specify a crypto'
    },
})

module.exports = mongoose.model('Card', cardSchema);

var cardNumberFormat = {
    cardNumber: "",
    majorIndustryIdentifier: "", //first digit 
    issuerIdentificationNumber: "", //6 first
    accountNumber: "", //remove 6 first digits and last one
    checksum: "", //last digit
    parseCardNumber: function (cardNum) {
        console.log("About to parse cardnumber...");
        console.log("original card number : " + cardNum);
        this.cardNumber = cardNum;
        this.majorIndustryIdentifier = cardNum.substring(0, 1);
        this.issuerIdentificationNumber = cardNum.substring(0, 6);
        this.accountNumber = cardNum.substring(7, cardNum.length - 2);
        this.checksum = cardNum.substring(cardNum.length - 2, cardNum.length - 1);
        console.log("Card number succesffully parsed !");
    },
    getFullCardNumber: function () {
        return this.issuerIdentificationNumber + this.accountNumber + this.checksum;
    }
}
module.exports = cardNumberFormat;