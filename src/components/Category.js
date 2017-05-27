import React from 'react';
import ProductList from '../components/ProductList';
import moltin from '../vendor/moltin';
import { observer } from 'mobx-react';

@observer(['products'])
export default class Category extends React.Component {
	state = {
		categoryProducts:[],
		titles: {
			'1467531110287147904': 'Sleeves',
			'1468917017380651382': 'Veg. Tanned Leather Sleeves',
			'1468916049268179317': 'Leather Sleeves',
			'1467587096343479184': 'Bow Ties'
		}
	};


	componentWillReceiveProps() {
		this.updateData();
	}

	updateData() {
		let _this = this;
		moltin.Authenticate(function() {
			// Retrieve the featured products
			moltin.Product.Search({category: _this.props.location.pathname.replace('/category/', ''), status: '1'}, function(products) {

				_this.setState({
					categoryProducts: products
				});

			}, function(error) {
				// Something went wrong...
			});
		});
	}

	componentDidMount() {
		this.updateData();
	}

	render() {

		return (
			<div className="category-page">
				<div className="header">
					<h1>{this.state.titles[this.props.location.pathname.replace('/category/', '')]}</h1>
				</div>

				<div className="body">
					<ProductList category={this.state.id} size="four" data={this.state.categoryProducts}/>
				</div>
			</div>
		);
	}
}
