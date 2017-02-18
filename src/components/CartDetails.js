import React, { Component } from 'react'
import moltin from '../vendor/moltin';

export default class CartDetails extends React.Component {
	render() {

		return (
			<div className="cart-details">
				<div className="ui items">
					<div className="item">
						<div className="ui tiny image">
							<img src="http://placehold.it/50x50" />
						</div>
						<div className="middle aligned content">
							<a className="header">12 Years a Slave</a>
							<span className="price">$10.00</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
