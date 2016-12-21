import React from 'react'
import moltin from '../vendor/moltin';

export default class Product extends React.Component {
	state = {
		product: [],
		id: this.props.location.pathname.replace('/product/', ''), // remove string '/product/' from the url
		loaded: false
	};

	componentDidMount() {
		let _this = this;

		moltin.Authenticate(function() {
			_this.setState({
				product: moltin.Product.Get(_this.state.id)
			})
		});
	}

	render() {
		return (
			<div className="product-container">
				<div className="ui container">
					<div className="ui grid">
						<div className="eight wide column"><h1>{this.state.product.title}</h1></div>
						<div className="eight wide column">abc</div>
					</div>
				</div>
			</div>
		);
	}
}
