import React from 'react';
import AccountsUIWrapper from '../pages/AccountsUIWrapper.jsx';

export default class UserMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className='user-menu vertical'>
          <AccountsUIWrapper />
        </div>
    )
  }
}

UserMenu.propTypes = {
  user: React.PropTypes.object,
  logout: React.PropTypes.func,
};
