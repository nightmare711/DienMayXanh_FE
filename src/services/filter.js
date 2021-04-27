import { useGetProducts } from 'queries/useProducts'

export const useFilterProducts = () => {
	const { data: products } = useGetProducts()
	return (type = '') => {
		if (type) {
			return products ? products.filter((product) => product.type === type) : []
		}
		return products
	}
}
