import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

export const SimpleMap = () => {
	const [defaultProps] = React.useState({
		center: {
			lat: 59.95,
			lng: 30.33,
		},
		zoom: 11,
	})

	return (
		<div style={{ height: '500px', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyDugWtdHDD6Lof6JSpKkKrxYDttqcFb55Y' }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
			</GoogleMapReact>
		</div>
	)
}
