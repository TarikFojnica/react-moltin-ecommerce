import React from 'react';
import ProductList from '../components/ProductList';
import moltin from '../vendor/moltin';
import { observer } from 'mobx-react';

@observer(['products'])
export default class Category extends React.Component {
	state = {
		id: this.props.location.pathname.replace('/category/', ''), // remove string '/product/' from the url and use the id only
		categoryProducts: []
	};

	componentDidMount() {
		let _this = this;
		moltin.Authenticate(function() {
			// Retrieve the featured products
			moltin.Product.Search({category: _this.state.id, status: '1'}, function(products) {
				_this.setState({
					categoryProducts: products
				});

			}, function(error) {
				// Something went wrong...
			});
		});
	}

	render() {
		return (
			<div className="category-page">
				<div className="header">
					<h1>Men Bags</h1>
				</div>

				<div className="body">
					<ProductList category={this.state.id} size="four" data={this.state.categoryProducts}/>
				</div>
			</div>
		);
	}
}
