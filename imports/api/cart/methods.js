import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';
import { Cart } from './cart.js';

export const addToCart = new ValidatedMethod({
  name: 'cart.add',
  validate: new SimpleSchema({
    contactId: { type: String },
    productId: { type: String },
    count: { type: Number },
  }).validator(),
  run({ contactId, productId, count }) {
    const isExistsCart = Cart.findOne({ contactId });
    /* in future use upsert */
    if (isExistsCart) {
      Cart.update({ contactId },
        { $push: {
          products: {
            item: productId,
            count },
        },
        });
    } else {
      Cart.insert({
        contactId,
        products: [{
          item: productId,
          count,
        }],
      });
    }
  },
});

export const changeCartItemCount = new ValidatedMethod({
  name: 'cart.item.count.change',
  validate: new SimpleSchema({
    contactId: { type: String },
    productId: { type: String },
    count: { type: Number },
  }).validator(),
  run({ contactId, productId, count }) {
    return Cart.update(
      { contactId, 'products.item': productId },
      { $set: { 'products.$.count': count } });
  },
});


export const updateCartItemId = new ValidatedMethod({
  name: 'cart.item.id.update',
  validate: new SimpleSchema({
    cartId: { type: String },
    contactId: { type: String },
  }).validator(),
  run({ cartId, contactId }) {
    Cart.update({ _id: cartId },
      { $set: { contactId } }
    );
  },
});

export const removeCartItem = new ValidatedMethod({
  name: 'cart.item.remove',
  validate: new SimpleSchema({
    contactId: { type: String },
    productId: { type: String },
  }).validator(),
  run({ contactId, productId }) {
    Cart.update({ contactId },
      { $pull: { products: { item: productId } } });
  },
});

const CART_METHODS = _.pluck([
  addToCart,
  changeCartItemCount,
  updateCartItemId,
  removeCartItem,
], 'name');

if (Meteor.isServer) {
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(CART_METHODS, name);
    },

    // Rate limit per connection ID
    connectionId() { return true; },
  }, 5, 1000);
}
