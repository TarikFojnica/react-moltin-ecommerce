import React from 'react';
import ProductList from '../components/ProductList';
import moltin from '../vendor/moltin';
import { observer } from 'mobx-react';

@observer(['products'])
export default class Category extends React.Component {
	state = {
		id: this.props.location.pathname.replace('/category/', ''), // remove string '/product/' from the url and use the id only,
		categoryProducts:[],
		titles: {
			'1467531110287147904': 'Sleeves',
			'1468917017380651382': 'Veg. Tanned Leather Sleeves',
			'1468916049268179317': 'Leather Sleeves',
			'1467587096343479184': 'Bow Ties'
		}
	};


	componentWillReceiveProps() {
		this.setState({
			id: this.props.location.pathname.replace('/category/', ''),
		});
		this.updateData();
	}

	updateData() {
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

	componentDidMount() {
		this.updateData();
	}

	render() {

		return (
			<div className="category-page">
				<div className="header">
					<h1>{this.state.titles[this.state.id]}</h1>
				</div>

				<div className="body">
					<ProductList category={this.state.id} size="four" data={this.state.categoryProducts}/>
				</div>
			</div>
		);
	}
}
