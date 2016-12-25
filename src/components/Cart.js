import React from 'react'
import moltin from '../vendor/moltin';
import events from '../vendor/pub-sub'

export default class Cart extends React.Component {
	state = {
		currentCart : {}
	};

	componentDidMount() {
		let _this = this;

		events.subscribe('ADD_TO_CART', function(obj) {
			moltin.Authenticate(function() {
				_this.setState({
					currentCart: moltin.Cart.Contents(),
				})
			});
		});
	}

	render() {

		return (
			<div className="cart">
				<h1>{this.state.currentCart.total_items}</h1>
			</div>
		);
	}
}
