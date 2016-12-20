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
							<span className="ui button primary">
								Add To Cart
							</span>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div className="three column row">
				{allItems}
			</div>
		);
	}
}
