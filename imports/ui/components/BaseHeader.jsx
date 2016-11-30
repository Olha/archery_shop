import React from 'react';

export default class BaseHeader extends React.Component {
  render() {
    return (
      <div className="page-title-container">
        <div className="page-title">
          <div className="container">
            <h1 className="entry-title">Shopping Cart</h1>
          </div>
        </div>
        <ul className="breadcrumbs">
          <li><a href="/">Home</a></li>
          <li><a href="#">PAGES</a></li>
          <li className="active">Shop</li>
        </ul>
      </div>
    );
  }
}