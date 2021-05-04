import React from 'react'
import { listHotline } from 'constants/hotline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CardHotline.css'

export const CardHotline = ({ title }) => {
	return (
		<div className='card-list card-hotline'>
			<div className='heading'>{title}</div>
			<ul className='list'>
				{listHotline.map((item, index) => (
					<li key={index} className='item'>
						<span>{item.title}</span>
						{item.children.map((child, index) => (
							<div key={index} className='child'>
								<FontAwesomeIcon className='icon' icon={child.icon} />
								<span className='child-txt'>
									<b>{child.name}:</b> <a href='tel:+84917323239'>{child.phoneNumber}</a>
								</span>
							</div>
						))}
					</li>
				))}
			</ul>
		</div>
	)
}
