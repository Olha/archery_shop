import React from 'react';
import BaseHeader from '../components/BaseHeader';
import MainFooter from '../components/MainFooter.jsx';
import ProductItemDetails from '../components/ProductItemDetails.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import Message from '../components/Message.jsx';

export default class ProductPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { product, productExists, loading } = this.props;
		if (!productExists) {
			return <NotFoundPage/>;
		}

		let Product;
		if (!product.name) {
			Product = (
				<Message
					title='No infromation here'
					subtitle='Sorry, but this product is not available'
				/>
			);
		} else {
			Product = (
				<ProductItemDetails
					product={ product }
				/>
			);
		}

		return (
			<div id='page-wrapper'>
				<BaseHeader/>
				{ loading ? <Message title='Loading...'/> :
					<section id='content'>
						<div className='container'>
							<div className='product type-product'>
								{ Product }
								<div className='woocommerce-tabs tab-container vertical-tab clearfix box'>
									<ul className='tabs'>
										<li><a href='#tab3-1' data-toggle='tab'>Decriptions</a></li>
										<li><a href='#tab3-2' data-toggle='tab'>Additional Details</a></li>
										<li className='active'><a href='#tab3-3' data-toggle='tab'>Reviews</a></li>
										<li><a href='#tab3-4' data-toggle='tab'>Product Tags</a></li>
									</ul>
									<div id='tab3-1' className='tab-content panel entry-content'>
										<div className='tab-pane'>
											<p>{ product.full_description }</p>
										</div>
									</div>
									<div id='tab3-2' className='tab-content panel entry-content'>
										<div className='tab-pane'>
											<dl className='shop_attributes'>
												<dt>Composition:</dt>
												<dd>100% Polyester</dd>
												<dt>Washing:</dt>
												<dd>Please hand wash cool.</dd>
												<dt>Made in:</dt>
												<dd>Australia</dd>
												<dt className='note'>Sizing note:</dt>
												<dd>Because the GFT is a feminine cut, we recommend sticking to your usual size :)</dd>
											</dl>
										</div>
									</div>
									<div id='tab3-3' className='tab-content panel entry-content in active'>
										<div className='tab-pane'>
											<div id='comments'>
												<a href='#' className='btn btn-sm style1 btn-write-review'><i className='fa fa-pencil'></i>Write Review</a>
												<h3>2 Reviews on Geo Dream Dress</h3>
												<ol className='commentlist'>
													<li className='comment'>
														<div className='author-img'>
															<span><img src='http://placehold.it/100x100' alt='' /></span>
														</div>
														<div className='comment-content'>
															<h5 className='comment-author-name'><a href='#'>Anna Brown</a></h5>
															<span data-toggle='tooltip' title='4' className='star-rating'>
																<span data-stars='4'></span>
															</span>
															<span className='comment-date'>12 Nov, 2013</span>
															<div className='description'>
																<p>Nulla mattis rsitmet dolor sollicitudi aliquamquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Lorem ipsum dolor sit amet gravida sagittis lacus. Morbi sit amet mauris mi.</p>
															</div>
														</div>
													</li>
													<li className='comment'>
														<div className='author-img'>
															<span><img src='http://placehold.it/100x100' alt='' /></span>
														</div>
														<div className='comment-content'>
															<h5 className='comment-author-name'><a href='#'>Jessica Marvin</a></h5>
															<span data-toggle='tooltip' title='4' className='star-rating'>
																<span data-stars='4'></span>
															</span>
															<span className='comment-date'>12 Nov, 2013</span>
															<div className='description'>
																<p>Nulla mattis rsitmet dolor sollicitudi aliquamquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Lorem ipsum dolor sit amet gravida sagittis lacus. Morbi sit amet mauris mi.</p>
															</div>
														</div>
													</li>
												</ol>
											</div>
											<div id='review_form'>
												<form>
													<a href='#' className='btn btn-sm style4 btn-back-reviews'><i className='fa fa-long-arrow-left'></i>Back To Reviews</a>
													<h3>Be the first to review “Geo Dream Dress”</h3>
													<div className='row'>
														<div className='col-md-10 col-lg-8'>
															<div className='form-group'>
																<label>Name</label>
																<input type='text' className='input-text full-width' />
															</div>
															<div className='form-group'>
																<label>Email</label>
																<input type='text' className='input-text full-width' />
															</div>
															<div className='form-group'>
																<label>Rating</label>
																<input type='hidden' id='review_score' value='' />
																<span className='input-star-rating'>
																	<input type='radio' value='5' name='review_score' />
																	<input type='radio' value='4' name='review_score' />
																	<input type='radio' value='3' name='review_score' />
																	<input type='radio' value='2' name='review_score' />
																	<input type='radio' value='1' name='review_score' />
																</span>
															</div>
															<div className='form-group'>
																<label>Your review</label>
																<textarea className='input-text full-width' rows='5'></textarea>
															</div>
															<div className='form-group'>
																<button className='btn style1' type='submit'>Submit Review</button>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
									<div id='tab3-4' className='tab-content panel entry-content'>
										<div className='tab-pane'>
											<form className='add-product-tags'>
												<div className='row'>
													<div className='col-md-9 col-lg-7'>
														<div className='form-group'>
															<input type='text' className='input-text full-width' placeholder='Add your tags' />
														</div>
														<div className='form-group'>
															<p>Use spaces to separate tags. Use single quotes (') for phrases.</p>
														</div>
														<div className='form-group'>
															<button type='submit' className='btn btn-medium style1'>Add Tags</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
								<ul className='related products row add-clearfix'>
									<li className='product col-sms-6 col-sm-4 col-lg-3 box'>
										<a className='product-image' href='#'>
											<div className='first-img'>
												<img alt='' src='http://placehold.it/540x610' />
											</div>
											<div className='back-img'>
												<img alt='' src='http://placehold.it/540x610' />
											</div>
										</a>
										<div className='product-content'>
											<h5 className='product-title'><a href='#'>Geo Dream Dress</a></h5>
											<span className='product-price'><span className='currency-symbol'>$</span>112.00</span>
											<span className='star-rating' title='' data-toggle='tooltip' data-original-title='4'>
												<span data-stars='4'></span>
											</span>
										</div>
										<div className='product-action'>
											<a className='btn btn-add-to-cart' href='#'><i className='fa fa-shopping-cart'></i>Add To Cart</a>
											<a className='btn btn-add-to-wishlist' href='#'><i className='fa fa-heart'></i></a>
											<a href='ajax/woocommerce-product-quickview.html' className='btn btn-quick-view'><i className='fa fa-search'></i></a>
											<a className='btn btn-compare' href='#'><i className='fa fa-star-half-o'></i></a>
										</div>
									</li>
									<li className='product col-sms-6 col-sm-4 col-lg-3 box'>
										<a className='product-image' href='#'>
											<div className='first-img'>
												<img alt='' src='http://placehold.it/540x610' />
											</div>
											<div className='back-img'>
												<img alt='' src='http://placehold.it/540x610' />
											</div>
										</a>
										<div className='product-content'>
											<h5 className='product-title'><a href='#'>Floral Cutout Maxi</a></h5>
											<span className='product-price'><span className='currency-symbol'>$</span>135.00</span>
											<span className='star-rating' title='' data-toggle='tooltip' data-original-title='4'>
												<span data-stars='4'></span>
											</span>
										</div>
										<div className='product-action'>
											<a className='btn btn-add-to-cart' href='#'><i className='fa fa-shopping-cart'></i>Add To Cart</a>
											<a className='btn btn-add-to-wishlist' href='#'><i className='fa fa-heart'></i></a>
											<a href='ajax/woocommerce-product-quickview.html' className='btn btn-quick-view'><i className='fa fa-search'></i></a>
											<a className='btn btn-compare' href='#'><i className='fa fa-star-half-o'></i></a>
										</div>
									</li>
									<li className='product col-sms-6 col-sm-4 col-lg-3 box'>
										<a className='product-image' href='#'>
											<div className='first-img'>
												<img alt='' src='http://placehold.it/540x610' />
											</div>
											<div className='back-img'>
												<img alt='' src='http://placehold.it/540x610' />
											</div>
										</a>
										<div className='product-content'>
											<h5 className='product-title'><a href='#'>Dazzling Beaded Shift Dress</a></h5>
											<span className='product-price'><span className='currency-symbol'>$</span>34.80</span>
											<span className='star-rating' title='' data-toggle='tooltip' data-original-title='4'>
												<span data-stars='4'></span>
											</span>
										</div>
										<div className='product-action'>
											<a className='btn btn-add-to-cart' href='#'><i className='fa fa-shopping-cart'></i>Add To Cart</a>
											<a className='btn btn-add-to-wishlist' href='#'><i className='fa fa-heart'></i></a>
											<a href='ajax/woocommerce-product-quickview.html' className='btn btn-quick-view'><i className='fa fa-search'></i></a>
											<a className='btn btn-compare' href='#'><i className='fa fa-star-half-o'></i></a>
										</div>
									</li>
									<li className='product col-sms-6 col-sm-4 col-lg-3 box'>
										<a className='product-image' href='#'>
											<div className='first-img'>
												<img alt='' src='http://placehold.it/540x610' />
											</div>
											<div className='back-img'>
												<img alt='' src='http://placehold.it/540x610' />
											</div>
										</a>
										<div className='product-content'>
											<h5 className='product-title'><a href='#'>Geo Dream Dress</a></h5>
											<span className='product-price'><span className='currency-symbol'>$</span>112.00</span>
											<span className='star-rating' title='' data-toggle='tooltip' data-original-title='4'>
												<span data-stars='4'></span>
											</span>
										</div>
										<div className='product-action'>
											<a className='btn btn-add-to-cart' href='#'><i className='fa fa-shopping-cart'></i>Add To Cart</a>
											<a className='btn btn-add-to-wishlist' href='#'><i className='fa fa-heart'></i></a>
											<a href='ajax/woocommerce-product-quickview.html' className='btn btn-quick-view'><i className='fa fa-search'></i></a>
											<a className='btn btn-compare' href='#'><i className='fa fa-star-half-o'></i></a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</section> }
				<footer id='footer' className='style4'>
					<MainFooter/>
				</footer>
			</div>
		);
	}
}

ProductPage.propTypes = {
};
