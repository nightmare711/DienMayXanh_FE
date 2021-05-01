import React from 'react'
import { useGetProducts } from 'queries/useProducts'
import {} from 'constants/'

export const useFilterProducts = () => {
	const { data: products } = useGetProducts()
	return (type = '') => {
		if (type) {
			return products ? products.filter((product) => product.type === type) : []
		}
		return products
	}
}
export const useFilterByNumber = () => {
	const { data: products } = useGetProducts()
	const [productsFilter, setProductsFilter] = React.useState([])
	React.useEffect(() => {
		if (products) {
			const temp = []
			for (let i = 0; i < 6; i += 1) {
				temp.push(products[i])
			}
			setProductsFilter(temp)
		}
	}, [products])
	return productsFilter
}
