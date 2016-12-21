import React from 'react'

export default class Spotlight extends React.Component {

	render() {
		let allItems = this.props.articles.map(function(result, id) {
			return (
				<div key={id} className="column spotlight-element">
					<div className="ui card" key={id}>
						<div className="image">
							<img src={result.images[0].url.http} />
						</div>
						<div className="content">
							<a className="header">{result.title}</a>
							<div className="description">
								Kristy is an art director living in New York.
							</div>
						</div>
						<div className="extra content text-center">
							<div className="ui vertical animated button">
								<div className="hidden content">Add To Cart</div>
								<div className="visible content">
									<i className="shop icon"></i>
								</div>
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
