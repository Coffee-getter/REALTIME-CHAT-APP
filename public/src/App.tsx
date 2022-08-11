/*
 * @Author: heye
 * @Date: 2022-07-20 11:07:59
 * @LastEditors: heye
 * @LastEditTime: 2022-08-11 17:06:07
 * @FilePath: \REALTIME-CHAT-APP\public\src\App.js
 * @Description:
 *
 */
import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import Chat from './pages/Chat.tsx'
import SetAvatar from './pages/SetAvatar.tsx'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/chat' element={<Chat />} />
				<Route path='/setAvatar' element={<SetAvatar />} />
			</Routes>
		</BrowserRouter>
	)
}
