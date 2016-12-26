import React from 'react'
import moltin from '../vendor/moltin';
import events from '../vendor/pub-sub'

export default class Cart extends React.Component {
	state = {
		currentCart : {
			total_items: null
		}
	};

	componentDidMount() {
		let _this = this;

		moltin.Authenticate(function () {
			moltin.Cart.Contents(function(items) {
				_this.setState({
					currentCart: items
				})
			}, function(error) {
				// Something went wrong...
			});
		});

		// Listen to the ADD_TO_CART event
		events.subscribe('ADD_TO_CART', function() {
			// Once the new item is added to the cart, increase the number of total_items by one.
			// We could call the moltin.Cart.Contents() API function, but we want to reduce the number
			// of API calls as we are limited.
			_this.setState({
				currentCart: {
					total_items: _this.state.currentCart.total_items += 1
				}
			})
		});
	}

	render() {
		return (
			<span className="cart">
				{this.state.currentCart.total_items}
			</span>
		);
	}
}
