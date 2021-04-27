import React from 'react'
import { listNav } from 'constants/navbar'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
	return (
		<div className='navbar'>
			{listNav.map((nav, index) => (
				<div className='navbar-item' key={index}>
					<Link to={`${nav.link}`}>{nav.title}</Link>
				</div>
			))}
		</div>
	)
}
