import React from 'react';
import AccountsUIWrapper from '../pages/AccountsUIWrapper.jsx';

export default class UserMenu extends React.Component {
  render() {
    return (
      <div className="user-menu vertical">
        <AccountsUIWrapper />
      </div>
    );
  }
}

