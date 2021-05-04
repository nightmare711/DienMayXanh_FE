import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { listOldProduct } from 'constants/old-products'
import { listServices } from 'constants/services'
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
							<li>
								<span>
									<b>
										<FontAwesomeIcon icon={faStreetView} /> Trụ sở chính:
									</b>
									Cao ốc A, Ngô Gia Tự, Phường 3, Quận 10, TP HCM
								</span>
							</li>
							<li>
								<span>
									<b>
										<FontAwesomeIcon icon={faStreetView} /> Trụ sở chính:
									</b>
									Cao ốc A, Ngô Gia Tự, Phường 3, Quận 10, TP HCM
								</span>
							</li>
							<li>
								<span>
									<b>
										<FontAwesomeIcon icon={faStreetView} /> Trụ sở chính:
									</b>
									Cao ốc A, Ngô Gia Tự, Phường 3, Quận 10, TP HCM
								</span>
							</li>
							<li>
								<span>
									<b>
										<FontAwesomeIcon icon={faStreetView} /> Trụ sở chính:
									</b>
									Cao ốc A, Ngô Gia Tự, Phường 3, Quận 10, TP HCM
								</span>
							</li>
							<li>
								<span>
									<b>
										<FontAwesomeIcon icon={faStreetView} /> Trụ sở chính:
									</b>
									Cao ốc A, Ngô Gia Tự, Phường 3, Quận 10, TP HCM
								</span>
							</li>
							<li>
								<span>
									<b>
										<FontAwesomeIcon icon={faStreetView} /> Điện thoại:
									</b>
									0917323239
								</span>
							</li>
							<li>
								<span>
									<b>
										<FontAwesomeIcon icon={faStreetView} /> Hotline:
									</b>
									0917323239
								</span>
							</li>
							<li>
								<span>
									<b>
										<FontAwesomeIcon icon={faStreetView} /> E-mail:
									</b>
									suachua-dienmayxanh@gmail.com
								</span>
							</li>
							<li>
								<span>
									<b>
										<FontAwesomeIcon icon={faStreetView} /> Website:
									</b>
									www.suachua-dienmayxanh.com
								</span>
							</li>
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
