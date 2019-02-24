'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var digitizedCardSchema = new Schema({
    cardNumber: {
        type: String,
        required: 'Please specify a card number'
    },
    expirationDate: {
        type: String,
        required: 'Please specify an expiration date'
    },
    cardHolderName: {
        type: String,
        required: 'Please specify a card holder name'
    },
    crypto: {
        type: String,
        require: 'Please specify a crypto'
    }
})

module.exports = mongoose.model('DigitizedCard', digitizedCardSchema);