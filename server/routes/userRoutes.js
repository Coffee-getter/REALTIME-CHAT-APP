/*
 * @Author: heye
 * @Date: 2022-08-01 17:50:57
 * @LastEditors: heye
 * @LastEditTime: 2022-08-01 17:56:53
 * @FilePath: \REALTIME-CHAT-APP\server\routes\userRoutes.js
 * @Description:
 *
 */

const { register } = require('../controllers/userController')

const router = require('express').Router()

router.post('/register', register)
module.exports = router
