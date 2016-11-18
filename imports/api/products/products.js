import { Mongo } from 'meteor/mongo';
import { _ } from 'meteor/underscore';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Lists } from '../lists/lists.js';
import { Brands } from '../brands/brands.js';
import { Types } from '../types/types.js';

/* eslint prefer-arrow-callback: ["error", { "allowNamedFunctions": true }] */
class ProductsCollection extends Mongo.Collection {}

export const Products = new ProductsCollection('Products');
Products.schema = new SimpleSchema({
  listId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoform: {
      options() {
        return _.map(Lists.find().fetch(), (list) => {
          const currentList = list;
          return {
            label: currentList.name,
            value: currentList._id,
          };
        });
      },
    },
  },
  createdAt: {
    type: Date,
    autoValue() {
      if (this.isInsert) {
        return new Date();
      }
      return true;
    },
  },
  name: {
    type: String,
  },
  category: {
    type: Object,
  },
  'category.name': {
    type: String,
  },
  desc: {
    type: String,
    optional: true,
    autoform: {
      rows: 5,
    },
  },
  price: {
    type: Object,
  },
  'price.currency': {
    type: String,
  },
  'price.value': {
    type: Number,
  },
  brand: {
    type: String,
    autoform: {
      options() {
        return _.map(Brands.find().fetch(), (brand) => {
          const currentBrand = brand;
          return {
            label: currentBrand.name,
            value: currentBrand._id,
          };
        });
      },
    },
  },
  type: {
    type: String,
    autoform: {
      options() {
        return _.map(Types.find().fetch(), (type) => {
          const currentType = type;
          return {
            label: currentType.name,
            value: currentType._id,
          };
        });
      },
    },
  },
  img: {
    type: [Object],
    optional: true,
  },
  video: {
    type: [Object],
    optional: true,
  },
  sex: {
    type: String,
    allowedValues: ['male', 'female', 'child'],
  },
  properties: {
    type: Object,
    optional: true,
  },
  count: {
    type: Number,
  },
  comments: {
    type: [Object],
    optional: true,
  },
});

Products.attachSchema(Products.schema);

Products.helpers({
  list() {
    return Lists.findOne(this.listId);
  },
  editableBy(userId) {
    return this.list().editableBy(userId);
  },
});
