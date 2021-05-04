import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { listOldProduct } from 'constants/old-products'
import { listServices } from 'constants/services'
import { listAddress } from 'constants/address'
import { faStreetView, faLifeRing } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
export const Footer = () => {
	return (
		<div className='footer mt-30'>
			<div className='container-footer'>
				<div className='col-footer'>
					<div className='header'>Điện máy Xanh</div>
					<div className='panel-body'>
						<ul>
							{listAddress.map((item) => (
								<li>
									<span>
										<b>
											<FontAwesomeIcon icon={faStreetView} /> {item.name}:
										</b>
										{item.content}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='col-footer'>
					<div className='header'>
						{' '}
						<a href='/'>Bài viết về chúng tôi</a>
					</div>
					<div className='panel-body'>
						<ul>
							{listOldProduct.map((item) => (
								<li>
									<a href={`/posts/${item.href}`}>
										<FontAwesomeIcon className='icon' icon={faLifeRing} />
										{item.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='col-footer'>
					<div className='header'>
						{' '}
						<a href='/'>Bài viết về chúng tôi</a>
					</div>
					<div className='panel-body'>
						<ul>
							{listServices.map((item) => (
								<li>
									<a href={`/services/${item.href}`} title='Những lỗi thường gặp của TIVI'>
										<FontAwesomeIcon className='icon' icon={faLifeRing} />
										{item.content}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
