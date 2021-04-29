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
	ContainerRow,
	ContainerColumn,
	ContainerContent,
	ScrollButton,
	PhoneCall,
} from 'Components'
import { Product, PostsPage, Contact } from 'pages'
import { Switch, Route } from 'react-router-dom'
import { purchaseList } from 'constants/purchase'
import { listOldProduct } from 'constants/old-products'
import { listContentServices } from 'constants/content-services'
import { listServicesWithImg } from 'constants/list-services-img'
function App() {
	return (
		<div className='App'>
			<PhoneCall />
			<ScrollButton />
			<Hotline />
			<Logo />
			<Navbar />
			<PaddingContent>
				<SlideShow />
				<ContainerRow>
					<ContainerContent>
						<Switch>
							{listContentServices.map((list) => (
								<Route exact path={`/posts/${list.href}`}>
									<PostsPage list={list} />
								</Route>
							))}
							<Route exact path='/services'>
								<News title='Dịch vụ' list={listServicesWithImg} />
							</Route>
							<Route exact path='/contact' component={Contact} />
							<Route exact path='/products' component={Product} />
						</Switch>
					</ContainerContent>
					<ContainerColumn>
						<CardHotline title='HỖ TRỢ TRỰC TUYẾN' />
						<CardServices />
					</ContainerColumn>
				</ContainerRow>

				<div className='mt-30'>
					<News list={purchaseList} title='DỊCH VỤ THU MUA ĐỒ CŨ' />
				</div>
				<div className='mt-30'>
					<News list={listOldProduct} title='TIN TỨC ĐỒ CŨ' />
				</div>
			</PaddingContent>

			<Footer />
		</div>
	)
}

export default App
