import React from 'react'
import './ProductList.css'

export const ProductList = ({ list }) => {
	return (
		<div className='container-product'>
			{list.map((item, index) => (
				<div key={index} className='thumbnail'>
					<div className='image-pro'>
						<img src={item.imgUrl} alt=''></img>
					</div>
					<h2 className='title-pro'>
						<a href={() => false}>{item.name}</a>
					</h2>
					<div className='status-pro'>
						<p>Tình trạng: Còn hàng</p>
						<p>
							Bảo hành: <i>12 tháng</i>
						</p>
					</div>
					<div className='price'>
						<span>{item.price}</span>
					</div>
				</div>
			))}
		</div>
	)
}
