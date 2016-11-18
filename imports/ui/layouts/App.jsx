import { AppContainer as AppCont } from 'react-hot-loader';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session'; // XXX: SESSION
import { Lists } from '../../api/lists/lists.js';
import UserMenu from '../components/UserMenu.jsx';
import ListList from '../components/ListList.jsx';
import ListHeader from '../components/ListHeader.jsx';
import ConnectionNotification from '../components/ConnectionNotification.jsx';
import Loading from '../components/Loading.jsx';

const CONNECTION_ISSUE_TIMEOUT = 5000;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showConnectionIssue: false,
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      /* eslint-disable react/no-did-mount-set-state */
      this.setState({ showConnectionIssue: true });
    }, CONNECTION_ISSUE_TIMEOUT);
  }


  logout() {
    Meteor.logout();
  }

  render() {
    const { showConnectionIssue } = this.state;
    const {
      user,
      connected,
      loading,
	    subTotalPrice,
	    productCart,
      main,
      lists,
      children,
      location,
    } = this.props;

    // clone route components with keys so that they can
    // have transitions
    const clonedChildren = children && React.cloneElement(children, {
      key: location.pathname,
    });
    return (
      <AppCont>
	      <div id='page-wrapper'>
		      <ListHeader productCart={productCart} subTotalPrice={subTotalPrice}/>
          <section>
            <UserMenu user={user} logout={this.logout}/>
            <ListList lists={lists}/>
          </section>
          {showConnectionIssue && !connected
            ? <ConnectionNotification/>
            : null}
          <div id='content-container'>
            {main}
            <ReactCSSTransitionGroup
             transitionName='fade'
             transitionEnterTimeout={200}
             transitionLeaveTimeout={200}
             >
             {loading
             ? <Loading key='loading'/>
             : clonedChildren}
             </ReactCSSTransitionGroup>
          </div>
        </div>
      </AppCont>
    );
  }
}

App.propTypes = {
  user: React.PropTypes.object,      // current meteor user
  connected: React.PropTypes.bool,   // server connection status
  loading: React.PropTypes.bool,     // subscription status
  lists: React.PropTypes.array,      // all lists visible to the current user
  children: React.PropTypes.element, // matched child route component
  location: React.PropTypes.object,  // current router location
  params: React.PropTypes.object,    // parameters of the current route
};
