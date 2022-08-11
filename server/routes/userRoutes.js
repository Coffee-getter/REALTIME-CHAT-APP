/*
 * @Author: heye
 * @Date: 2022-08-01 17:50:57
 * @LastEditors: heye
 * @LastEditTime: 2022-08-11 10:53:27
 * @FilePath: \Realtime-Chat-App\REALTIME-CHAT-APP\server\routes\userRoutes.js
 * @Description:
 *
 */

const { register, login, setAvatar,getAllUsersRoute } = require('../controllers/userController')

const router = require('express').Router()

router.post('/register', register)
router.post('/login', login)
router.post('/setAvatar/:id', setAvatar)
router.post('/getAllUsersRoute', getAllUsersRoute)
module.exports = router
