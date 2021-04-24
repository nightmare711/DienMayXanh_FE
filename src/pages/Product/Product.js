import React from 'react'
import { ProductList } from 'Components/Product-List/ProductList'
import { listSellProduct } from 'constants/sell-products'
import './Product.css'

export const Product = () => {
	return (
		<div className='Product'>
			<div className='container-product'>
				<ProductList list={listSellProduct}></ProductList>
			</div>
		</div>
	)
}
