/**
 * Created by helga on 22.07.16.
 */

/* eslint prefer-arrow-callback: ["error", { "allowNamedFunctions": true }] */

import { Meteor } from 'meteor/meteor';
import { Cart } from '../cart.js';
import { check } from 'meteor/check';

Meteor.publish('cart.public', function cartPublic() {
  return Cart.find({});
});

Meteor.publish('user.cart.public', function userCartPublic(contactId) {
  check(contactId, String);
  return Cart.find({ contactId });
});
