/**
 * Created by helga on 23.09.16.
 */

/* eslint arrow-body-style: ["error"] */
/* eslint-env es6 */

import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';

const pathFor = (path, params) => {
  const query = params && params.query ? FlowRouter._qs.parse(params.query) : {};
  return FlowRouter.path(path, params, query);
};

const urlFor = (...props) => {
  const { path, params } = props;
  return Meteor.absoluteUrl(pathFor(path, params));
};

const currentRoute = (route) => {
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route ? 'active' : '';
};

export const FlowHelpers = {
  pathFor,
  urlFor,
  currentRoute,
};
