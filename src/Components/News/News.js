import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import './News.css'

export const News = ({ list, title }) => {
	return (
		<div className='card-list news'>
			<div className='heading'>{title}</div>
			<ul className='list'>
				{list.map((item) => (
					<li className='item'>
						<img src={item.image} alt='' />
						<div className='txt-frame'>
							<span className='title'>{item.title}</span>
							<span className='date'>
								<FontAwesomeIcon icon={faCalendarWeek} className='icon' />
								{item.date}
							</span>
							<span>{item.content}</span>
							<div onCLick={() => window.open(item.href, '_blank')} className='news-detail'>
								Xem chi tiết <b>{'>'}</b>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
