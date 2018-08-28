import React, { Component } from 'react'
import moltin from '../vendor/moltin';
import PaymentForm from '../components/PaymentForm';
import CartDetails from '../components/CartDetails';
import {Helmet} from "react-helmet";

export default class Checkout extends React.Component {
	render() {

		return (
			<div className="checkout-container">
				<Helmet>
					<title>Kanmer | Checkout</title>
				</Helmet>

				<div className="ui stackable grid ">
					<div className="nine wide column pt-n pb-n right floated">
						<CartDetails/>
					</div>

					<div className="seven wide column right floated">
						<PaymentForm/>
					</div>
				</div>
			</div>
		);
	}
}
