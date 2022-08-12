/*
 * @Author: heye
 * @Date: 2022-07-19 17:04:40
 * @LastEditors: heye
 * @LastEditTime: 2022-08-12 13:48:36
 * @FilePath: \Realtime-Chat-App\public\chat-app\src\index.js
 * @Description:
 *
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(<App tab='home' />)
