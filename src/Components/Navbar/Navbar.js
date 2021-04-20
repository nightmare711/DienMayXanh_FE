import React from 'react'
import { listNav } from 'constants/navbar'
import './Navbar.css'

export const Navbar = () => {
	return (
		<div className='navbar'>
			{listNav.map((nav, index) => (
				<div className='navbar-item' key={index}>
					{nav.title}
				</div>
			))}
		</div>
	)
}
