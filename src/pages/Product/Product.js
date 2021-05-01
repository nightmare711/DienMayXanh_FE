import React from 'react'
import { ProductList } from 'Components/Product-List/ProductList'

import './Product.css'

export const Product = ({ products }) => {
	return (
		<div className='products'>
			<div className='title'>Sản phẩm</div>
			{products ? <ProductList list={products}></ProductList> : null}
		</div>
	)
}
