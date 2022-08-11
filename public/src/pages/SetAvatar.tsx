/*
 * @Author: heye
 * @Date: 2022-08-04 13:54:14
 * @LastEditors: heye
 * @LastEditTime: 2022-08-11 17:07:12
 * @FilePath: \REALTIME-CHAT-APP\public\src\pages\setAvatar.jsx
 * @Description:
 *
 */
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { Buffer } from 'buffer'
import { setAvatarRoute } from '../utils/APIRoutes.tsx'
import styled from 'styled-components'
import octopusAnimation from '../assets/json/octopus.json'
import Lottie from 'lottie-react'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'

const toastOptions = {
	theme: 'dark',
	draggable: true,
	position: 'top-right',
	autoClose: 3000,
	pauseOnHover: true,
}
export default function SetAvatar() {
	const api = 'https://api.multiavatar.com/45678945'
	const navigate = useNavigate()
	const [avatars, setAvatars] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const [selectedAvatar, setSelectedAvatar] = useState('')
	useEffect(() => {
		async function getInitAvatars() {
			let data = []
			for (let i = 0; i < 4; i++) {
				const image = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`)
				let stringBuffer = new Buffer(image.data).toString('base64')
				data.push(stringBuffer)
			}
			setAvatars(data)
			setIsLoading(false)
		}
		getInitAvatars()
	}, [])
	const handleAvatar = index => {
		setSelectedAvatar(index)
	}
	const setProfilePicture = async () => {
		if (selectedAvatar === undefined) {
			toast.warn('please select one at least', toastOptions)
			return false
		}
		const user = JSON.parse(localStorage.getItem('chat-app-user'))
		const data = await axios.post(`${setAvatarRoute}/${user._id}`, {
			avatarImage: avatars[selectedAvatar],
		})
		if (data.data.isSet) {
			user.isAvatarImageSet = data.data.isSet
			user.avatarImage = data.data.avatarImage
			localStorage.setItem('chat-app-user', user)
			navigate('/Chat')
		}
	}
	return (
		<>
			{isLoading ? (
				<Container>
					<div className='loader'>
						<Lottie animationData={octopusAnimation} loop={true} />
						<h2>loading......</h2>
					</div>
				</Container>
			) : (
				<Container>
					<div className='header'>Please pick your profile pictrue</div>
					<div className='avatars'>
						{avatars?.map((avatar, index) => {
							return (
								<div
									key={index}
									className={`avatar-${
										selectedAvatar === index ? 'selected' : 'none'
									}`}
									onClick={() => handleAvatar(index)}>
									<img
										src={`data:image/svg+xml;base64,${avatar}`}
										alt='avatar'
										style={{
											width: 120,
											height: 120,
										}}></img>
								</div>
							)
						})}
					</div>
					<button onClick={setProfilePicture}>create avatar</button>
					<ToastContainer />
				</Container>
			)}
		</>
	)
}
const Container = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #131324;
	.loader {
		width: 500px;
		height: 500px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h2 {
			color: white;
			margin-top: -3rem;
			text-transform: uppercase;
		}
	}
	.header {
		margin: 2rem;
		color: #997af0;
		font-size: 3rem;
		font-weight: 600;
	}
	.avatars {
		display: flex;
		flex-direction: row;
		justify-content: 'space-around';
		gap: 2rem;
		margin-bottom: 5rem;
		.avatar-selected {
			padding: 0.4rem;
			border-radius: 10rem;
			border: 4px solid #997af0;
		}
		.avatar-none {
			padding: 0.4rem;
			border-radius: 10rem;
			border: 4px solid transparent;
		}
	}
	button {
		width: 400px;
		font-size: 2rem;
		background-color: #997af0;
		color: white;
		padding: 0.7rem;
	}
`
