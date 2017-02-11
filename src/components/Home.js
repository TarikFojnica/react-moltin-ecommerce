import React, { Component } from 'react';
import moltin from '../vendor/moltin';
import ProductList from './ProductList';
import Cover from './Cover'

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
		});
	}

	render() {
		return (
			<div className="home-intro">
				<Cover/>
				<ProductList products={this.state.data}/>
			</div>
		);
	}
}

export default Home;
