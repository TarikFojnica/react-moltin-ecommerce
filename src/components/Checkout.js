import React, { Component } from 'react'
import moltin from '../vendor/moltin';
import PurchaseForm from '../components/PurchaseForm'

export default class Checkout extends React.Component {
	render() {

		return (
			<div className="ui grid">
				<div className="eight wide column">
					<div className="payment-form">
						<PurchaseForm/>
					</div>
				</div>
				<div className="eight wide column">
					<div className="cart-details">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta urna eu nulla ullamcorper, iaculis efficitur eros ornare. Aliquam finibus et leo in dignissim. Sed efficitur ligula et vehicula facilisis. Aliquam finibus cursus neque, ultrices semper lorem commodo sit amet. Nulla fermentum elit est. Quisque feugiat lacus non vulputate congue. Morbi rhoncus, nibh id commodo aliquam, neque turpis pharetra diam, ac imperdiet mauris leo ut nisi. Vest
					</div>
				</div>
			</div>
		);
	}
}
