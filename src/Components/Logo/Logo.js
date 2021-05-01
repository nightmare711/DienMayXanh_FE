import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import LogoDienMay from 'assets/logo.png'
import { Link } from 'react-router-dom'
import './Logo.css'

export const Logo = () => {
	return (
		<div className='logo-container'>
			<Link to='/'>
				<img src={LogoDienMay} alt='Logo' />
			</Link>
			<div className='search-input'>
				<input className='search-input' />
				<FontAwesomeIcon icon={faSearch} className='icon' />
			</div>
		</div>
	)
}
