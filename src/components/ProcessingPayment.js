import React from 'react';
import axios from 'axios';
import moltin from '../vendor/moltin';

export default class Product extends React.Component {
	state = {
		payerId: this.props.location.query.PayerID,
		token: this.props.location.query.token,
		paymentComplete: false,
		paymentInProcess: true,
		paymentError: false
	};

	componentDidMount() {
		let _this = this;
		console.log(this.state);

		moltin.Authenticate(() => {
			console.log(moltin.options.auth.token);

			axios({
				method:'post',
				url:'https://api.molt.in/v1/checkout/payment/complete_purchase/1523991005664117050?token=' + this.state.token + '&PayerID=' + this.state.payerId,
				headers: {'Authorization': moltin.options.auth.token},
				data: {'Authorization': moltin.options.auth.token}
			})
				.then(function(response) {
					console.log(response);
					if (response.status === true) {
						_this.setState({
							paymentComplete: true
						})
					}

					else {
						_this.setState({
							paymentError: true
						})
					}
				})

				.catch(function (error) {
					_this.setState({
						paymentError: true,
					})
				});
		});
	}

	render() {

		return (
			<div >
				<div className={`payment-processing mb-m ${this.state.paymentInProcess ? '' : 'hidden'}`}>
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

				<div className={`payment-complete ${this.state.paymentComplete ? '' : 'hidden'}`}>
					<div className="ui icon positive message">
						<i className="check circle icon color-green"></i>
						<div className="content">
							<div className="header">
								Success
							</div>
							<p>Your payment was processed successfully. Please check your email for more details. If you have any questions, please contact us at <span className="email">contact@kanmer.de</span></p>
						</div>
					</div>
				</div>

				<div className={`error ${this.state.paymentError ? '' : 'hidden'}`}>
					<div className="ui error message">
						<div className="content">
							<div className="header">
								There was an error with your payment.
							</div>
							<p>Please try again or contact us at <span className="email">contact@kanmer.de</span></p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
