import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';

import { Products } from './products.js';
import { Lists } from '../lists/lists.js';

export const filterProducts = new ValidatedMethod({
	name: 'products.filter',
	validate: new SimpleSchema({
		brand: {
			type: String,
			optional: true},
		type: {
			type: String,
			optional: true},
	}).validator(),
	run({ ...props }) {
		return Products.find(props).fetch();
	},
});
const PRODUCTS_METHODS = _.pluck([
	filterProducts
], 'name');

if (Meteor.isServer) {
	DDPRateLimiter.addRule({
		name(name) {
			return _.contains(PRODUCTS_METHODS, name);
		},

		// Rate limit per connection ID
		connectionId() { return true; },
	}, 5, 1000);
}
