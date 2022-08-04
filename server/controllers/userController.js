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
		return res.json({ status: true, user2 })
	} catch (ex) {
		next(ex)
	}
}
