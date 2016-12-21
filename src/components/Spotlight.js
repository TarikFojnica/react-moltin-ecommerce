import React from 'react';
import {Link} from 'react-router'

export default class Spotlight extends React.Component {

	render() {
		// Create allItems function from the props we get from Home component
		let allItems = this.props.articles.map(function(result, id) {
			return (
				<div key={id} className="column spotlight-element">
					<div className="ui card" key={id}>
						<div className="image">
							<img src={result.images[0].url.http} />
						</div>
						<div className="content">
							<a className="header">{result.title}</a>
							<div className="price">
							</div>
						</div>
						<div className="extra content text-center">
							<div className="ui buttons">
								<button className="ui button"><i className="add to cart icon"></i>Add to Cart</button>

								<div className="or"></div>
								<Link className="ui button brown" to={`/product/${result.id}`}>Details</Link>
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
