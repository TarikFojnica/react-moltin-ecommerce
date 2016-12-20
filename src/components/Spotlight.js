import React from 'react'

export default class Spotlight extends React.Component {

	render() {
		let allItems = this.props.articles.map(function(result, id) {
			return (
				<div key={id} className="column">
					<div className="ui card" key={id}>
						<div className="image">
							<img src={result.images[0].url.http} />
						</div>
						<div className="content">
							<a className="header">{result.title}</a>
							<div className="meta">
								<span className="date">Joined in 2013</span>
							</div>
							<div className="description">
								Kristy is an art director living in New York.
							</div>
						</div>
						<div className="extra content">
							<a>
								<i className="user icon" />
								22 Friends
							</a>
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
