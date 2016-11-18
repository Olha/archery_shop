/**
 * Created by helga on 26.07.16.
 */
/* eslint prefer-arrow-callback: ["error", { "allowNamedFunctions": true }] */

import { Meteor } from 'meteor/meteor';
import { Types } from '../types.js';

Meteor.publish('types.public', function typesPublic() {
  return Types.find({});
});

