import React from 'react'
import './contact.css'

export const Contact = () => {
	return (
		<div className='container-contact'>
			<div className='main-contact'>
				<div className='left-info'>
					<h3>Điện máy Xanh</h3>
					<div className='sub-content'>
						<div className='label'>Trụ sở chính:</div>
						<div>Cao ốc A, Ngô Gia Tự, Phường 3, Quận 10, TP HCM</div>
					</div>
					<div className='sub-content'>
						<div class='label'>Chi nhánh:</div>
						<div>Cao ốc A, Ngô Gia Tự, Phường 3, Quận 10, TP HCM</div>
					</div>
					<div class='sub-content'>
						<div class='label'>Tỉnh/TP:</div>
						<div>TP HCM</div>
					</div>
					<div class='sub-content'>
						<div class='label'>Điên thoại:</div>
						<a href='www.suachua-dienmayxanh.com'>0123456789</a>
					</div>
					<div class='sub-content'>
						<div class='label'>Hotline:</div>
						<a href='www.suachua-dienmayxanh.com'>1900 8889</a>
					</div>
					<div class='sub-content'>
						<div class='label'>E-mail:</div>
						<div>suachuadienmayxanh@gmail.com</div>
					</div>
					<div class='sub-content'>
						<div class='label'>Website:</div>
						<a href='www.suachua-dienmayxanh.com'>www.dienmayxanh.com</a>
					</div>
				</div>
				<div className='right-info'>
					<div className='sub-input'>
						<div className='label-input'>Tên *</div>
						<input type='text' id='name-input' className='form-control'></input>
					</div>
					<div className='sub-input'>
						<div className='label-input'>E-mail *</div>
						<input type='email' id='email-input' className='form-control'></input>
					</div>
					<div className='sub-input'>
						<div className='label-input'>Điện thoại *</div>
						<input type='tel' id='phone-input' className='form-control'></input>
					</div>
					<div className='sub-input'>
						<div className='label-input'>Chủ đề *</div>
						<input type='text' id='topic-input' className='form-control'></input>
					</div>
					<div className='sub-input'>
						<div className='label-input'>Tin nhắn *</div>
						<textarea
							name=''
							id=''
							cols='30'
							rows='10'
							className='form-control'
							style='height: 80px;'
						></textarea>
					</div>
					<button type='button' className='btn btn-sent'>
						Gửi yêu cầu
					</button>
				</div>
			</div>
			<div className='contain-map'></div>
		</div>
	)
}
