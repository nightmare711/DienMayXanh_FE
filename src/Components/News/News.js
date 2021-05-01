import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import './News.css'

export const News = ({ list, title }) => {
	return (
		<div className='card-list news'>
			<div className='heading'>{title}</div>
			<ul className='list'>
				{list.map((item, index) => (
					<li key={index} className='item'>
						<img src={item.image} alt='' />
						<div className='txt-frame'>
							<span
								onClick={() => {
									if (title === 'Dịch vụ') {
										window.open(`/services/${item.href}`, '_self')
									} else {
										window.open(`/posts/${item.href}`, '_self')
									}
								}}
								className='title'
							>
								{item.title}
							</span>
							<span className='date'>
								<FontAwesomeIcon icon={faCalendarWeek} className='icon' />
								{item.date}
							</span>
							<span className='content'>{item.content}</span>
							<div
								onClick={() => {
									if (title === 'Dịch vụ') {
										window.open(`/services/${item.href}`, '_self')
									} else {
										window.open(`/posts/${item.href}`, '_self')
									}
								}}
								className='news-detail'
							>
								Xem chi tiết <b>{'>'}</b>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
