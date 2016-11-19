import React from 'react';
import { FlowHelpers } from '../../../lib/client/route-helpers';
import { _ } from 'meteor/underscore';
import AddToCart from './AddToCart.jsx';

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product } = this.props;
    return (
      <div className='iso-item-product'>
        <div className='product'>
          <a href={FlowHelpers.pathFor(`/lists/${ product.listId }/products/${ product._id }`)}
             title={product.name} className='product-image'>
            <div className='first-img'>
              <img src='http://placehold.it/540x610' alt='' />
            </div>
            <div className='back-img'>
              <img src='http://placehold.it/540x610' alt=''   />
            </div>
          </a>
          <div className='product-content'>
            <h5 className='product-title'>
              <a href={FlowHelpers.pathFor(`/lists/${ product.listId }/products/${ product._id }`)}>
                {product.name}
              </a>
            </h5>
            <span className='product-price'>
							<span className='currency-symbol'>{product.price.currency}</span>
              {product.price.value}</span>
            <span data-toggle='tooltip' title='4' className='star-rating'>
							<span data-stars='4'></span>
						</span>
          </div>
          <div className='product-action'>
            <AddToCart product={product} />
            <a href='#' className='btn btn-add-to-wishlist'><i className='fa fa-heart'></i></a>
            <a href='ajax/woocommerce-product-quickview.html' className='btn btn-quick-view'><i className='fa fa-search'></i></a>
            <a href='#' className='btn btn-compare'><i className='fa fa-star-half-o'></i></a>
          </div>
        </div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: React.PropTypes.object,
};