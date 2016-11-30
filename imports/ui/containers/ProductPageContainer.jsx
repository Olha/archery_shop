/* global ProductPageContainer:true */
/* eslint no-undef: "error" */

import { FlowRouter } from 'meteor/kadira:flow-router';
import { Products } from '../../api/products/products.js';
import { Cart } from '../../api/cart/cart';
import { createContainer } from 'meteor/react-meteor-data';
import ProductPage from '../pages/ProductPage.jsx';

export default ProductPageContainer = createContainer(({ params }) => {
  const loading = !FlowRouter.subsReady('productDetails');
  const cart = Cart.findOne();
  const baseProduct = Products.findOne(params.productId) || {};
  const isCart = Boolean(cart);
  const product = isCart ? cart.getCartProduct(baseProduct) : baseProduct;
  const productExists = !loading && !!product;
  return {
    loading,
    product,
    productExists,
  };
}, ProductPage);
