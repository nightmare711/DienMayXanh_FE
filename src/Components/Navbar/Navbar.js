import React from 'react'
import { listNav } from 'constants/navbar'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
	const onClickMenu = () => {
		const height = document.querySelector('.navbar').style.height
		if (height === '300px') {
			document.querySelector('.navbar').style.height = '43px'
		} else {
			document.querySelector('.navbar').style.height = '300px'
		}
	}
	return (
		<div className='navbar'>
			{listNav.map((nav, index) => (
				<div className='navbar-item' key={index}>
					<Link to={`${nav.link}`}>{nav.title}</Link>
				</div>
			))}
			<div onClick={onClickMenu} className='container-icon'>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<div className='list-nav-column'>
				{listNav.map((nav, index) => (
					<div className='navbar-item-column' key={index}>
						<Link to={`${nav.link}`}>{nav.title}</Link>
					</div>
				))}
			</div>
		</div>
	)
}
