import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialMedia.css'
import {
	faFacebook,
	faLinkedinIn,
	faPinterest,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export const SocialMedia = () => {
	return (
		<div className='fixed-left'>
			<a href='/' className='fixed-items facebook'>
				<FontAwesomeIcon className='icon' icon={faFacebook} />
				<span>3,3K</span>
			</a>
			<a href='/' className='fixed-items twitter'>
				<FontAwesomeIcon className='icon' icon={faTwitter} />
				<span>998</span>
			</a>
			<a href='/' className='fixed-items pinterest'>
				<FontAwesomeIcon className='icon' icon={faPinterest} />
				<span>1,2K</span>
			</a>
			<a href='/' className='fixed-items linkin'>
				<FontAwesomeIcon className='icon' icon={faLinkedinIn} />
				<span>2,4K</span>
			</a>
			<a href='/' className='fixed-items exit'>
				<FontAwesomeIcon className='icon' icon={faTimes} />
			</a>
		</div>
	)
}
