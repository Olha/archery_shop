import React from 'react';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import Message from '../components/Message.jsx';
import ProductItemCart from '../components/ProductItemCart.jsx';
import BaseHeader from '../components/BaseHeader.jsx';
import MainFooter from '../components/MainFooter.jsx';

export default class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {}
  render() {
    const { isExistPage, loading, products, subTotalPrice } = this.props;
    if (!isExistPage) {
      return <NotFoundPage />;
    }
    return (
      <div id="page-wrapper">
        <BaseHeader />
        { loading ? <Message title="Loading..." /> :
          <section id="content">
            <div className="container">
              <div className="woocommerce">
                <form>
                  <table className="shop_table cart box-sm">
                    <thead>
                    <tr>
                      <th className="product-remove">&nbsp;</th>
                      <th className="product-thumbnail">&nbsp;</th>
                      <th className="product-name">Products</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map(product => (
                      <ProductItemCart product={product} key={product._id} />
                    ))}
                    <tr>
                      <td className="actions" colSpan="6">
                        <div className="coupon">
                          <input placeholder="Enter coupon code" value="" id="coupon_code"
                            className="input-text"
                            onChange={this.handleChange} name="coupon_code"
                          />
                          <button name="apply_coupon" className="btn btn-medium style2">
                            Apply
                          </button>
                        </div>
                        <button className="btn btn-medium style1">Proceed to Checkout</button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </form>
                <div className="cart-collaterals row">
                  <div className="cart_totals col-sm-offset-7 col-md-offset-8 clearfix box">
                    <div className="col-xs-12">
                      <h4>Cart Totals</h4>
                      <table>
                        <tbody>
                        <tr className="cart-subtotal">
                          <th>Cart Subtotal</th>
                          <td><span className="amount">${subTotalPrice}</span></td>
                        </tr>
                        <tr className="tax">
                          <th>Tax</th>
                          <td>$0.00</td>
                        </tr>
                        <tr className="order-total">
                          <th>Order Total</th>
                          <td><span className="amount">${subTotalPrice}</span></td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }
        <footer id="footer" className="style4">
          <div className="callout-box style2">
            <div className="container">
              <div className="callout-content">
                <div className="callout-text">
                  <h4>Buy all products</h4>
                </div>
                <div className="callout-action">
                  <a href="#" className="btn style4">Purchase</a>
                </div>
              </div>
            </div>
          </div>
          <MainFooter />
        </footer>
      </div>
    );
  }
}

CartPage.propTypes = {
  isExistPage: React.PropTypes.bool,
  loading: React.PropTypes.bool,
  products: React.PropTypes.array,
  subTotalPrice: React.PropTypes.number,
};
