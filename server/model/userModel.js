/*
 * @Author: heye
 * @Date: 2022-08-01 17:52:41
 * @LastEditors: heye
 * @LastEditTime: 2022-08-04 11:17:40
 * @FilePath: \REALTIME-CHAT-APP\server\model\userModel.js
 * @Description:
 *
 */
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		min: 3,
		max: 20,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		max: 50,
	},
	password: {
		type: String,
		required: true,
		min: 3,
	},
	isAvatarImageSet: {
		type: Boolean,
		default: false,
	},
	avaterImage: {
		type: String,
		default: '',
	},
})
module.exports = mongoose.model('User', userSchema)
