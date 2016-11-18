/**
 * Created by helga on 26.07.16.
 */

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class TypesCollection extends Mongo.Collection {}
export const Types = new TypesCollection('Types');
Types.schema = new SimpleSchema({
  _id: { type: String },
  name: { type: String },
});
Types.attachSchema(Types.schema);
Types.helpers({});
