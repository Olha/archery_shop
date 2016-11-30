/**
 * Created by helga on 10.11.16.
 */
/* global MainPageContainer:true */
/* eslint no-undef: "error" */

import { Products } from '../../api/products/products.js';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';
import MainPage from '../pages/MainPage.jsx';
import { Cart } from '../../api/cart/cart';
import { Brands } from '../../api/brands/brands';

export default MainPageContainer = createContainer(() => {
  const loading = !FlowRouter.subsReady();
  const cart = Cart.findOne();
  const baseProducts = Products.find().fetch();
  const isCart = Boolean(cart);
  const products = isCart ? cart.getProducts(baseProducts) : baseProducts;
  const isExistPage = !loading;
  const brands = Brands.find().fetch();
  return {
    loading,
    isExistPage,
    products: isExistPage ? products : [],
    brands,
  };
}, MainPage);
