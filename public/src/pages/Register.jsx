/*
 * @Author: heye
 * @Date: 2022-08-01 14:19:01
 * @LastEditors: heye
 * @LastEditTime: 2022-08-04 11:22:55
 * @FilePath: \REALTIME-CHAT-APP\public\src\pages\Register.jsx
 * @Description:
 *
 */
/*
 * @Author: heye
 * @Date: 2022-08-01 14:19:01
 * @LastEditors: heye
 * @LastEditTime: 2022-08-01 17:40:46
 * @FilePath: \REALTIME-CHAT-APP\public\src\pages\Register.jsx
 * @Description:
 *
 */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import axios from 'axios'
import { RegisterRoute } from '../utils/APIRoutes'
const toastOptions = {
	theme: 'dark',
	draggable: true,
	position: 'top-right',
	autoClose: 3000,
	pauseOnHover: true,
}
function Register() {
	const navigate = useNavigate()
	const [values, setValues] = useState({
		username: '',
		email: '',
		password: '',
		comfirmPassword: '',
	})
	const handleSubmit = async e => {
		e.preventDefault()
		if (handleValidation()) {
			const { username, email, password, comfirmPassword } = values
			const data = await axios.post(RegisterRoute, {
				username,
				email,
				password,
			})

			if (data.data.status == false) {
				toast.error(data.data.msg, toastOptions)
			}
			if (data.data.status == true) {
				localStorage.setItem('chat-app-user', JSON.stringify(data.data.user))
				navigate('/Chat')
			}
		}
	}
	const handleValidation = () => {
		const { username, email, password, comfirmPassword } = values
		if (password !== comfirmPassword) {
			toast.error('password should be same with comfirm password.', toastOptions)
			return false
		} else if (username == '') {
			toast.error('username is required', toastOptions)
			return false
		} else if (email == '') {
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
				<form onSubmit={e => handleSubmit(e)}>
					<input
						type='text'
						placeholder='Username'
						name='username'
						onChange={e => handleChange(e)}
					/>
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
					<input
						type='password'
						placeholder='Comfirm Password'
						name='comfirmPassword'
						onChange={e => handleChange(e)}
					/>
					<button type='submit'>Create User</button>
				</form>
				<div className='msg'>
					Already have a ancount? <Link to='/login'>LOGIN</Link>
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
export default Register
