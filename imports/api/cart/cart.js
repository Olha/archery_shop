/* eslint arrow-body-style: ["error", "always"] */
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

Cart.helpers({
  userCartProducts() {
    const productIds = _.map(this.products, (elem) => {
      return elem.item;
    });
    const products = Products.find({ _id: { $in: productIds } }).fetch();
    const currentProducts = _.filter(products, (product) => {
      const cartProduct = product;
      const currentProduct = _.find(this.products, (elem) => {
        return elem.item === cartProduct._id;
      });
      if (Boolean(currentProduct)) {
        cartProduct.currentCount = currentProduct.count || 0;
        cartProduct.totalPrice = cartProduct.currentCount * cartProduct.price.value;
        return cartProduct;
      }
      return cartProduct;
    });
    return currentProducts;
  },
  getSubTotalPrice(products) {
    let subTotalPrice = 0;
    _.map(products, (product) => {
      if (Boolean(product)) {
        subTotalPrice += product.totalPrice;
      }
    });
    return subTotalPrice;
  },
  getCartProduct(product) {
    const cartProduct = product;
    const currentProduct = _.find(this.products, (elem) => {
      return elem.item === cartProduct._id;
    });
    if (Boolean(currentProduct)) {
      cartProduct.currentCount = currentProduct.count || 0;
      cartProduct.totalPrice = cartProduct.currentCount * cartProduct.price.value;
      cartProduct.isAdded = true;
    }
    return cartProduct;
  },
  getProducts() {
    const products = Products.find().fetch();
    const currentProducts = _.filter(products, (product) => {
      const baseProduct = product;
      const currentProduct = _.find(this.products, (elem) => {
        return elem.item === baseProduct._id;
      });
      if (Boolean(currentProduct)) {
        baseProduct.currentCount = currentProduct.count || 0;
        baseProduct.totalPrice = baseProduct.currentCount * baseProduct.price.value;
      }
      return baseProduct;
    });
    return currentProducts;
  },
});
