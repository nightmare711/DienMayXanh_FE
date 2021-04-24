import React from 'react'
import './ProductList.css'

export const ProductList = ({ list }) => {
	return (
		<div className='container-product'>
			{list.map((item) => (
				<div className='thumbnail'>
					<div className='image-pro'>
						<img src={item.image} alt=''></img>
					</div>
					<h2 className='title-pro'>
						<a href='link' link={item.href}>
							{item.title}
						</a>
					</h2>
					<div className='status-pro'>
						<p>Tình trạng: {item.status}</p>
						<p>
							Bảo hành: <i>{item.guarantee}</i>
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
