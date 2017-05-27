import React from 'react'

export default class Product extends React.Component {
	state = {
		id: this.props.location.pathname.replace('/product/', ''), // remove string '/product/' from the url and use the id only
		loaded: false,
		product: {
			images: [
				{
					url: ''
				}
			],

			price: {
				value: ''
			}
		},
		galleryLoaded: false
	};

	componentDidMount() {
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
