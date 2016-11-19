/* eslint arrow-body-style: ["error", "always"] */
/* eslint no-unused-expressions: "error" */
/* eslint no-param-reassign: "error" */
/* eslint-env es6 */

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Products } from '../products/products';
import { _ } from 'meteor/underscore';

class CartCollection extends Mongo.Collection {}

export const Cart = new CartCollection('Cart');

Cart.schema = new SimpleSchema({
  contactId: {
    type: String,
    autoform: {
      options() {
        return _.map(Meteor.users.find().fetch(), (user) => {
          return {
            label: user.username,
            value: user._id,
          };
        });
      },
    },
  },
  'products.$': {
    type: Object,
    optional: true,
  },
  'products.$.item': {
    type: String,
    autoform: {
      options() {
        return _.map(Products.find().fetch(), (product) => {
          return {
            label: product.name,
            value: product._id,
          };
        });
      },
    },
  },
  'products.$.count': {
    type: Number,
  },
});

Cart.attachSchema(Cart.schema);

const getCurrentCartProduct = (cartItems, product) => {
  const pId = product._id;
  return _.find(cartItems, (elem) => {
    return elem.item === pId;
  });
};

const updateTotalPrice = (cartProduct, dbProduct) => {
  const product = dbProduct;
  if (Boolean(cartProduct)) {
    product.currentCount = cartProduct.count || 0;
    product.totalPrice = product.currentCount * product.price.value;
    product.isAdded = true;
  }
  return product;
};

const getCartProduct = (cartItems, product, isAdded) => {
  const currentCartProduct = getCurrentCartProduct(cartItems, product);
  return updateTotalPrice(currentCartProduct, product, isAdded);
};

const getProductsList = (cartItems, products) => {
  return _.filter(products, (product) => {return getCartProduct(cartItems, product); }) || [];
};

Cart.helpers({
  userCartProducts() {
    const productIds = _.map(this.products, (elem) => {
      return elem.item;
    });
    const products = Products.find({ _id: { $in: productIds } }).fetch();
    return getProductsList(this.products, products);
  },
  getSubTotalPrice(products) {
    return _.reduce(
      products,
      (sum, product) => {
        return product ? sum + product.totalPrice : sum;
      }, 0
    );
  },
  getCartProduct(product) {
    return getCartProduct(this.products, product);
  },
  getProducts(products) {
    return getProductsList(this.products, products);
  },
});
