import React from 'react';
import {Link} from 'react-router'
import moltin from '../vendor/moltin';
import events from '../vendor/pub-sub'

export default class Spotlight extends React.Component {
	state = {
		clickedId: '',
		adding: false,
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
			moltin.Cart.Insert(clicked.id, '1', null, function(cart) {

				// Inform other listeners that ADD_TO_CART event is complete
				events.publish('ADD_TO_CART', {
					adding: false
				});

				// We use this info in the component itself
				_this.setState({
					adding: false
				})

			}, function(error) {
				console.log(error);
			});
		});
	};

	render() {
		// Create allItems function from the props we get from Home component
		let allItems = this.props.products.map((result, id) => {
			return (
				<div key={id} className="column product-list-element">
					<div className="ui card" key={id}>
						<div className="image">
							{
								(result.featured_small)
									// If we have an image set
									? <img src={result.featured_small.data.url.https} />

									//put some placeholder
									: <img src="http://placehold.it/300x380" />
							}


							<div className="extra content">
								<div className="buttons-container">
									<button onClick={() => { this.addToCart(result)}} className={`ui inverted button ${this.state.adding ? 'disabled' : ''}`}>
										<i className="add to cart icon"></i>Add to Cart
									</button>
									<Link className="ui inverted button" to={`/product/${result.id}`}>Details</Link>
								</div>
							</div>
						</div>
						<div className="content">
							<span className="header">{result.title}</span>
							<span className="sub">Collection Name</span>
							<div className="price">
								<span>{result.price.value}</span>
							</div>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div className="spotlight-container">
				<div className="ui grid">
					<div className="three column row">
						{allItems}
					</div>
				</div>
			</div>
		);
	}
}
