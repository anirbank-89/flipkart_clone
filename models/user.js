var mongoose = require('mongoose');
var moment = require('moment-timezone');

var Schema = mongoose.Schema;
var dateKolkata = moment.tz(Date.now(), "Asia/Kolkata");

const USER_SCHEMA = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    phone: String,
    regnDate: {
        type: Date,
        default: dateKolkata
    },
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("user", USER_SCHEMA);