import React from 'react';
import ReactDOM from 'react-dom';
import AuthPage from './AuthPage.jsx';

import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsUIWrapper extends React.Component {
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.loginButtons,
        ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }

  render() {
    const content = (
        <span ref="container" ></span>
    );
    // Just render a placeholder container that will be filled in
    return <AuthPage content={content} />;
  }
}

AccountsUIWrapper.contextTypes = {
  router: React.PropTypes.object,
};
