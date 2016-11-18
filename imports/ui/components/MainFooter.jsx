import React from 'react';

export default class MainFooter extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className='footer-wrapper'>
					<div className='container'>
						<div className='row add-clearfix same-height'>
							<div className='col-sm-6 col-md-3'>
								<h5 className='section-title box'>Recent Posts</h5>
								<ul className='recent-posts'>
									<li>
										<a href='#' className='post-author-avatar'><span><img src='http://placehold.it/50x50' alt=''/></span></a>
										<div className='post-content'>
											<a href='#' className='post-title'>Website design trends for 2016</a>
											<p className='post-meta'>By <a href='#'>Admin</a>  .  12 Nov, 2016</p>
										</div>
									</li>
									<li>
										<a href='#' className='post-author-avatar'><span><img src='http://placehold.it/50x50' alt=''/></span></a>
										<div className='post-content'>
											<a href='#' className='post-title'>UI experts and modern designs</a>
											<p className='post-meta'>By <a href='#'>Admin</a>  .  12 Nov, 2016</p>
										</div>
									</li>
									<li>
										<a href='#' className='post-author-avatar'><span><img src='http://placehold.it/50x50' alt=''/></span></a>
										<div className='post-content'>
											<a href='#' className='post-title'>Mircale is available in wordpress</a>
											<p className='post-meta'>By <a href='#'>Admin</a>  .  12 Nov, 2016</p>
										</div>
									</li>
								</ul>
							</div>
							<div className='col-sm-6 col-md-3'>
								<h5 className='section-title box'>Popular Tags</h5>
								<div className='tags'>
									<a href='#' className='tag'>masonry</a>
									<a href='#' className='tag'>responsive</a>
									<a href='#' className='tag'>Ecommerce</a>
									<a href='#' className='tag'>web design</a>
									<a href='#' className='tag'>wordpres</a>
									<a href='#' className='tag'>mobile</a>
									<a href='#' className='tag'>retina</a>
									<a href='#' className='tag'>multi-purpose</a>
									<a href='#' className='tag'>blog posts</a>
									<a href='#' className='tag'>new sliders</a>
									<a href='#' className='tag'>popular</a>
									<a href='#' className='tag'>recent</a>
									<a href='#' className='tag'>modern</a>
									<a href='#' className='tag'>themeforest</a>
								</div>
							</div>
							<div className='col-sm-6 col-md-3'>
								<h5 className='section-title box'>Useful Links</h5>
								<ul className='arrow useful-links'>
									<li><a href='#'>About SoapTheme</a></li>
									<li><a href='#'>Video Overview</a></li>
									<li><a href='#'>Customer Support</a></li>
									<li><a href='#'>Theme Features</a></li>
									<li><a href='#'>Breaking News</a></li>
									<li><a href='#'>Upcoming Updates</a></li>
								</ul>
							</div>
							<div className='col-sm-6 col-md-3'>
								<h5 className='section-title box'>About Archery</h5>
								<p>Mircale is a Hand Crafted Pexil Perfect - Responsive - Multi-Purpose & Retina Ready Premium Wordpress Theme which sets new standards for the web design in 2016.</p>
								<div className='social-icons'>
									<a href='#' className='social-icon'><i className='fa fa-twitter has-circle' data-toggle='tooltip' data-placement='top' title='Twitter'></i></a>
									<a href='#' className='social-icon'><i className='fa fa-facebook has-circle' data-toggle='tooltip' data-placement='top' title='Facebook'></i></a>
									<a href='#' className='social-icon'><i className='fa fa-google-plus has-circle' data-toggle='tooltip' data-placement='top' title='GooglePlus'></i></a>
									<a href='#' className='social-icon'><i className='fa fa-linkedin has-circle' data-toggle='tooltip' data-placement='top' title='LinkedIn'></i></a>
									<a href='#' className='social-icon'><i className='fa fa-skype has-circle' data-toggle='tooltip' data-placement='top' title='Skype'></i></a>
									<a href='#' className='social-icon'><i className='fa fa-dribbble has-circle' data-toggle='tooltip' data-placement='top' title='Dribbble'></i></a>
									<a href='#' className='social-icon'><i className='fa fa-tumblr has-circle' data-toggle='tooltip' data-placement='top' title='Tumblr'></i></a>
								</div>
								<a href='#' className='btn btn-sm style4'>Contact Us</a>
								<a href='#' className='btn btn-sm style4'>Purchase</a>
								<a href='#' className='back-to-top'><span></span></a>
							</div>
						</div>
					</div>
				</div>
				<div className='footer-bottom-area'>
					<div className='container'>
						<div className='copyright-area'>
							<nav className='secondary-menu'>
								<ul className='nav nav-pills'>
									<li><a href='index.html'>Home</a></li>
									<li><a href='#'>Pages</a></li>
									<li><a href='#'>Shortcodes</a></li>
									<li><a href='#'>Portfolio</a></li>
									<li><a href='#'>Blog</a></li>
									<li><a href='#'>Contact</a></li>
									<li><a href='#'>Shop</a></li>
								</ul>
							</nav>
							<div className='copyright'>
								&copy; 2016 Archery
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}