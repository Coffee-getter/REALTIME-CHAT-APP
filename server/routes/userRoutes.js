/*
 * @Author: heye
 * @Date: 2022-08-01 17:50:57
 * @LastEditors: heye
 * @LastEditTime: 2022-08-12 10:37:24
 * @FilePath: \Realtime-Chat-App\REALTIME-CHAT-APP\server\routes\userRoutes.js
 * @Description:
 *
 */

const { register, login, setAvatar, getAllChatList } = require('../controllers/userController')

const router = require('express').Router()

router.post('/register', register)
router.post('/login', login)
router.post('/setAvatar/:id', setAvatar)
router.post('/getAllChatList', getAllChatList)
module.exports = router
