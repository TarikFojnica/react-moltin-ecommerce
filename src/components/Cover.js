import React from 'react';
import moltin from '../vendor/moltin';
import events from '../vendor/pub-sub'

export default class Cover extends React.Component {
	state = {
		products: null,
		featured_category: '1415212879321235847',
		length: 0
	};

	componentDidMount() {
		let _this = this;
		moltin.Authenticate(function() {
			moltin.Product.Search({category: _this.state.featured_category, status: '1'}, function(products) {
				_this.setState({
					products : products,
					length: products.length
				});
				console.log(products)
			}, function(error) {
				// Something went wrong...
			});
		})
	}

	render() {

		// const backgroundImage = {
		// 	backgroundImage: 'url(' + this.state.product.images[0].url.http + ')',
		// };
		console.log(this.state.length);

		return (
			<div className="cover">
				<h1></h1>
			</div>
		);
	}
}
