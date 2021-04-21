import {
	Hotline,
	Logo,
	Navbar,
	SlideShow,
	CardHotline,
	CardServices,
	News,
	PaddingContent,
	Footer,
} from 'Components'
import { purchaseList } from 'constants/purchase'
import { listOldProduct } from 'constants/old-products'
function App() {
	return (
		<div className='App'>
			<Hotline />
			<Logo />
			<Navbar />
			<PaddingContent>
				<SlideShow />
				<CardHotline title='HỖ TRỢ TRỰC TUYẾN' />
				<CardServices />
				<News list={purchaseList} title='DỊCH VỤ THU MUA ĐỒ CŨ' />
				<News list={listOldProduct} title='TIN TỨC ĐỒ CŨ' />
			</PaddingContent>
			<Footer />
		</div>
	)
}

export default App
