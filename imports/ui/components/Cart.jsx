/**
 * Created by helga on 28.10.16.
 */

import React from 'react';
import { _ } from 'meteor/underscore';
import { FlowHelpers } from '../../../lib/client/route-helpers';

export default class Cart extends React.Component {
  render() {
    const { productCart, subTotalPrice } = this.props;
    return (
      <li className="mini-cart menu-item-has-children">
        <a href="#"><i className="fa fa-shopping-cart has-circle"></i></a>
        <div className="sub-nav cart-content">
          <ul className="product-list product-list-widget">
            {
              _.map(productCart, (product) => (
                <li key={product._id}>
                  <div className="product-image">
                    <a href={FlowHelpers.pathFor(`/lists/${product.listId}/products/${product._id}`)}>
                      <img alt="" src="http://placehold.it/58x63" />
                    </a>
                  </div>
                  <div className="product-content">
                    <a href={FlowHelpers.pathFor(`/lists/${product.listId}/products/${product._id}`)} title={product.name} className="product-title">
                      {product.name}
                    </a>
                    <span className="product-price">{product.price.currency}{product.price.value} X {product.currentCount}</span>
                  </div>
                </li>
              ))
            }
          </ul>
          <hr />
          <div className="st-table">
            <div className="cart-action">
              <a href={FlowHelpers.pathFor('/cart')} className="btn-view-cart btn btn-sm style4"><i className="fa fa-shopping-cart"></i>View Cart</a>
            </div>
            <div className="cart-price">Total: <span className="total-price">${subTotalPrice}</span></div>
          </div>
        </div>
      </li>
    );
  }
}

Cart.propTypes = {
  productCart: React.PropTypes.array,
  subTotalPrice: React.PropTypes.number,
};
