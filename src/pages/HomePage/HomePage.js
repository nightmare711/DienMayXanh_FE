import React from 'react'
import { useFilterByNumber } from 'services/filter'
import { Product } from 'pages/Product/Product'
import './HomePage.css'

export const HomePage = () => {
	const products = useFilterByNumber()
	return (
		<div className='home-page'>
			<Product products={products} />
		</div>
	)
}
