/**
 * Created by helga on 22.07.16.
 */
/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { Brands } from '../brands.js';

Meteor.publish('brands.public', function brandsPublic() {
  return Brands.find({});
});
