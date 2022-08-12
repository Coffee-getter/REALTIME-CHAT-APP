/*
 * @Author: heye
 * @Date: 2022-08-01 14:19:14
 * @LastEditors: heye
 * @LastEditTime: 2022-08-12 13:48:35
 * @Description:
 */

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { getAllChatList } from '../utils/APIRoutes'

function Chat() {
	const [chatList, setChatList] = useState([])
	useEffect(() => {
		getChatList()
		console.log(chatList)
	}, [])
	/** 获取好友列表 */
	const getChatList = async () => {
		const loginUser = JSON.parse(localStorage.getItem('chat-app-user'))
		const data = await axios.post(getAllChatList, { user: loginUser })
		setChatList(data.data)
	}
	return (
		<ChatContainer>
			<div className='chatMenu'>
				<div className='chatHeader'>
					<h1 className='chatTitle' style={{ textAlign: 'center', fontWeight: 'bold' }}>
						This is the chatHeader
					</h1>
					<div className='charList'>
						{chatList ? (
							chatList.map((item, index) => {
								return (
									<div className='chatItem' key={index}>
										<div className='chatItemImage'>
											<img
												src={`data:image/svg+xml;base64,${item.avatarImage}`}
												width={100}
											/>
										</div>
										<div className='chatItemText'>
											<span>{item.username}</span>
										</div>
									</div>
								)
							})
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
			<div className='chatContent'>
				<div className='chatListBody'>
					<div className='chatListRow'></div>
				</div>
			</div>
		</ChatContainer>
	)
}

const ChatContainer = styled.div`
	background: #131324;
	width: 100vw;
	height: 100vh;
	// display: grid;
	// grid-template-columns: 30% 70%;
	// gap-columns: 5%;

	.chatMenu {
		margin: 10px;
		background: #333;
		.chatHeader {
			color: white;
		}
		.chatList {
			background: #131324;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			scroll: auto;
			color: #fff;
			.chatItem {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				border-radius: 1rem;
				padding: 2rem;
				font-weight: 600;
				color: white;
				.chatItemImage {
					width: 40;
					height: 40;
				}
				.chatItemText {
					color: white;
					font-size: 20px;
				}
			}
		}
	}
`
export default Chat
