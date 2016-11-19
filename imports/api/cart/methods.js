import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';
import { Cart } from './cart.js';
import { Products } from '/imports/api/products/products';

export const addToCart = new ValidatedMethod({
  name: 'cart.add',
  validate: new SimpleSchema({
    contactId: { type: SimpleSchema.RegEx.Id },
    productId: { type: SimpleSchema.RegEx.Id },
    count: {
      type: Number,
      decimal: false,
      min: 1,
      custom() {
        const productId = this.field('productId').value;
        const count = this.value;
        const isCountOK = Products.find({ _id: productId, count: { $lte: count } });
        if (!isCountOK) {
          return console.error('Count is too big');
        }
        return console.info('Added to cart');
      },
    },
  }).validator(),
  run({ contactId, productId, count }) {
    Cart.upsert({
      contactId,
    }, {
      $push: {
        products: {
          item: productId,
          count,
        },
      },
    });
  },
});

export const changeCartItemCount = new ValidatedMethod({
  name: 'cart.item.count.change',
  validate: new SimpleSchema({
    contactId: { type: SimpleSchema.RegEx.Id },
    productId: { type: SimpleSchema.RegEx.Id },
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
    cartId: { type: SimpleSchema.RegEx.Id },
    contactId: { type: SimpleSchema.RegEx.Id },
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
    contactId: { type: SimpleSchema.RegEx.Id },
    productId: { type: SimpleSchema.RegEx.Id },
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
    connectionId() { return true; },
  }, 5, 1000);
}
