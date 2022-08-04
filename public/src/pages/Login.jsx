/*
 * @Author: heye
 * @Date: 2022-08-01 14:18:45
 * @LastEditors: heye
 * @LastEditTime: 2022-08-04 16:22:06
 * @FilePath: \REALTIME-CHAT-APP\public\src\pages\Login.jsx
 * @Description: Login
 *
 */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { LoginRoute } from '../utils/APIRoutes'
const toastOptions = {
	theme: 'dark',
	draggable: true,
	position: 'top-right',
	autoClose: 3000,
	pauseOnHover: true,
}
function Login() {
	const navigate = useNavigate()
	const [values, setValues] = useState({
		username: '',
		email: '',
		password: '',
		comfirmPassword: '',
	})
	const handleLogin = async e => {
		e.preventDefault()
		if (handleValidation()) {
			const { email, password } = values
			const data = await axios.post(LoginRoute, {
				email,
				password,
			})
			if (data.data.status === false) {
				toast.error(data.data.msg, toastOptions)
			}
			if (data.data.status === true) {
				localStorage.setItem('chat-app-user', JSON.stringify(data.data.user))
				navigate('/SetAvatar')
			}
		}
	}
	const handleValidation = () => {
		const { email, password } = values
		if (password === '') {
			toast.error('password is required.', toastOptions)
			return false
		} else if (email === '') {
			toast.error('email is required', toastOptions)
			return false
		}
		return true
	}
	const handleChange = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
	}
	return (
		<>
			<FormContainer>
				<div className='brand'>
					{/* <img src="" style={{}} /> */}
					<h1>SNAPPY</h1>
				</div>
				<form onSubmit={e => handleLogin(e)}>
					<input
						type='text'
						placeholder='Email'
						name='email'
						onChange={e => handleChange(e)}
					/>
					<input
						type='password'
						placeholder='Password'
						name='password'
						onChange={e => handleChange(e)}
					/>
					<button type='submit'>LOGIN</button>
				</form>
				<div className='msg'>
					have no ancount? <Link to='/register'>register</Link>
					<br />
					<br />
					forget your password? <Link to='#'>chick</Link>
				</div>
			</FormContainer>
			<ToastContainer />
		</>
	)
}

const FormContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #131324;
	.brand {
		padding: 2rem;
		h1 {
			color: white;
			text-transform: uppercase;
		}
	}
	form {
		width: 500px;
		display: flex;
		flex-direction: column;
		justify-content: ' center';
		gap: 2rem;
		input {
			background-color: transparent;
			padding: 1rem;
			border: 0.2rem solid #4e40ff;
			border-radius: 2rem;
			font-size: 17px;
			color: white;
			&:focus {
				border: 0.2rem solid #997af0;
				outline: none;
			}
		}
		button {
			padding: 1rem;
			font-size: 16px;
			background-color: #997af0;
			color: white;
			text-transform: uppercase;
		}
	}
	.msg {
		margin: 2rem;
		color: white;
		text-transform: uppercase;
		a {
			color: #7af0ff;
		}
	}
`
export default Login
