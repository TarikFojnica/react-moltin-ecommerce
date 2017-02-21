import React from 'react';
import events from '../vendor/pub-sub';
import moltin from '../vendor/moltin';
import _ from 'lodash/object';
import {Link} from 'react-router';
import LoadingIcon from '../../public/ripple.svg';

export default class SidebarCart extends React.Component {
	state = {
		currentCart : {
			total_items: 0,
			totals : {
				post_discount : {
					formatted : {
						with_tax: null
					}
				}
			}
		},
		addingToCart: false
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

		// Listen to theCART_UPDATED event. Once it happens, take the object from the
		// published event and pass it to the currentCart state
		events.subscribe('CART_UPDATED', function(obj) {
			_this.setState({
				currentCart: obj.cart
			});
		});

		// Listen to the ADD_TO_CART event
		events.subscribe('ADD_TO_CART', function(obj) {
			_this.setState({
				addingToCart: obj.adding
			});

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
				<h4>In Cart: <span className="price">{this.state.currentCart.totals.post_discount.formatted.with_tax}</span></h4>
				{/*// If the cart is not empty, add 'active' class to it*/}
				<Link to="/checkout" className={`ui checkout button tiny ${this.state.currentCart.total_items >= 1 ? 'active': ''}`}>
					<i className="paypal icon"></i>Checkout</Link>
				<div className="ui items">
					{preparedCartContent}
				</div>

				<img className={`loading-icon ${!this.state.addingToCart ? 'hidden' : ''}`} src={LoadingIcon} alt="Loading"/>
			</div>
		);
	}
}
