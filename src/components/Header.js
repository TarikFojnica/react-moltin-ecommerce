import React from 'react'

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="ui borderless main menu">
					<div className="ui container">
						<div href="#" className="header item">
								Kanmer
						</div>
						<a href="#" className="item">Bow Ties</a>
						<a href="#" className="item">Bags</a>
						<a href="#" className="item right floated">Cart</a>
					</div>
				</div>
			</header>
		);
	}
}
