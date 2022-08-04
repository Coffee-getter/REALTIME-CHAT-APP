/*
 * @Author: heye
 * @Date: 2022-08-01 17:50:57
 * @LastEditors: heye
 * @LastEditTime: 2022-08-04 16:56:33
 * @FilePath: \REALTIME-CHAT-APP\server\routes\userRoutes.js
 * @Description:
 *
 */

const { register, login, setAvatar } = require('../controllers/userController')

const router = require('express').Router()

router.post('/register', register)
router.post('/login', login)
router.post('/setAvatar/:id', setAvatar)
module.exports = router
