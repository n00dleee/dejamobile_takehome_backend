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
    cardNumber: string, 
    majorIndustryIdentifier: string, //first digit 
    issuerIdentificationNumber: string, //6 first
    accountNumber: string, //remove 6 first digits and last one
    checksum: string, //last digit
    parseCardNumber: function(cardNum){
        console.log("About to parse cardnumber...");
        console.log("original card number : " + cardNum);
        this.cardNumber = cardNumber;
        this.majorIndustryIdentifier = cardNum.substring(0, 1);
        this.issuerIdentificationNumber = cardNum.substring(0,5);
        this.accountNumber = cardNum.substring(6, cardNum.length - 2);
        this.checksum = cardNum.substring(cardNum.length - 2, cardNum.length - 1);
        console.log("Card number succesffully parsed !");
    },
    getFullCardNumber: function(){
        return this.majorIndustryIdentifier + this.accountNumber + this.checksum;
    }
}
module.exports = cardNumberFormat;