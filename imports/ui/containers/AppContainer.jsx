import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Session } from 'meteor/session';
import { Lists } from '../../api/lists/lists.js';
import { Cart } from '../../api/cart/cart';
import { Products } from '../../api/products/products';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

export default AppContainer = createContainer(() => {
  const publicHandle = FlowRouter.subsReady(),
	  cart = Cart.findOne();
	let productCart = Boolean(cart) ? cart.userCartProducts() : [],
		subTotalPrice = Boolean(cart) ? cart.getSubTotalPrice(productCart) : 0;
  return {
    user: Meteor.user(),
    loading: !(publicHandle),
    connected: Meteor.status().connected,
	  productCart,
	  subTotalPrice,
    lists: Lists.find({ $or: [
      { userId: { $exists: false } },
      { userId: Meteor.userId() },
    ] }).fetch(),
  };
}, App);
