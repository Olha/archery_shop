import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Products } from '../products/products.js';

class ListsCollection extends Mongo.Collection {}

export const Lists = new ListsCollection('Lists');

Lists.schema = new SimpleSchema({
  _id: { type: String },
  name: { type: String },
  incompleteCount: { type: Number,
    defaultValue: 0,
  },
});

Lists.attachSchema(Lists.schema);

Lists.helpers({
  // A list is considered to be private if it has a userId set
  isPrivate() {
    return !!this.userId;
  },
  isLastPublicList() {
    const publicListCount = Lists.find({ userId: { $exists: false } }).count();
    return !this.isPrivate() && publicListCount === 1;
  },
  editableBy(userId) {
    if (!this.userId) {
      return true;
    }

    return this.userId === userId;
  },
  products() {
    return Products.find({ listId: this._id });
  },
});
