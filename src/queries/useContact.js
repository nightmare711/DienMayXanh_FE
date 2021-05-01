import { useMutation } from 'react-query'

export const useContact = (setInfo) => {
	return useMutation(
		(info) => {
			fetch('https://fathomless-brook-60197.herokuapp.com/users', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(info),
			})
				.then((res) => res.json())
				.catch((err) => console.log(err))
		},
		{
			onSuccess: () => {
				setInfo({
					name: '',
					email: '',
					phone: '',
					title: '',
					message: '',
				})
				alert('Yêu cầu của bạn đã được ghi lại')
			},
		}
	)
}
