'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var digitizedCardSchema = new Schema({
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
    }
})

module.exports = mongoose.model('DigitizedCard', digitizedCardSchema);