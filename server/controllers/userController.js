/*
 * @Author: heye
 * @Date: 2022-08-01 17:52:24
 * @LastEditors: heye
 * @LastEditTime: 2022-08-12 13:35:25
 * @Description:
 */
const User = require('../model/userModel')
const bcrypt = require('bcrypt')

module.exports.register = async (req, res, next) => {
	try {
		const { username, email, password } = req.body
		const usernameCheck = await User.findOne({ username })
		if (usernameCheck) {
			return res.json({ msg: 'username is already used', status: false })
		}
		const emailCheck = await User.findOne({ email })
		if (emailCheck) {
			return res.json({ msg: 'username is already used', status: false })
		}
		const passwordCheck = await User.findOne({ password })
		if (passwordCheck) {
			return res.json({ msg: 'username is already used', status: false })
		}
		const hashedPassword = await bcrypt.hash(password, 10)
		const user = await User.create({
			username,
			email,
			password: hashedPassword,
		})
		const user2 = {
			...user,
			password: undefined,
		}
		return res.json({ status: true, user: user2 })
	} catch (ex) {
		next(ex)
	}
}
module.exports.login = async (req, res, next) => {
	try {
		const { email, password } = req.body
		const passwordObj = await User.findOne({ email }, { password: 1 })
		const savedPassword = passwordObj ? passwordObj.password : ''
		const isPasswordSame = bcrypt.compare(savedPassword, password)
		if (!passwordObj) {
			return res.json({ status: false, msg: '账户不存在' })
		} else if (!isPasswordSame) {
			return res.json({ status: false, msg: '密码错误' })
		}
		const user = await User.findOne({ email }, { password: 0 })
		return res.json({ status: true, user })
	} catch (ex) {
		next(ex)
	}
}

module.exports.setAvatar = async (req, res, next) => {
	try {
		const id = req.params.id
		const avatarImage = req.body.avatarImage
		const userData = await User.findByIdAndUpdate(id, {
			isAvatarImageSet: true,
			avatarImage,
		})
		return res.json({
			isSet: userData.isAvatarImageSet,
			avatarImage: userData.avatarImage,
			status: true,
		})
	} catch (ex) {
		next(ex)
	}
}
module.exports.getAllChatList = async (req, res, next) => {
	try {
		const users = await User.find({ id: { $ne: req.body.user._id } }).select([
			'email',
			'username',
			'avatarImage',
			'_id',
		])
		return res.json(users)
	} catch (ex) {
		next(ex)
	}
}
