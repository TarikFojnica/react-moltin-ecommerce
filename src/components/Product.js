import React from 'react'
import moltin from '../vendor/moltin';

export default class Product extends React.Component {
	state = {
		id: this.props.location.pathname.replace('/product/', ''), // remove string '/product/' from the url
		loaded: false,
		product: {
			images: [
				{
					url: '' // Not sure why, but can't access the images array otherwise. Maybe will investigate. Maybe.
				}
			]
		}
	};

	componentDidMount() {
		let _this = this;

		moltin.Authenticate(function() {
			_this.setState({
				product: moltin.Product.Get(_this.state.id),
			});
		});
	}

	render() {
		console.log(this.state.product);

		const backgroundImage = {
			backgroundImage: 'url(' + this.state.product.images[0].url.http + ')',
		};

		return (
			<div className="product-container">
				<div className="ui container">
					<div className="ui grid">
						<div className="nine wide column">
							<div className="preview-image" style={backgroundImage}>
							</div>
						</div>
						<div className="seven wide column">
							<div className="product-details">
								<h1>{this.state.product.title}</h1>
								<p>{this.state.product.description}</p>
								<span className="price"><i className="euro icon"></i>{this.state.product.sale_price}</span>
								<button className="fluid ui button teal"><i className="add to cart icon"></i>Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
