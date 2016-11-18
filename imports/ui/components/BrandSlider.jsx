import React from 'react';
import Slider from 'react-slick';

export default class BrandSlider extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const settingsSlider = {
			arrows: true,
			infinite: true,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 1
		};
		return (
			<div className='block'>
				<div className='overflow-hidden'>
					<div className='brand-slider owl-carousel style1'>
						<Slider { ...settingsSlider }>
							<a href='#'>
								<img src='http://placehold.it/200x80' alt=''/>
							</a>
							<a href='#'>
								<img src='http://placehold.it/200x80' alt=''/>
							</a>
							<a href='#'>
								<img src='http://placehold.it/200x80' alt=''/>
							</a>
							<a href='#'>
								<img src='http://placehold.it/200x80' alt=''/>
							</a>
							<a href='#'>
								<img src='http://placehold.it/200x80' alt=''/>
							</a>
						</Slider>
					</div>
				</div>
			</div>
		);
	}
}