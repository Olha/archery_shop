/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { _ } from 'meteor/underscore';
import { check } from 'meteor/check';
import { Products } from '../products.js';
import { Lists } from '../../lists/lists.js';
import { Cart } from '../../cart/cart';

Meteor.publishComposite('products.inList', function productsInList(listId) {
  new SimpleSchema({
    listId: { type: String },
  }).validate({ listId });
  const userId = this.userId;
  return {
    find() {
      const query = {
        _id: listId,
        $or: [{ userId: { $exists: false } }, { userId }],
      };
      const options = {
        fields: { _id: 1 },
      };
      return Lists.find(query, options);
    },
    children: [{
      find(list) {
        return Products.find({ listId: list._id });
      },
    }],
  };
});

Meteor.publishComposite('product.details', function productsDetails(listId, productId) {
  new SimpleSchema({
    productId: { type: String },
  }).validate({ productId });
  const userId = this.userId;
  return {
    find() {
      const query = {
        listId,
        _id: productId,
        $or: [{ userId: { $exists: false } }, { userId }],
      };

      // We only need the _id field in this query, since it's only
      // used to drive the child queries to get the products
      const options = {
        fields: { _id: 1 },
      };

      return Products.find(query, options);
    },

    children: [{
      find(product) {
        return Products.find({ _id: product._id });
      },
    }],
  };
});

Meteor.publish('products.public', function productsPublic() {
  return Products.find({});
});

Meteor.publish('user.cart.products', function userCartPublic(contactId) {
  check(contactId, String);
  const userCart = Cart.findOne({ contactId }) || {};
  const productIds = _.map(userCart.products, (elem) => {
    const currentElem = elem;
    return currentElem.item;
  });
  return Products.find({ _id: { $in: productIds } });
});
