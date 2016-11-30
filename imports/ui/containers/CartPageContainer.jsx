/**
 * Created by helga on 23.10.16.
 */

/* global CartPageContainer:true */
/* eslint no-undef: "error" */

import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';
import CartPage from '../pages/CartPage.jsx';
import { Cart } from '../../api/cart/cart';

export default CartPageContainer = createContainer(() => {
  const loading = !FlowRouter.subsReady();
  const cart = Cart.findOne();
  const isCart = Boolean(cart);
  const products = isCart ? cart.userCartProducts() : [];
  const subTotalPrice = isCart ? cart.getSubTotalPrice(products) : 0;
  const isExistPage = !loading;
  return {
    loading,
    isExistPage,
    products: isExistPage ? products : [],
    subTotalPrice,
  };
}, CartPage);
