'use strict';

const {Schema} = require ('mongoose');
const mongoose = require('mongoose');

const settingSchema = new Schema({
  ipServer: { type: String, minlength: 7, maxlength: 15 },
  baseNameAsc: { type: String, minlength: 1, maxlength: 36 },
  tokenTg: { type: String },
  tokenViber: { type: String },
  sendTime: { type: String },
});

const userSchema = new Schema({
  //id: {type: String, minlength: 36, maxlength:36},
  name: {type: String, minlength: 3, required: true},
  email: {type: String, minlength: 5, required: true},
  password: {type: String, minlength: 3, required: true},
  isAdmin: Boolean,
  isManager: Boolean,
  isEmployee: Boolean,
  surname: {type: String, minlength: 3},
  loginAsc: {type: String, required: true},
  passwordAsc: {type: String, required: true},
  idTg: String,
  idViber: String,
})

const messageSchema  = new Schema({
  id: {type: String, minlength: 36, maxlength:36},
  recipient: String,
  typeMessenger: String,
  timeStamp: String,
  message: String,
  callbackMessage: String,
})

const User = mongoose.model('User', userSchema);
const Setting = mongoose.model('Setting', settingSchema);
const Message = mongoose.model('Message', messageSchema);

module.exports = { User, Setting, Message };