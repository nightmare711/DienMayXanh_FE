import React from 'react'
import { ProductList } from 'Components/Product-List/ProductList'
import { useGetProducts } from 'queries/useProducts'
import './Product.css'

export const Product = () => {
	const { data: products } = useGetProducts()
	return (
		<div className='products'>
			<div className='title'>Products</div>
			{products ? <ProductList list={products}></ProductList> : null}
		</div>
	)
}
