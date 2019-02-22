'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {
        type: String,
        required: 'Please specify a firstname'
    },
    lastName: {
        type: String,
        required: 'Please specify a firstname'
    },
})

module.exports = mongoose.model('User', userSchema);