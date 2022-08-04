/*
 * @Author: heye
 * @Date: 2022-08-01 17:50:57
 * @LastEditors: heye
 * @LastEditTime: 2022-08-04 13:14:29
 * @FilePath: \REALTIME-CHAT-APP\server\routes\userRoutes.js
 * @Description:
 *
 */

const { register, login } = require('../controllers/userController')

const router = require('express').Router()

router.post('/register', register)
router.post('/login', login)
module.exports = router
