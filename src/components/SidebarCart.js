import React from 'react'
import events from '../vendor/pub-sub'
import moltin from '../vendor/moltin'
import _ from 'lodash/object'
import {Link} from 'react-router'

export default class SidebarCart extends React.Component {
	state = {
		currentCart : {
			total_items: 0,
		}
	};

	componentDidMount() {
		let _this = this;


		// Initial content load of the cart content
		moltin.Authenticate(function () {
			moltin.Cart.Contents(function(items) {
				events.publish('CART_UPDATED', {
					cart: items // any argument
				});

				_this.setState({
					currentCart: items
				})
			}, function(error) {
				// Something went wrong...
			});
		});

		// Listen to the ADD_TO_CART event
		events.subscribe('ADD_TO_CART', function() {

			// Once it fires, get the latest cart content data
			moltin.Authenticate(function () {
				moltin.Cart.Contents(function(items) {

					// Pass the new cart content to CART_UPDATED event
					events.publish('CART_UPDATED', {
						cart: items
					});

					_this.setState({
						currentCart: items
					})
				}, function(error) {
					// Something went wrong...
				});
			});
		});
	}

	render() {
		let preparedCartContent;
		console.log(this.state.currentCart.total_items);
		let cartContent = _.values(this.state.currentCart.contents);

		// If the cart is not empty, display the cart items
		if (this.state.currentCart.total_items >= 1) {
			preparedCartContent = cartContent.map((result, id) => {
				return(
					<div className="item" key={id}>
						<div className="ui tiny image">
							{
								(result.featured_small)
									// If we have an image set
									? <img src={result.featured_small.data.url.https} />

									//else put some placeholder
									: <img src="http://placehold.it/300x380" />
							}
						</div>
						<div className="content">
							<span className="header">{result.name} <br/><span className="price">{result.pricing.formatted.with_tax}</span></span>
						</div>
					</div>
				)
			});
		}

		// If the cart is empty, display the message
		else {
			preparedCartContent = (
				<span className="empty">
					The Cart is empty
				</span>
			);
		}


		return (
			<div className="sidebar-cart sidebar-element">
				<h4>In Cart <i className="in cart icon"></i></h4>
				<Link to="/" className={`ui checkout button tiny ${this.state.currentCart.total_items >= 1 ? 'active': ''}`}>
					<i className="paypal icon"></i>Checkout</Link>
				<div className="ui items">
					{preparedCartContent}
				</div>
			</div>
		);
	}
}
