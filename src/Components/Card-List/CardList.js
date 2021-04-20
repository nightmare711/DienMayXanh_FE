import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CardList.css'

export const CardList = ({ list, title }) => {
	return (
		<div className='card-list'>
			<div className='heading'>{title}</div>
			<ul className='list'>
				{list.map((item, index) => (
					<li key={index} className='item'>
						<FontAwesomeIcon className='icon' icon={item.icon} />
						<span>{item.content}</span>
					</li>
				))}
			</ul>
		</div>
	)
}
