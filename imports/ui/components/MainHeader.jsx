import React from 'react';
import Slider from 'react-slick';

export default class MainHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const settingsSlider = {
			arrows: true,
			autoplay: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div>
				<div>
					<ul>
						<Slider { ...settingsSlider }>
							<div><img src='http://placehold.it/1920x1200' /></div>
							<div><img src='http://placehold.it/1920x1200' /></div>
							<div><img src='http://placehold.it/1920x1200' /></div>
							<div><img src='http://placehold.it/1920x1200' /></div>
						</Slider>
					</ul>
				</div>
			</div>
		);
	}
}