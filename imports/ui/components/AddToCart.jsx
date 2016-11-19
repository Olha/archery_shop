import React from 'react';
import { Session } from 'meteor/session';
import { FlowHelpers } from '../../../lib/client/route-helpers';
import { _ } from 'meteor/underscore';
import { displayError } from '../helpers/errors.js';

import {
	addToCart,
	removeCartItem } from '../../api/cart/methods';

export default class AddToCart extends React.Component {
	constructor(props) {
		super(props);
	}

	getContactId() {
		return Meteor.userId() || Session.get('session_id');
	}

	addToCart(product) {
		let cartItem = {
			contactId: this.getContactId(),
			count: 1,
			productId: product._id
		};
		addToCart.call(cartItem, displayError);
		product.isAdded = true;
	}

	removeFromCart(product) {
		let cartItem = {
			contactId: this.getContactId(),
			productId: product._id
		};
		removeCartItem.call(cartItem, displayError);
		product.isAdded = false;
	}

	render() {
		const { product } = this.props;

		return (
			<a>
				{ product.count && !product.isAdded ?
					<span className='btn btn-add-to-cart' onClick={this.addToCart.bind(this, product)}>
						<i className='fa fa-shopping-cart'></i>Add to cart</span>
					: null }
				{ product.count && product.isAdded ?
					<span className='btn btn-add-to-cart'  onClick={this.removeFromCart.bind(this, product)}>
						<i className='fa fa-shopping-cart'></i>Remove</span>
					: null }
				{ !product.count ?
					<span className='btn btn-add-to-cart'>
						<i className='fa fa-shopping-cart'></i>No product</span>
					: null }
			</a>
		);
	}
}

AddToCart.propTypes = {
	product: React.PropTypes.object,
};