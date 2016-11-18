import React from 'react';
import { Session } from 'meteor/session';
import { displayError } from '../helpers/errors.js';
import {
	changeCartItemCount } from '../../api/cart/methods';

export default class Quantity extends React.Component {
	constructor(props) {
		super(props);
	}
	getContactId() {
		return Meteor.userId() || Session.get('session_id');
	}
	changeCartItemCount(product, event) {
		event.preventDefault();
		let count = Number(event.target.value);

		if (count > product.count || count < 0) {
			return;
		}
		let cartItem = {
			contactId: this.getContactId(),
			productId: product._id,
			count
		};
		changeCartItemCount.call(cartItem, displayError);
	}

	render() {
		const { product } = this.props;

		return (
			<div>
				<input type='number' max={product.count} min='0' className='input-text qty text'
				       onChange={this.changeCartItemCount.bind(this, product)}
				       value={product.currentCount} name=''/>
			</div>
		);
	}
}

Quantity.propTypes = {
	product: React.PropTypes.object,
};