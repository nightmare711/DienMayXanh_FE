import React from 'react'
import './ContainerRow.css'

export const ContainerRow = ({ children }) => {
	return <div className='container-row'>{children}</div>
}
export const ContainerColumn = ({ children }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			{children}
		</div>
	)
}
