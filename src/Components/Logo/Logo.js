import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import LogoDienMay from 'assets/logo.png'
import './Logo.css'

export const Logo = () => {
	return (
		<div className='logo-container'>
			<img src={LogoDienMay} alt='Logo' />
			<div className='search-input'>
				<input className='search-input' />
				<FontAwesomeIcon icon={faSearch} className='icon' />
			</div>
		</div>
	)
}
