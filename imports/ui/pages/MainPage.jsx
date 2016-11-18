import React from 'react';
import MainHeader from '../components/MainHeader.jsx';
import MainFooter from '../components/MainFooter.jsx';
import BrandSlider from '../components/BrandSlider.jsx';
import ProductsMainPageFilter from '../components/ProductsMainPageFilter.jsx';
import NewArrivalBlock from '../components/NewArrivalBlock.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import Message from '../components/Message.jsx';
import { _ } from 'meteor/underscore';

export default class MainPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { isExistPage, loading, products, brands } = this.props;

		if (!isExistPage) {
			return <NotFoundPage/>;
		}

		return (
			<div id='page-wrapper'>
				<MainHeader/>
				{ loading ? <Message title='Loading...'/> :
					<section id='content'>
						<div className='container'>
							<div id='main'>
								<NewArrivalBlock />
								<ProductsMainPageFilter products={products}/>
								<BrandSlider brands={brands}/>
							</div>
						</div>
					</section>
				}
				<footer id='footer' className='style4'>
					<MainFooter/>
				</footer>
			</div>
		);
	}
}
