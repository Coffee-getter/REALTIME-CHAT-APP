/*
 * @Author: heye
 * @Date: 2022-07-20 11:07:59
 * @LastEditors: heye
 * @LastEditTime: 2022-08-12 13:48:33
 * @FilePath: \REALTIME-CHAT-APP\public\src\App.js
 * @Description:
 *
 */
import React from 'react'
import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'
import SetAvatar from './pages/SetAvatar'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/chat' element={<Chat />} />
				<Route path='/setAvatar' element={<SetAvatar />} />
			</Routes>
		</BrowserRouter>
	)
}
