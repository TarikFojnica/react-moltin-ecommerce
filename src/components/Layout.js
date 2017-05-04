import React, { Component } from 'react';
import '../vendor/semantic/dist/semantic.min.css';
import '../styles/css/main.css';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

import moltin from '../vendor/moltin';
import { observer } from 'mobx-react';

@observer(['products', 'featured'])
class Layout extends React.Component {

	componentDidMount() {
		let _this = this;
		moltin.Authenticate(function() {
			// Retrieve all products
			moltin.Product.List({limit: 20}, function(products) {
				_this.props.products.products = products;

				// Retrieve the last featured product
				moltin.Product.Search({category: '1467586457391596428', status: '1'}, function(product) {
					_this.props.featured.featuredObject = product[product.length - 1];
					_this.props.featured.featuredObject.featuredAcquired = true;

					moltin.Category.List(null, function(category) {
						console.log(category);
					}, function(error) {
						// Something went wrong...
					});

				}, function(error) {
					// Something went wrong...
				});

			}, function(error) {
				// Something went wrong...
			});
		});
	}

	render() {
		return (
			<div className="app-container">
				<Sidebar/>

				<div className="pusher">
					<Header />
					<div className="ui container fluid">
						<div className="app-content">{this.props.children}</div>
					</div>
					<Footer/>
				</div>
			</div>
		);
	}
}

export default Layout;
