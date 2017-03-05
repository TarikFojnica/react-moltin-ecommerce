import React from 'react'
import moltin from '../vendor/moltin';
import events from '../vendor/pub-sub'


export default class AddToCart extends React.Component {
	state = {
		adding: false
	};

	addToCart = (clicked) => {
		let _this = this;

		// Fire ADD_TO_CART immediately after user initiate the action
		events.publish('ADD_TO_CART', {
			adding: true
		});

		this.setState({
			clickedId: clicked,
			adding: true
		});

		moltin.Authenticate(function() {
			moltin.Cart.Insert(clicked, '1', null, function(cart) {

				// Inform other listeners that ADD_TO_CART event is complete
				events.publish('ADD_TO_CART', {
					adding: false
				});

				// We use this info in the component itself
				_this.setState({
					adding: false
				})

			}, function(error) {
				_this.setState({
					adding: false
				})
				console.log(error);
			});
		});
	};


	render() {
		return (
			<button className={`ui button ${this.props.additionalClass} ${this.state.adding ? 'disabled' : ''}`} onClick={() => { this.addToCart(this.props.productId)}}>
				<i className="add to cart icon"></i> Add to Cart
			</button>
		);
	}
}
