import React from 'react';
import {Link} from 'react-router';
import AddToCartButton from '../components/AddToCartButton'

export default class Spotlight extends React.Component {
	state = {
		clickedId: '',
		adding: false,
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
									<AddToCartButton productId={result.id} additionalClass="inverted"/>
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
				<div className="ui stackable three column grid">
					{allItems}
				</div>
			</div>
		);
	}
}
