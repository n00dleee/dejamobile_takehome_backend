'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {
        type: String,
        default: 'user name',
    },
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
    password: {
        type: String,
        default: 'password'
    }
})

module.exports = mongoose.model('User', userSchema);