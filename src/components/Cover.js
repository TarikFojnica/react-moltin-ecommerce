import React from 'react'
import moltin from '../vendor/moltin';

export default class Cover extends React.Component {
	//
	// componentDidMount() {
	// 	let _this = this;
	//
	// 	moltin.Authenticate(function() {
	// 		_this.setState({
	// 			product: moltin.Product.Get(_this.state.id),
	// 		})
	// 	});
	// }

	render() {
		// const backgroundImage = {
		// 	backgroundImage: 'url(' + this.state.product.images[0].url.http + ')',
		// };

		return (
			<div className="ui container">
				<div className="cover">
					<div className="cover-inner">
						<div className="content">
							<h1>Die bordeauxrote, handgewebte</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus turpis eget velit tempus convallis. In hac habitasse platea dictumst. Nunc a tortor sed eros efficitur bibendum. Aliquam non consequat augue, ac posuere nunc. Donec egestas accumsan purus tincidunt dapibus. Quisque ferm</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
