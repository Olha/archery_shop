/**
 * Created by helga on 26.10.16.
 */

import { Meteor } from 'meteor/meteor';

Meteor.methods({
  getSessionId() {
    return this.connection.id;
  },
});
