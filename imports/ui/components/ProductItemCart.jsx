/**
 * Created by helga on 03.11.16.
 */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { FlowHelpers } from '../../../lib/client/route-helpers';
import { displayError } from '../helpers/errors.js';
import Quantity from './Quantity.jsx';

import {
  removeCartItem } from '../../api/cart/methods';

export default class ProductItemCart extends React.Component {
  getContactId() {
    return Meteor.userId() || Session.get('session_id');
  }
  removeFromCart(product) {
    const cartItem = {
      contactId: this.getContactId(),
      productId: product._id,
    };
    const response = removeCartItem.call(cartItem, displayError);
    if (response) {
      product.isAdded = false;
    }
  }
  render() {
    const { product } = this.props;
    return (
      <tr className="cart_item">
        <td className="product-remove">
          <a onClick={this.removeFromCart.bind(this, product)}><i className="fa fa-times"></i></a>
        </td>
        <td className="product-thumbnail">
          <a href="#" className="attachment-shop_thumbnail wp-post-image">
            <img src="http://placehold.it/58x63" alt="" />
          </a>
        </td>
        <td className="product-name">
          <a href={FlowHelpers.pathFor(`/lists/${product.listId}/products/${product._id}`)} title={product.name}>
            {product.name}
          </a>
        </td>
        <td className="product-price">
          {product.count ?
            <span className="amount">{product.price.currency}{product.price.value}</span>
            : null
          }
        </td>
        <td className="product-quantity">
          {product.count ?
            <Quantity product={ product } />
            : null
          }
        </td>
        <td className="product-subtotal">
          {product.count ?
            <span className="amount">{product.price.currency}{product.totalPrice}</span>
            : <span className="amount">No product</span>
          }
        </td>
      </tr>
    );
  }
}

ProductItemCart.propTypes = {
  product: React.PropTypes.object,
};
