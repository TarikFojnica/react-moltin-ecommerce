import React from 'react'

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="ui fixed menu">
					<div className="ui container">
						<a href="/" className="header item">
							KanMer
						</a>
						<a href="#" className="item">Home</a>
						<a className="item ui right floated" href="#">Cart</a>
					</div>
				</div>
			</header>
		);
	}
}
