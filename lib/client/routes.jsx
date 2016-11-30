import 'react-hot-loader/patch';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount, withOptions } from 'react-mounter';
import { Session } from 'meteor/session';
// route components
import AppContainer from '../../imports/ui/containers/AppContainer.jsx';
import ListPageContainer from '../../imports/ui/containers/ListPageContainer.jsx';
import MainPageContainer from '../../imports/ui/containers/MainPageContainer.jsx';
import CartPageContainer from '../../imports/ui/containers/CartPageContainer.jsx';
import ProductPageContainer from '../../imports/ui/containers/ProductPageContainer.jsx';

import Redbox from 'redbox-react';

function getContactId() {
  return Session.get('session_id');
}

FlowRouter.route('/', {
  subscriptions() {
    this.register('allList', Meteor.subscribe('lists.public'));
    this.register('allListProducts', Meteor.subscribe('products.public'));
    this.register('brands', Meteor.subscribe('brands.public'));
    this.register('types', Meteor.subscribe('types.public'));
    this.register('cart', Meteor.subscribe('user.cart.public', getContactId()));
  },
  action(params) {
    mount(AppContainer, {
      main: <MainPageContainer params={params} />,
    });
  },
  fastRender: true,
});

const listRoutes = FlowRouter.group({
  prefix: '/lists',
  name: 'category',
  subscriptions() {
    this.register('allList', Meteor.subscribe('lists.public'));
    this.register('brands', Meteor.subscribe('brands.public'));
    this.register('types', Meteor.subscribe('types.public'));
    this.register('cart', Meteor.subscribe('user.cart.public', getContactId()));
  },
});

listRoutes.route('/:_id', {
  subscriptions(params) {
    this.register('listProducts', Meteor.subscribe('products.inList', params._id));
  },
  action(params) {
    mount(AppContainer, {
      main: <ListPageContainer params={ { id: params._id } } />,
    });
  },
});

listRoutes.route('/:_id/products/:productId', {
  subscriptions(params) {
    const contactId = getContactId();
    this.register('cart', Meteor.subscribe('user.cart.public', contactId));
    this.register('cartProducts', Meteor.subscribe('user.cart.products', contactId));
    this.register('productDetails',
      Meteor.subscribe('product.details', params._id, params.productId));
  },
  action(params) {
    mount(AppContainer, {
      main: <ProductPageContainer params={ { id: params._id, productId: params.productId } } />,
    });
  },
});

listRoutes.route('/', {
  subscriptions() {
    // infinite scroll by subs
    this.register('allListProducts', Meteor.subscribe('products.public'));
  },
  action(params) {
    mount(AppContainer, {
      main: <ListPageContainer params={params} />,
    });
  },
});

FlowRouter.route('/cart', {
  subscriptions() {
    const contactId = getContactId();
    this.register('allList', Meteor.subscribe('lists.public'));
    this.register('cart', Meteor.subscribe('user.cart.public', contactId));
    this.register('cartProducts', Meteor.subscribe('user.cart.products', contactId));
  },
  action(params) {
    mount(AppContainer, {
      main: <CartPageContainer params={params} />,
    });
  },
});

FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  subscriptions() {
    this.register('allList', Meteor.subscribe('lists.public'));
    this.register('allList', Meteor.subscribe('lists.public'));
    this.register('brands', Meteor.subscribe('brands.public'));
    this.register('types', Meteor.subscribe('types.public'));
    this.register('cart', Meteor.subscribe('cart.public'));
  },
});

Tracker.autorun(() => {
  if (Meteor.userId()) {
    Session.setAuth('session_id', Meteor.userId());
  } else {
    if (!getContactId()) {
      Meteor.call('getSessionId', (err, id) => Session.setDefaultPersistent('session_id', id));
    }
  }
});

const consoleErrorReporter = ({ error }) => {
  console.error(error);
  return <Redbox error={error} />;
};
consoleErrorReporter.propTypes = {
  error: React.PropTypes.instanceOf(Error).isRequired,
};

// So we can call FlowRotuer again later during hot reload
let localFlowRouter;

const mount2 = withOptions({
  rootId: 'react-root',
}, mount);

mount2(AppContainer, { name: 'App' });

if (module.hot) {
  module.hot.accept([
    '../../imports/ui/containers/AppContainer.jsx',
    '../../imports/ui/containers/ListPageContainer.jsx',
    '../../imports/ui/containers/ProductPageContainer.jsx',
    '../../imports/ui/containers/CartPageContainer.jsx',
    '../../imports/ui/containers/NotFoundPage.jsx',
  ], () => {
    // If any of the above files (or their dependencies) are updated, all we
    // really need to do is re-run the current route's action() method, which
    // will require() the updated modules and re-mount AppContainer
    // (which itself require()'s the updated MainLayout at render time).
    localFlowRouter._current.route._action(localFlowRouter._current.params);
  });
}
