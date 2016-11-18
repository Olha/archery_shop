/* global Utils: true, Schemas: true */
/* eslint no-undef: "error" */

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Schemas = {};
Schemas.updatePassword = new SimpleSchema({
  old: {
    type: String,
    label: 'Current Password',
    max: 50,
  },
  new: {
    type: String,
    min: 6,
    max: 20,
    label: 'New Password',
  },
  confirm: {
    type: String,
    min: 6,
    max: 20,
    label: 'Confirm new Password',
  },
});
