import React from 'react';
import Cart from './Cart.jsx';

export default class ListHeader extends React.Component {
  render() {
    const { productCart, subTotalPrice } = this.props;
    return (
      <header id="header">
        <div className="container">
          <div className="header-inner">
            <div className="branding">
              <h1 className="logo">
                <a href="/">
                  <img src="images/logo@2x.png" alt="" width="25" height="26" />
                  Archery
                </a>
              </h1>
            </div>
            <nav id="nav">
              <ul className="header-top-nav">
                <Cart productCart={productCart} subTotalPrice={subTotalPrice} />
                <li className="mini-search">
                  <a href="#"><i className="fa fa-search has-circle"></i></a>
                  <div className="main-nav-search-form">
                    <form method="get" role="search">
                      <div className="search-box">
                        <input type="text" id="s" name="s" value="" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                      </div>
                    </form>
                  </div>
                </li>
                <li className="visible-mobile">
                  <a href="#mobile-nav-wrapper" data-toggle="collapse">
                    <i className="fa fa-bars has-circle"></i>
                  </a>
                </li>
              </ul>
              <ul id="main-nav" className="hidden-mobile">
                <li className="menu-item-has-children">
                  <a href="index.html">Home</a>
                  <ul className="sub-nav">
                    <li><a href="/">Homepage 1</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Pages</a>
                </li>
                <li className="menu-item-has-children mega-menu-item mega-column-4">
                  <a href="#">Shortcodes</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Portfolio</a>
                </li>
                <li className="menu-item-has-children mega-menu-item mega-column-6">
                  <a href="#">Blog</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Contact</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Shop</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

ListHeader.propTypes = {
  productCart: React.PropTypes.array,
  subTotalPrice: React.PropTypes.number,
};


ListHeader.contextTypes = {
  router: React.PropTypes.object,
};
