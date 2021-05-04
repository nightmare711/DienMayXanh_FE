import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './PhoneCall.css'

export const PhoneCall = () => {
	return (
		<div onClick={() => window.open('tel:0917323239', '_self')} className='call-animation'>
			<FontAwesomeIcon icon={faPhone} />
		</div>
	)
}
