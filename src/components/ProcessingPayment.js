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
		console.log(this.props);

		moltin.Authenticate(() => {

			axios({
				method:'post',
				url:'https://api.molt.in/v1/checkout/payment/complete_purchase/'+ this.props.params.orderId + '?token=' + this.state.token + '&PayerID=' + this.state.payerId,
				headers: {'Authorization': moltin.options.auth.token},
				data: {'Authorization': moltin.options.auth.token}
			})
				.then(function(response) {
					if (response.status === 200) {
						_this.setState({
							paymentComplete: true,
							paymentInProcess: false
						})
					}

					else {
						_this.setState({
							paymentError: true,
							paymentInProcess: false
						})
					}
				})

				.catch(function (error) {
					_this.setState({
						paymentInProcess: false,
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
							<p>We are processing your PayPal payment. Please don't close or refresh this tab</p>
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
								There was an error with your payment. Please check one of the following.
							</div>
							<ul className="list">
								<li>You don't have enough funds on your PayPal account</li>
								<li>The technical error occurs</li>
								<li>You came to this link by mistake</li>
							</ul>

							<p>Feel free to contact our support at <span className="email">contact@kanmer.de</span></p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
