import { Hotline, Logo, Navbar, SlideShow, CardHotline, CardServices } from 'Components'
function App() {
	return (
		<div className='App'>
			<Hotline />
			<Logo />
			<Navbar />
			<SlideShow />
			<CardHotline title='HỖ TRỢ TRỰC TUYẾN' />
			<CardServices />
		</div>
	)
}

export default App
