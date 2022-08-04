/*
 * @Author: heye
 * @Date: 2022-07-20 11:07:59
 * @LastEditors: heye
 * @LastEditTime: 2022-08-01 14:29:58
 * @FilePath: \REALTIME-CHAT-APP\public\src\App.js
 * @Description:
 *
 */
import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/chat' element={<Chat />} />
			</Routes>
		</BrowserRouter>
	)
}
