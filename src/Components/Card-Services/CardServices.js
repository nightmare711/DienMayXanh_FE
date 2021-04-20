import React from 'react'
import { listServices } from 'constants/services'
import { CardList } from '../Card-List/CardList'
import './CardServices.css'

export const CardServices = () => {
	return (
		<div className='card-services'>
			<CardList list={listServices} title='DỊCH VỤ' />
		</div>
	)
}
