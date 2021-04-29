import React from 'react'
import animateScrollTo from 'animated-scroll-to'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import './ScrollButton.css'

export const ScrollButton = () => {
	return (
		<div onClick={() => animateScrollTo(0)} className='scroll-button'>
			<FontAwesomeIcon icon={faArrowUp} />
		</div>
	)
}
