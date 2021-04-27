import React from 'react'

export const ContainerRow = ({ children }) => {
	return <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px' }}>{children}</div>
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
