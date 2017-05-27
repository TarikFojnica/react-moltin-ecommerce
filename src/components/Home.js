import React, { Component } from 'react';
import ProductList from './ProductList';
import Cover from './Cover';
import { observer } from 'mobx-react';
import {Helmet} from "react-helmet";

@observer(['products'])
class Home extends React.Component {
	state = {
		data: [],
		loaded: false
	};

	render() {
		return (
			<div className="home-intro">
				<Helmet>
					<title>Kanmer | Experience an old fashion the new way</title>
				</Helmet>

				<Cover/>
				<ProductList size="three" data={this.props.products.products} />
			</div>
		);
	}
}

export default Home;
