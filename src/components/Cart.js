import React from 'react'
import moltin from '../vendor/moltin';

export default class Cart extends React.Component {
	state = {
		currentCart : {}
	};

	componentDidMount() {
		let _this = this;

		moltin.Authenticate(function() {
			_this.setState({
				currentCart: moltin.Cart.Contents(),
			})
		});
	}

	render() {
		console.log(this.state.currentCart);

		return (
			<div className="cart">
				a
			</div>
		);
	}
}
