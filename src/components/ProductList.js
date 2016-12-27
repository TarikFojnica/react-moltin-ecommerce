import React from 'react';
import {Link} from 'react-router'
import moltin from '../vendor/moltin';
import events from '../vendor/pub-sub'

export default class Spotlight extends React.Component {
	state = {
		clickedId: ''
	};

	addToCart = (clicked) => {
		let _this = this;
		this.setState({
			clickedId: clicked
		});

		moltin.Authenticate(function() {
			moltin.Cart.Insert('1409707278864483046', '1', null, function(cart) {
				console.log('a', cart);
				events.publish('ADD_TO_CART');
				_this.setState({
					clickedId : ''
				})

			}, function(error) {
				console.log('b', error);
			});
		});
	};

	render() {
		// Create allItems function from the props we get from Home component
		let allItems = this.props.articles.map((result, id) => {
			return (
				<div key={id} className="column product-list-element">
					<div className="ui card" key={id}>
						<div className="image">
							<img src={result.images[0].url.http} />

							<div className="extra content text-center">
								<div className="buttons-container">
									<button onClick={() => { this.addToCart(id)}} className={`ui inverted button ${this.state.clickedId === id ? 'loading' : ''}`}><i className="add to cart icon"></i>Add to Cart</button>
									<Link className="ui inverted button" to={`/product/${result.id}`}>Details</Link>
								</div>
							</div>
						</div>
						<div className="content">
							<a className="header">{result.title}</a>
							<div className="price">
							</div>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div className="spotlight-container">
				<div className="ui container">
					<div className="ui grid">

						<div className="three column row">
							{allItems}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
