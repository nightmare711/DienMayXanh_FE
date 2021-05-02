import React from 'react'
import ZaloIcon from 'assets/zalo.svg'
import './ZaloSticky.css'

export const ZaloSticky = () => {
	return (
		<img
			onClick={() => window.open('https://zalo.me/0906198928', '_blank')}
			src={ZaloIcon}
			alt='zalo'
			className='zalo'
		/>
	)
}
