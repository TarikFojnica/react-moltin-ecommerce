import React, { Component } from 'react'
import moltin from '../vendor/moltin';
import PaymentForm from '../components/PaymentForm'
import CartDetails from '../components/CartDetails'

export default class Checkout extends React.Component {
	render() {

		return (
			<div className="checkout-container">
				<div className="ui grid">
					<div className="seven wide column">
						<PaymentForm/>
					</div>
					<div className="nine wide column pt-n pb-n">
						<CartDetails/>
					</div>
				</div>
			</div>
		);
	}
}
