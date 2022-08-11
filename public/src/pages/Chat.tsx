/*
 * @Author: heye
 * @Date: 2022-08-01 14:19:14
 * @LastEditors: heye
 * @LastEditTime: 2022-08-11 15:20:35
 * @Description:
 */

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function Chat() {
	return (
		<Container>
			<div className='chatList'>
				<div className='chatHeader'>
					<h1 className='chatTitle' style={{ textAlign: 'center', fontWeight: 'bold' }}>
						This is the chatHeader
					</h1>
				</div>
				<div className='chatContent'>
					<div className='chatListBody'>
						<div className='chatListRow'></div>
					</div>
				</div>
			</div>
		</Container>
	)
}

const Container = styled.div`
	background: '
`
export default Chat
