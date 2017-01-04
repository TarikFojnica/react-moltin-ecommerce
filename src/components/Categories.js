import React from 'react'

export default class Categories extends React.Component {
	render() {
		return (
			<div className="ui form sidebar-element">
				<h4>CATEGORIES</h4>
				<div className="ui primary vertical menu">
					<a className="item">
						Bows
					</a>

					<a className="item">
						Women Bags
					</a>
					<a className="item">
						Men Bags
					</a>
				</div>
			</div>
		);
	}
}
