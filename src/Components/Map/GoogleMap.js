import { Map, GoogleApiWrapper } from 'google-maps-react'
export const MapComponent = (props) => {
	return (
		<iframe
			title='Map'
			width='600'
			height='450'
			loading='lazy'
			allowfullscreen
			src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCakxLYJKfOu9llBGECqiRCksMBYO1k9EM
    &q=Space+Needle,Seattle+WA'
		></iframe>
	)
}
