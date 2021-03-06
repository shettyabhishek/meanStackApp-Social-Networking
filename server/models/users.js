/**
	File name: users.js
	Author: Abhishek H S
	This file basically handles the model to be formed for pushing the record into the 
	mongodb. The Model is created using a npm plugin 'mongoose'
**/

var mongooseMod = require('mongoose');
module.exports = mongooseMod.model('User',{
	emailId: String,
	pswd: String,
	name: String, 
	gender: String,
	profileImage: String,
	bio: String
});