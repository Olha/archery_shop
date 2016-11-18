import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Products } from '../../api/products/products.js';
import { Cart } from '../../api/cart/cart';
import { createContainer } from 'meteor/react-meteor-data';
import ProductPage from '../pages/ProductPage.jsx';

export default ProductPageContainer = createContainer(({ params: { id,  productId} }) => {
	const loading = !FlowRouter.subsReady('productDetails'),
		cart = Cart.findOne();
	let baseProduct = Products.findOne(productId) || {},
		product = Boolean(cart) ? cart.getCartProduct(baseProduct) : baseProduct;
	const productExists = !loading && !!product;
	return {
		loading,
		product,
		productExists
	};
}, ProductPage);
