import React from 'react';
import Slider from 'react-slick';
import AddToCart from './AddToCart.jsx';
import Quantity from './Quantity.jsx';

export default class ProductItemDetails extends React.Component {
  render() {
    const settingsSlider = {
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const { product } = this.props;
    return (
      <div className="row single-product-details">
        <div className="product-images col-sm-6 box-lg">
          <div id="sync1" className="owl-carousel images">
            <Slider { ...settingsSlider } >
              <div className="item easyzoom easyzoom--overlay">
                <a href="http://placehold.it/1132x1296"><img src="http://placehold.it/566x648" alt="" /></a>
              </div>
              <div className="item easyzoom easyzoom--overlay">
                <a href="http://placehold.it/1132x1296"><img src="http://placehold.it/566x648" alt="" /></a>
              </div>
              <div className="item easyzoom easyzoom--overlay">
                <a href="http://placehold.it/1132x1296"><img src="http://placehold.it/566x648" alt="" /></a>
              </div>
              <div className="item easyzoom easyzoom--overlay">
                <a href="http://placehold.it/1132x1296"><img src="http://placehold.it/566x648" alt="" /></a>
              </div>
              <div className="item easyzoom easyzoom--overlay">
                <a href="http://placehold.it/1132x1296"><img src="http://placehold.it/566x648" alt="" /></a>
              </div>
            </Slider>
          </div>
        </div>
        <div className="summary entry-summary col-sm-6 box-lg">
          <div className="clearfix">
            <h2 className="product-title entry-title">{ product.name }</h2>
            <span className="star-rating" title="4" data-toggle="tooltip">
							<span data-stars="4"></span>
						</span>
          </div>
          <span className="product-price box">
            { product.price.currency }{ product.price.value }
          </span>
          <p>{ product.description }</p>
          <dl className="product-meta">
            <dt className="product-category">Category:</dt>
            <dd>Fashion</dd>
          </dl>
          <form className="variations-form cart">
            <div className="single-variation-wrap">
              { product.isAdded && product.count ?
                <div className="qty-wrap">
                  <label>Quantity</label>
                  <Quantity product={ product } />
                </div>
                : null
              }
              <div className="variation-action">
                <AddToCart product={ product } />
                <a href="#" className="btn btn-medium style2">
                  <i className="fa fa-heart"></i>Add To Wishlist</a>
              </div>
            </div>
          </form>
          <div className="social-wrap">
            <label>Share with friends</label>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fa fa-twitter has-circle" data-toggle="tooltip" data-placement="top" title=""></i></a>
              <a href="#" className="social-icon">
                <i className="fa fa-facebook has-circle" data-toggle="tooltip" data-placement="top" title=""></i></a>
              <a href="#" className="social-icon">
                <i className="fa fa-google-plus has-circle" data-toggle="tooltip" data-placement="top" title=""></i></a>
              <a href="#" className="social-icon">
                <i className="fa fa-linkedin has-circle" data-toggle="tooltip" data-placement="top" title=""></i></a>
              <a href="#" className="social-icon">
                <i className="fa fa-skype has-circle" data-toggle="tooltip" data-placement="top" title=""></i></a>
              <a href="#" className="social-icon">
                <i className="fa fa-dribbble has-circle" data-toggle="tooltip" data-placement="top" title=""></i></a>
              <a href="#" className="social-icon">
                <i className="fa fa-tumblr has-circle" data-toggle="tooltip" data-placement="top" title=""></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductItemDetails.propTypes = {
  product: React.PropTypes.object,
}
