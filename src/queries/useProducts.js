import { useQuery } from 'react-query'

export const useGetProducts = () => {
	return useQuery(['useGetProducts.name'], () => {
		return fetch('https://fathomless-brook-60197.herokuapp.com/products')
			.then((res) => res.json())
			.then((result) => result.result)
	})
}
