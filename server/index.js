/*
 * @Author: heye
 * @Date: 2022-07-19 17:06:31
 * @LastEditors: heye
 * @LastEditTime: 2022-07-20 11:13:13
 * @FilePath: \REALTIME-CHAT-APP\server\index.js
 * @Description:
 *
 */
var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')

var app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())

mongoose
	.connect(process.env.MONGOOSE_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('DB Connection Successful')
	})
	.catch(err => {
		console.log(err.message, 'error')
	})

const server = app.listen(process.env.PORT, () => {
	console.log(`Server started on PORT ${process.env.PORT}`)
})
