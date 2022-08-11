/*
 * @Author: heye
 * @Date: 2022-07-19 17:04:40
 * @LastEditors: heye
 * @LastEditTime: 2022-08-11 17:05:36
 * @FilePath: \Realtime-Chat-App\public\chat-app\src\index.js
 * @Description:
 *
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.tsx'
const render = (Component: any) => {
	ReactDOM.render(<Component />, document.getElementById('root') as HTMLElement)
}
render(<App />)
