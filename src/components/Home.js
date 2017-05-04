import React, { Component } from 'react';
import ProductList from './ProductList';
import Cover from './Cover';
import { observer } from 'mobx-react';

@observer(['products'])
class Home extends React.Component {
	state = {
		data: [],
		loaded: false
	};

	render() {
		return (
			<div className="home-intro">
				<Cover/>
				<ProductList size="three" data={this.props.products.products} />
			</div>
		);
	}
}

export default Home;
