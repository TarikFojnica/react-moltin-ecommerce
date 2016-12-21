import React from 'react'
import moltin from '../vendor/moltin';

export default class Product extends React.Component {
	state = {
		data: [],
		loaded: false
	};

	componentDidMount() {
		let _this = this;

		moltin.Authenticate(function() {
			_this.setState({
				data: moltin.Product.Get('1409707278864483046')
			})
		});
	}

	render() {
		let allItems = this.state.data(function(result, id) {
			return (
				<div key={id} className="item">
					<h1>{result.name}</h1>
				</div>
			);
		});

		return (
			<div className="product-container">
				<div className="ui container">
					<div className="ui grid">
						<div className="eight wide column">{allItems}</div>
						<div className="eight wide column">abc</div>
					</div>
				</div>
			</div>
		);
	}
}
