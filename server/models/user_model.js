'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {
        type: String,
        default: 'first name',
    },
    lastName: {
        type: String,
        default: 'last name'
    },
    phoneNumber: {
        type: String,
        default: 'Phone number'
    },
    address: {
        type: String,
        default: 'Address'
    }
})

module.exports = mongoose.model('User', userSchema);