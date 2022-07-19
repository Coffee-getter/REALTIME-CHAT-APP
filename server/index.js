/*
 * @Author: heye
 * @Date: 2022-07-19 17:06:31
 * @LastEditors: heye
 * @LastEditTime: 2022-07-19 17:45:00
 * @FilePath: \Realtime-Chat-App\server\index.js
 * @Description:
 *
 */
var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')
var app = express()
require('dotenv').config({ path: '.env' })

app.use(cors())
app.use(express.json())

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('DB Connection Successful')
	})
	.catch(err => {
		console.log(err.message, 'error')
	})

app.get('/', function (req, res, next) {
	console.log('Server start in Port 3000 successful.')
}).listen(3000)
