/**
 * Created by helga on 23.10.16.
 */

import { _ } from 'meteor/underscore';
import { createContainer } from 'meteor/react-meteor-data';
import CartPage from '../pages/CartPage.jsx';
import { Cart } from '../../api/cart/cart';

export default CartPageContainer = createContainer(({}) => {
	const loading = !FlowRouter.subsReady(),
		cart = Cart.findOne();
	let products = Boolean(cart) ? cart.userCartProducts() : [],
		subTotalPrice = Boolean(cart) ? cart.getSubTotalPrice(products) : 0;
	const isExistPage = !loading;
	return {
		loading,
		isExistPage,
		products: isExistPage ? products : [],
		subTotalPrice
	};
}, CartPage);
