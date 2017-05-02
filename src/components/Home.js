import React, { Component } from 'react';
import moltin from '../vendor/moltin';
import ProductList from './ProductList';
import Cover from './Cover';
import { observer } from 'mobx-react';


@observer(['products'])
class Home extends React.Component {
	state = {
		data: [],
		loaded: false
	};

	componentDidMount() {
		let _this = this;
		moltin.Authenticate(function() {
			_this.setState({
				data: moltin.Product.List()
			});

			_this.props.products.products = moltin.Product.List();

		});
	}

	render() {
		console.log(this.props.products.products[0]);
		return (
			<div className="home-intro">
				<Cover/>
				<ProductList size="three" />
			</div>
		);
	}
}

export default Home;
