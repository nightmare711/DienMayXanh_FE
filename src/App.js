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
} from 'Components'
import { Product, PostsPage, Contact } from 'pages'
import { Switch, Route } from 'react-router-dom'
import { purchaseList } from 'constants/purchase'
import { listOldProduct } from 'constants/old-products'
import { listContentServices } from 'constants/content-services'
function App() {
	return (
		<div className='App'>
			<Hotline />
			<Logo />
			<Navbar />
			<PaddingContent>
				<SlideShow />
				<ContainerRow>
					<Switch>
						{listContentServices.map((list) => (
							<Route exact path={`/posts/${list.href}`}>
								<PostsPage list={list} />
							</Route>
						))}
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/products' component={Product} />
					</Switch>
					<ContainerColumn>
						<CardHotline title='HỖ TRỢ TRỰC TUYẾN' />
						<CardServices />
					</ContainerColumn>
				</ContainerRow>

				<News list={purchaseList} title='DỊCH VỤ THU MUA ĐỒ CŨ' />
				<News list={listOldProduct} title='TIN TỨC ĐỒ CŨ' />
			</PaddingContent>

			<Footer />
		</div>
	)
}

export default App
