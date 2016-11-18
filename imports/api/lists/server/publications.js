/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { Lists } from '../lists.js';

Meteor.publish('lists.public', function listsPublic() {
  return Lists.find({});
});
