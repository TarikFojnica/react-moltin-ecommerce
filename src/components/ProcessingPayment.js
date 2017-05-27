import React from 'react';
import axios from 'axios';
import moltin from '../vendor/moltin';

export default class Product extends React.Component {
	state = {
		payerId: this.props.location.query.PayerID,
		token: this.props.location.query.token
	};

	componentDidMount() {
		console.log(this.state);

		moltin.Authenticate(() => {
			console.log(moltin.options.auth.token);

			axios({
				method:'post',
				url:'https://api.molt.in/v1/checkout/payment/complete_purchase/1523986963168756022?token=' + this.state.token + '=' + this.state.payerId,
				headers: {'Authorization': moltin.options.auth.token},
				data: {'Authorization': moltin.options.auth.token}
			})
				.then(function(response) {
					console.log(response);
				});
		});
	}

	render() {

		return (
			<div className="processing-payment">
				<div className="loading">
					<div className="ui icon warning message">
						<i className="notched circle loading icon" />
						<div className="content">
							<div className="header">
								Just one second
							</div>
							<p>We processing your PayPal payment. Please don't close or refresh this tab</p>
						</div>
					</div>
				</div>

				<div className="finished">

					<div className="ui icon positive message">
						<i className="check circle icon color-green"></i>
						<div className="content">
							<div className="header">
								Success
							</div>
							<p>Your payment was processed successfully. Please check your email for more details. If you have any questions, please contact us to <span className="email">contact@kanmer.de</span></p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
