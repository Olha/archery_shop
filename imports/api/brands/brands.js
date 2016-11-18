import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class BrandsCollection extends Mongo.Collection {}

export const Brands = new BrandsCollection('Brands');

Brands.schema = new SimpleSchema({
  _id: { type: String },
  name: { type: String },
});

Brands.attachSchema(Brands.schema);

Brands.helpers({});
