import React from 'react';
import moltin from '../vendor/moltin';
import events from '../vendor/pub-sub'

export default class Cover extends React.Component {
	state = {
		products: null,
		lastProduct : {
			featured_large : {
				value: '',
				data : {
					url : {
						http: '',
						https: ''
					}
				}
			},
		},
		featured_category: '1415212879321235847', // ID of the category we use in the FEATURED section of the site
	};

	componentDidMount() {
		let _this = this;
		moltin.Authenticate(function() {
			moltin.Product.Search({category: _this.state.featured_category, status: '1'}, function(products) {
				_this.setState({
					products : products, // all the products from the category
					lastProduct: products[products.length - 1] // since we display only the last item, let's take the newest one
				});
			}, function(error) {
				// Something went wrong...
			});
		})
	}

	render() {

		const backgroundImage = {
			backgroundImage: 'url(' + this.state.lastProduct.featured_large.data.url.https + ')',
		};

		console.log(this.state.lastProduct.featured_large.data.url.https);

		return (
			<div className="cover" style={backgroundImage}>
				<div className="cover-inner">
					<div className="content">
						<h1>{this.state.lastProduct.title}</h1>
						<p>{this.state.lastProduct.description}</p>
						<span className="price">
							{this.state.lastProduct.sale_price}
						</span>
						<button className="ui inverted teal button">
							<i className="add to cart icon"></i> Add to Cart
						</button>
						<button className="ui inverted button">
							Details
						</button>
					</div>
				</div>
			</div>
		);
	}
}
