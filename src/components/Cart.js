import React from 'react'
import events from '../vendor/pub-sub';
import {Link} from 'react-router'

export default class Cart extends React.Component {
	state = {
		currentCart : {
			total_items: null
		}
	};

	componentDidMount() {
		let _this = this;

		// Listen to the CART_UPDATED event, and update the header cart content accordingly
		events.subscribe('CART_UPDATED', function(obj) {
			_this.setState({
				currentCart: {
					total_items: obj.cart.total_items
				}
			})
		});
	}

	render() {
		return (
			<Link to="/checkout" className={`item ui right cart-item floated ${this.state.currentCart.total_items >= 1 ? 'green' : ''}`}>
				<span>{this.state.currentCart.total_items}</span>
				<i className="in cart icon"></i>
			</Link>
		);
	}
}
