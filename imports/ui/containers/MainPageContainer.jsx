/**
 * Created by helga on 10.11.16.
 */

import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Products } from '../../api/products/products.js';
import { createContainer } from 'meteor/react-meteor-data';
import MainPage from '../pages/MainPage.jsx';
import { Cart } from '../../api/cart/cart';
import { Brands } from '../../api/brands/brands';

export default MainPageContainer = createContainer(({}) => {
	const loading = !FlowRouter.subsReady(),
		cart = Cart.findOne(),
		products = Boolean(cart) ? cart.getProducts() : Products.find().fetch(),
		isExistPage = !loading,
		brands = Brands.find().fetch();
	return {
		loading,
		isExistPage,
		products: isExistPage ? products : [],
		brands
	};
}, MainPage);

