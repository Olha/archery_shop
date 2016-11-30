import React from 'react';
import Slider from 'react-slick';

export default class NewArrivalBlock extends React.Component {
  render() {
    const settingsSlider = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="brand-section block">
        <div className="iso-container iso-col-4 style-masonry has-column-width new-arrival">
          <div className="iso-item iso-item-one">
            <a href="#" className="image">
              <img src="http://placehold.it/270x818" alt="" /><span className="image-extras"></span>
              <div className="caption-wrapper">
                <h4 className="caption">Mens Fashion</h4>
              </div>
            </a>
          </div>
          <div className="iso-item double-width">
            <div className="item">
              <div className="post-slider owl-carousel">
                <Slider { ...settingsSlider }>
                  <a href="#" className="image hover-style1">
                    <img src="http://placehold.it/570x440" alt="" /><span className="image-extras"></span>
                  </a>
                  <a href="#" className="image hover-style1">
                    <img src="http://placehold.it/570x440" alt="" /><span className="image-extras"></span>
                  </a>
                </Slider>
              </div>
              <div className="caption-wrapper style2">
                <h4 className="caption">new arrivals</h4>
              </div>
            </div>
          </div>
          <div className="iso-item iso-item-two">
            <a href="#" className="image hover-style2">
              <img src="http://placehold.it/270x818" alt="" /><span className="image-extras"></span>
              <div className="caption-wrapper">
                <h4 className="caption">Womens Fashion</h4>
              </div>
            </a>
          </div>
          <div className="iso-item iso-item-three">
            <a href="#" className="image hover-style1">
              <img src="http://placehold.it/270x348" alt="" /><span className="image-extras"></span>
              <div className="caption-wrapper style1">
                <h4 className="caption">new hottest styles</h4>
              </div>
            </a>
          </div>
          <div className="iso-item iso-item-four">
            <a href="#" className="image hover-style2">
              <img src="http://placehold.it/270x348" alt="" /><span className="image-extras"></span>
              <div className="caption-wrapper style1">
                <h4 className="caption">upcoming fashion</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}