import React from 'react';
import ProductItem from '../components/ProductItem.jsx';
import Message from '../components/Message.jsx';
import { displayError } from '../helpers/errors.js';
import { _ } from 'meteor/underscore';
import Masonry from 'react-masonry-component';

import {
} from '../../api/products/methods';

export default class ProductsMainPageFilter extends React.Component {
	constructor(props) {
		super(props);

		const { products } = props;
		this.state = {
			filterTitle: 'All products',
			products: products,
			allProducts: _.sample(products, 8),
			newArrivalProducts: _.sortBy(products, 'createdAt')
		};
		this.getAllProducts = this.getAllProducts.bind(this);
		this.getNewArrivalProducts = this.getNewArrivalProducts.bind(this);
	}

	getAllProducts () {
		this.setState({
			filterTitle: 'All products',
			products: this.state.allProducts
		});
	}
	getNewArrivalProducts() {
		this.setState({
			filterTitle: 'New arrivals',
			products: this.state.newArrivalProducts
		});
	}

	render() {
		let Products;
		if (!this.state.products || !this.state.products.length) {
			Products = (
				<Message
					title='No products here'
					subtitle='Change searching'
				/>
			);
		} else {
			Products = this.state.products.map(product => (
				<ProductItem
					product={product}
					key={product._id}
				/>
			));
		}
		return (
			<div className='product-wrapper post-wrapper block'>
				<div className='post-filters'>
					<h3 className='font-normal filter-title'>{this.state.filterTitle}</h3>
					<a onClick={this.getAllProducts} className='btn btn-sm style4 hover-blue active' title='All Products'>All</a>
					<a onClick={this.getNewArrivalProducts} className='btn btn-sm style4 hover-blue' title='New Arrivals'>New Arrivals</a>
				</div>
				<div className='iso-container iso-col-4 style-masonry has-column-width products'>
					<Masonry
						className={'my-gallery-class'} // default ''
						elementType={'ul'} // default 'div'
						options={{}} // default {}
						disableImagesLoaded={false} // default false
						updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
					>
						{ Products }
					</Masonry>
				</div>
			</div>
		);
	}
}
